# Cytoscape Web Site Source

This is a code repository for [cytoscape.org](http://www.cytoscape.org/ "Cytoscape Web Site") web site.

# How to Update www.cytoscape.org

Note the most operations will be done on the *master* branch. For large or risky operations, it's OK to operate in the *develop* branch instead. The instructions below apply to the *master* branch, but apply equally to the *develop* branch.

 * Clone with write permission
 * Checkout *master* branch
 * Edit pages
 * Commit and push changes
 * Check at http://cytoscape.github.io/
 * Deploy to test web site first:
   * ./deploy-test.sh
   * This server is maintained by UCSD.  You need to ask them to deploy to this server.
 * If it looks OK, deploy to the production web server:
   * ./deploy-vine1.sh
   * You need credentials on 169.228.38.222 to deploy.
 * Push your changes to *master* branch.
