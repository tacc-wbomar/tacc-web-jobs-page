# TACC Website Content - Example CMS/Repo Conflicts

There could be a discrepancy between the CMS web content and the repository file content; some examples and explanations are documented. _All faults described assume that the current dev has not made an immediate mistake._

## Web Content Markup Moved HTML Tags

- Maybe, CMS parses HTML as HTML4, and cannot parse (but does not delete) HTML5 tags.

## Web Content Markup has Different Formatting, But Same Markup

- CMS changes HTML whitespace and attribute order.
- The last developer to save the repo file did not save CMS-formatted markup.

