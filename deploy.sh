#!/bin/bash
git checkout .
git pull
npm install
./build.sh

OUT=$?

if [[ $OUT -eq 0 ]];then
    pm2 reload sgbi
fi
