#!/bin/bash

BUILDFN="./hufilter.tmp"

echo -e > $BUILDFN;
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