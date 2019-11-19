# SC19

This is a project to parse and combine templates into markup for the body of the Supercomputing 2019 standalone webpage.

## Usage

> **To Do**
>
> - Move this documentation to Confluence as a basic intro to a template utility.
> - Author utility as a Node project.

1. Edit templates and data:
    - `.mustache` templates
    - `.json` data
2. Run build script:
    - `./build.sh`\*
3. Confirm changes to content:
    - `/content/news/conferences/sc/sc19-body.html`
4. Test content:
    - Use `sc19-body.html` content as CMS web content on a private or test page.
5. Save CMS web content.
6. Save CMS web content into `sc19-body.html` file.
7. Commit and push changes.

\* This script has only been tested on OS X. It may work on Linux/Unix. It may fail on Windows. If this is a problem, await Node version of project.

## Known Conflicts

There could be a discrepancy between the built repository file content and the CMS web content; read about [examples and explanations for known content conflicts].



[doc-conflicts]: ../../docs/content-conflicts.md "Known Content Conflicts"
