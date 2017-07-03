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
HFVER=`date "+%Y%m%d%H%M"`;

# Replace placeholder with the actual version
sed s/#VERSION#/$HFVER/g -i $BUILDFN

# The build is ready, lets replace the filter file with the new version
mv $BUILDFN hufilter.txt

# Get Easylist and create a version with removed redundant rules
wget https://easylist-downloads.adblockplus.org/easylist.txt
echo '[Adblock Plus 2.0]' > hufilter-minuseasylist.txt
diff hufilter.txt easylist.txt --new-line-format="" --old-line-format="%L" --unchanged-line-format="" >> hufilter-minuseasylist.txt
rm -f ./easylist.txt


# THE END :)
