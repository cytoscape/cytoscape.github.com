# Cytoscape Web Site Source

This is a code repository for [cytoscape.org](http://www.cytoscape.org/ "Cytoscape Web Site") web site.

# How to Update www.cytoscape.org

Note the most operations will be done on the *master* branch. For large or risky operations, it's OK to operate in the *develop* branch instead. The instructions below apply to the *master* branch, but apply equally to the *develop* branch.

 * Clone with write permission
 * Checkout *master* branch
 * Edit pages
 * Commit and push changes
 * Check at https://cytoscape.org

# Previewing and Reviewing HTML Changes Before Merging to master

If you are just modifying or adding HTML files in this site and want others to
review your change in a browser before it goes live, follow these steps:

 * Create a branch
 * Add or modify your HTML file on that branch
 * Push your branch to GitHub

Your change can then be reviewed at an address like this (replace `YOUR_BRANCH`
with your branch name and the file name with your page):

```
https://htmlpreview.github.io/?https://github.com/cytoscape/cytoscape.github.com/blob/YOUR_BRANCH/index.html
```

Once it has been reviewed, create a Pull Request and merge the changes into the
*master* branch.

