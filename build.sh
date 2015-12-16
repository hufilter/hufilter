#!/bin/bash

BUILDFN="./hufilter.tmp"

echo "[Adblock Plus 2.0]" > $BUILDFN;
for x in ` ls -1 ./build/ `;
    do
        echo "!##################### $x ##################### " >> $BUILDFN;
        cat "./build/$x" >> "$BUILDFN";
        echo "!##################### END $x ##################### " >> $BUILDFN;
    done;

HFVER=`date "+%Y%m%d%H%M"`;
sed s/#VERSION#/$HFVER/g < $BUILDFN >hufilter.new
mv hufilter.new hufilter.txt
rm -f $BUILDFN

# Easylist is not reachable atm from DIGI HU networks... disabled temporarily
#wget https://easylist-downloads.adblockplus.org/easylist.txt
#diff hufilter.txt easylist.txt --new-line-format="" --old-line-format="%L" --unchanged-line-format="" > hufilter-minuseasylist.txt
#rm -f ./easylist.txt