#!/bin/bash

rm -rf ./new
mkdir ./new

if [ ! -f ./unused.txt ] ;
then
    echo "HIBA: Nincs meg a törlendő szabályok listája!"
    exit 1;
fi;

for x in `ls -1 ./build/*.txt`;
do
    OUTFN=`basename $x`
    diff $x ./unused.txt --new-line-format="" --old-line-format="%L" --unchanged-line-format="" > ./new/$OUTFN;

    echo "Diff: $OUTFN"
    diff -Naur ./build/$OUTFN ./new/$OUTFN | less;
done;

