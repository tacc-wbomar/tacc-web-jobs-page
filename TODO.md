# TACC Website: To Do List

## Styles

1. Fix redundant styles for `<abbr>` tag:
    ```css
    /* TODO: Add this to global CSS */
    /* FAQ: The global CSS styles this with a border bottom,
            but neglects to remove browsers' dotted underline style
            (has style: Firefox, Chrome…; no style: Safari…) */
    abbr[title] { text-decoration: none; }
    ```