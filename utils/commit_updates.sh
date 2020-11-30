#!/bin/sh
## A script to add changed files to a commit and then commit it.
## Uses arguments to write the message.

cd /config
foo=$(<.HA_VERSION)
git add .
git commit -m $foo
git push
