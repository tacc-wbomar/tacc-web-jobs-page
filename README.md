# TACC Website Content

This is a project to maintain revision history for web content and a collection of markup templating utilities for Liferay Portal [Web Content][lr-web-content] in the TACC Website, but that are independent of the Liferay Portal infrastructure.

It was created Nov 2019 by [Wesley B.][user-wb] so that the CMD (Communication Media & Design) team would be able to more easily perform, track, and review changes to the website but not require Liferay development knowledge.

The content for this `README.md` is broken into two sections, "Web Content History" and "Markup Templating".

_The "CMS" referenced in this document, as of 2019, is [Liferay Portal 6.1.20 CE][lr-version]._


# TACC Website Content - Web Content History

## Requirements

No external dependencies required.

## Usage

1. Compare CMS web content to repository file(s) content.
    1. Replace repository file(s) content with web content.
    2. Compare differences by reviewing the `git diff` of the repository file(s).
    3. Resolve unexpected conflicts (for help, see "Example Conflicts").
2. Update repository file(s) content.
3. Test repository file(s) content as CMS web content.
4. Copy final working CMS web content to repository file(s).
5. Commit changes to repository file(s).
6. Push repository commit(s).
7. Save final working content as CMS web content.

## Example Conflicts

There could be a discrepancy between the CMS web content and the repository file content; some examples and explanations are documented. _All faults described assume that the current dev has not made an immediate mistake._

### Web Content Markup Moved HTML Tags

Reason may be that CMS parses HTML as HTML4.

### Web Content Markup has Different Formatting, But Same Markup

- CMS changes HTML whitespace and attribute order.
- The last developer to save the repo file did not save CMS-formatted markup.


# TACC Website Content - Markup Templating

## Requirements

- Node.js 12 or LTS (whichever version is later)
- NPM Packages (see [`package.json`](./package.json)

## Setup

> **To Do**
>
> Move this documentation to Confluence as a basic intro to a Node project.

1. Install packages:

    (normal install)
    ```npm install```

    (clean then install)
    ```npm ci```

2. Run script:

    (see available scripts)
    ```npm run```

    (run specific script)
    ```npm run …```

## Usage

Directories in `src/` are inidividual utilities to create markup for website using source files. Each utility should have instructions in a `README.md` within its directory.


[lr-web-content]: https://portal.liferay.dev/docs/6-1/user/-/knowledge_base/u/web-content-management "Liferay Portal: Web Content Management"
[lr-version]: https://liferay.dev/blogs/-/blogs/liferay-portal-6-1-ce-ga2-release "Liferay Portal Enterprise Edition 6.1.20 EE"

[user-wb]: mailto:wesleyb@tacc.utexas.edu "Wesley B. of Communications, Media & Design"
