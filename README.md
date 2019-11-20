# TACC Website Content

This is a project to maintain revision history for web content (see "Web Content History" section) and a collection of markup templating utilities (see "Markup Templating Utilities" section) for Liferay Portal [Web Content][lr-web-content] in the [TACC Website][cp-website], but that are independent of the Liferay Portal infrastructure.

It was created Nov 2019 by [Wesley B.][user-wb] so that the CMD (Communication, Media & Design) team would be able to more easily perform, track, and review changes to the website but not require Liferay development knowledge.

_The "CMS" referenced in this document, as of 2019, is [Liferay Portal 6.1.20 CE][lr-version]._


## Web Content History

### Usage

1. Find the repository file content matching the relevant CMS web content.\*
2. Compare CMS web content to repository file(s) content.
    1. Replace repository file(s) content with web content.
    2. Compare differences by reviewing the `git diff` of the repository file(s).
    3. Resolve unexpected conflicts (for help, see [example conflicts][doc-conflicts]).
3. Update repository file(s) content.
4. Test repository file(s) content as CMS web content.
5. Copy final working CMS web content to repository file(s).
6. Commit and push changes to repository file(s).
7. Save final working content as CMS web content.

\* The directory of the page (in [Control Panel "Pages"][cp-pages] hierarchy) on which the web content exists is the directory in which you should find the relevant repository file.

### Add Files

See [`./content/README.md`](./content/README.md).


## Markup Templating Utilities

### Requirements

- Node.js 12 or LTS (whichever version is later)
- all NPM Packages (see [`package.json`](./package.json))

### Setup

> **To Do**
>
> Move this documentation (and expand with external references) to Confluence as a basic intro to a Node project.

1. Install packages:

    - (normal install)

        ```npm install```

    - (clean then install)
    
        ```npm ci```

2. Run script:

    - (see available scripts)
    
        ```npm run```

    - (run specific script)
    
        ```npm run …```

### Usage

1. Find/Create relevant utility as a child directory of `src/`.
2. Update utility source files as necessary.
3. Build new web content using the build command documented within the utility.
4. Test, save, commit, and push the final working content.
    - _I.e. follow "Web Content History" > "Usage" for built content._

### Development

See [`./src/README.md`](./src/README.md).



[lr-web-content]: https://portal.liferay.dev/docs/6-1/user/-/knowledge_base/u/web-content-management "Liferay Portal: Web Content Management"
[lr-version]: https://liferay.dev/blogs/-/blogs/liferay-portal-6-1-ce-ga2-release "Liferay Portal Enterprise Edition 6.1.20 EE"

[cp-pages]: https://www.tacc.utexas.edu/group/control_panel/manage?p_p_id=156&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&doAsGroupId=1084364 "Control Panel > Website > Pages > Public Pages"
[cp-website]: https://www.tacc.utexas.edu "TACC Public Website"

[doc-conflicts]: ./docs/content-conflicts.md "Example Content Conflicts"

[user-wb]: https://tacc.utexas.edu/about/directory/wesley-bomar "Wesley B. of Communications, Media & Design"
