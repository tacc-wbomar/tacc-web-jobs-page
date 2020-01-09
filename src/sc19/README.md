# SC19

This project compiles data into templates to create markup for the body of the [SC2019 standalone webpage][tacc-sc19].

## Usage

> **To Do**:
> Move this documentation to Confluence as a basic intro to a template utility.

1. Edit templates and data:
    - `….mustache` templates
    - `….json` data
2. Run build script:
    - `npm run build`
3. Confirm changes to content:
    - `/content/…/….html`
4. Test content:
    - Save `….html` content as CMS web content on a private or test page.
5. Copy saved CMS web content back to `….html` file.
6. If the content is identical, then move to step #7, otherwise
   repeat steps #1—#6 until the CMS does not change the markup.[^1]
7. Save CMS web content into `….html` file.
8. Commit and push changes.

## Known Conflicts

[^1]: There could be a discrepancy between the built markup and the CMS web content; to learn more, see [known content conflicts][doc-conflicts].



[doc-conflicts]: ../../docs/content-conflicts.md "Known Content Conflicts"
[tacc-sc19]: https://www.tacc.utexas.edu/sc19 "TACC: Super Computing 2019"
