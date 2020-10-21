#!/bin/sh
## A script to add changed files to a commit and then commit it.
## Uses arguments to write the message.

cd /config
git add .
git commit -m $1
git push
