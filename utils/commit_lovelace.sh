#!/bin/sh
## A script to add changed files to a commit and then commit it.
## Uses arguments to write the message.

cd /config
git add lovelace-ui.yaml
git commit -m "updated lovelace"
git push
