#!/bin/bash

function push_to_github() {
    git add .
    git commit -m "Auto commit"
    git push
}

while true; do
    push_to_github
    # time * 60
    sleep 1800 
done
