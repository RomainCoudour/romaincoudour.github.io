#!/bin/sh -l
npm i -g minify@7.0.0
sudo apt-get update
sudo apt-get -y install moreutils
find . -type f \( -iname \*.html -o -iname \*.js -o -iname \*.css \) | while read fname
    do
    minify ${fname} | sponge ${fname}
    done