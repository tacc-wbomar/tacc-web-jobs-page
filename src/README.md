# TACC Website Content - Markup Templating

This directory has directories that are each a self-contained utility to produce web content. _If built web content produced appears on page `news/conferences/sc/sc19`, then the repository file is at `./news/conferences/sc/sc19--[content].[ext]`\*._


## Usage

1. Edit templates and data:
    - `__PROJECT_DIR__/templates/`
    - `__PROJECT_DIR__/data/`
2. Run build script (inside `__PROJECT_DIR__`):
    - `npm run build`
3. Confirm output:
    - `__PROJECT_DIR__/dist/`
4. Test output in context:
    - Copy content from `__PROJECT_DIR__/dist/` into markup of private/test/in-browser page.
5. If the content renders as expected, then
   Save content into:
    - relevant `/content/…/….html` file
    - relevant CMS web content
6. Ensure any relevant `/content/…/….html` file matches the corresponding CMS web content.[^1]
7. Commit and push changes.

[^1]: There could be a discrepancy between the built markup and the CMS web content; to learn more, see [known content conflicts][doc-conflicts].


## Development

### Rules

1. Each directory **must** be a self-contained utility that creates one or more files for web content.
2. Each utility **must** have instructions in a `README.md` within its directory.
3. Each utility **should** be a Node package.\*
    - If an alternate language is used, then that **must** be stated in the utility `README.md`.
4. Each utility **should** support passing an output directory.†
    - If you are unsure how to do this, then refer to other utilities.
5. Each utility **must** produce final content at `[page]--[content].[ext]`‡.

\* This allows consistent behavior and similar usage across Operating Systems.

† This allows utility to be easily used indpendent of this repository._

‡ Where `[page]` is the filename of the page for the web content, `[content]` is a lowercase description of the relevant web content, and `[ext]` is likely `.html` (if use cases for other extensions arise, then discuss with team).

#### Dependencies

- If adding a new dependency, then use the flag `--save-dev` (build-time dependency) **or** `--save` (run-time dependency).


[doc-conflicts]: ../../docs/content-conflicts.md "Known Content Conflicts"
