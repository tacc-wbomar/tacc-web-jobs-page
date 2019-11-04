#!/bin/bash

# Use NPM package `mustache` to build `_sc19-body.html` from templates and data
# SEE: https://github.com/janl/mustache.js/
# WARN: This script expects `mustache` to be installed globally (`npm install -g mustache`)
# TODO: Integrate this into a `package.json`

# NOTE: Partials do not load from inner directory `dist/`,
#       so name them prefixed by underscore (should be ignored by `.gitignore`)
# SEE: https://github.com/janl/mustache.js/issues/726
mustache sc19/events.booth.json sc19/events.mustache sc19/_events.booth.mustache
mustache sc19/events.conf.json sc19/events.mustache sc19/_events.conf.mustache
mustache \
    -p sc19/styles.mustache\
    -p sc19/_events.booth.mustache\
    -p sc19/_events.conf.mustache\
    -p sc19/social-media.mustache\
    sc19/events.booth.json sc19/body.mustache sc19-body.html
