#!/bin/bash

BUILDFN="./hufilter.tmp"

# Start build with the header
echo "[Adblock Plus 2.0]" > $BUILDFN;

# Walk through sections and add them to the build
for x in ` ls -1 ./build/ `;
    do
        echo "!##################### $x ##################### " >> $BUILDFN;
        cat "./build/$x" >> "$BUILDFN";
        echo "!##################### END $x ##################### " >> $BUILDFN;
    done;

# New version string for the filter
VERSION=`date -u "+%Y%m%d%H%M"`;
# Last modified, check easylist.txt for example
LAST_MODIFIED=`LC_ALL=en_GB.UTF-8 date -u "+%d %b %Y %H:%M %Z"`;

# Replace placeholder with the actual version
sed -i $BUILDFN -e "s/#VERSION#/$VERSION/g; s/#LAST_MODIFIED#/$LAST_MODIFIED/g"

# OK, ruleset is compiled. Lets checksum it!
# UTF-8 encoding and Unix-style line ending is assumed
# Removing the old chksum and empty lines
grep -v '! Checksum: ' $BUILDFN | grep -v '^$' > $BUILDFN.chk
# Getting the checksum... Binary MD5 encoded with Base64
CHKSUM=`cat $BUILDFN.chk | openssl dgst -md5 -binary | openssl enc -base64 | cut -d "=" -f 1`
rm -f ./$BUILDFN.chk

# Replace the dummy with the real one
sed -i "/! Checksum: /c\! Checksum: $CHKSUM" $BUILDFN

# The build is ready, lets replace the filter file with the new version
mv $BUILDFN hufilter.txt

# Get Easylist and create a version with removed redundant rules
wget https://easylist-downloads.adblockplus.org/easylist.txt
echo '[Adblock Plus 2.0]' > hufilter-minuseasylist.txt
diff hufilter.txt easylist.txt --new-line-format="" --old-line-format="%L" --unchanged-line-format="" >> hufilter-minuseasylist.txt
rm -f ./easylist.txt

# Generate DNS list for Pi-hole, AdGuard DNS, etc
DNS_TMP='./hufilter-dns.tmp'
cat './build/0000-header.txt' > $DNS_TMP
sort -u './hufilter.txt' | grep ^\|\|.*\^$ | grep -v \/ >> $DNS_TMP
sed -i $DNS_TMP -e "s/#VERSION#/$VERSION/g; s/#LAST_MODIFIED#/$LAST_MODIFIED/g"
grep -v '! Checksum: ' $DNS_TMP | grep -v '^$' > $DNS_TMP.chk
DNS_CHKSUM=`cat $DNS_TMP.chk | openssl dgst -md5 -binary | openssl enc -base64 | cut -d "=" -f 1`
rm -f ./$DNS_TMP.chk
sed -i "/! Checksum: /c\! Checksum: $DNS_CHKSUM" $DNS_TMP
mv $DNS_TMP hufilter-dns.txt

# THE END :)
