# TACC Website Content - Markup Templating

This directory has directories that are each a self-contained utility to produce web content. _If built web content produced appears on page `news/conferences/sc/sc19`, then the repository file is at `./news/conferences/sc/sc19--[content].[ext]`\*._

## Rules

1. Each directory **must** be a self-contained utility that creates one or more files for web content.
2. Each utility **must** have instructions in a `README.md` within its directory.
3. Each utility **should** be a Node package.\*
    - If an alternate language is used, then that **must** be stated in the utility `README.md`.
3. Each utility **should** support passing an output directory.†
    - If you are unsure how to do this, then refer to other utilities.
4. Each utility **must** produce final content at `[page]--[content].[ext]`‡.

<!-- Footnotes (newlines after each are required for formatting) -->

\* This allows consistent behavior and similar usage across Operating Systems.

† This allows utility to be easily used indpendent of this repository._

‡ Where `[page]` is the filename of the page for the web content, `[content]` is a lowercase description of the relevant web content, and `[ext]` is likely `.html` (if use cases for other extensions arise, then discuss with team).

<!-- References (recommended for all links) -->

[cp-pages]: https://www.tacc.utexas.edu/group/control_panel/manage?p_p_id=156&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&doAsGroupId=1084364 "Control Panel > Website > Pages > Public Pages"
