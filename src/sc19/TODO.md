# SC19 - To Do List

## Architecture

1. Make exported file name be passed via build command; ideas:
    - NPM `config` variable (that can be set on command line)
    - Create an NPM script for the `build…` commands that takes arguments (via `commander`, `sywac`, or `arg`)
    - Add another dependency (to support cross-browser npm script arg passing)
2. Organize styles and templates.

## Styles

1. Move "COMPONENTS" styles to stylesheet that is loaded by CMS for only the SC19 page.
2. Abstract `sc19-read-more` component into a "main" stylesheet.
3. Use `autoprefixer` (see `COMPONENTS: SC19 "Read More": Show/Hide Solution #3`).

## Templates

1. Change markup for `h2 > time` (CMS extracts the `<time>`).
2. Use functions for time and date",
    1. Convert `.json` to `.js` (`modules.exports = { … }`).
    2. Create functions to output time, date (see https://github.com/janl/mustache.js/#functions).
    3. If you want to use `toLocaleDateString` or `toLocaleTimeString`, see https://stackoverflow.com/a/47808440.
