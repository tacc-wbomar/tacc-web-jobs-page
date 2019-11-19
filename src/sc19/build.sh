#!/bin/bash

# Use NPM package `mustache` to build `_sc19-body.html` from templates and data
# SEE: https://github.com/janl/mustache.js/
# WARN: This script expects `mustache` to be installed globally (`npm install -g mustache`)
# TODO: Integrate this into a `package.json`

# NOTE: Partials do not load from inner directory `dist/`,
#       so name them prefixed by underscore (should be ignored by `.gitignore`)
# SEE: https://github.com/janl/mustache.js/issues/726
mustache ./events.booth.json ./events.mustache ./_events.booth.mustache
mustache ./events.conf.json ./events.mustache ./_events.conf.mustache
mustache \
    -p ./styles.mustache\
    -p ./_events.booth.mustache\
    -p ./_events.conf.mustache\
    -p ./social-media.mustache\
    ./events.booth.json ./body.mustache ../../content/news/conferences/sc/sc19-body.html

# We should clean up (even though the temp files should be ignored)
rm ./_events.*
