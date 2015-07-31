# Cytoscape Web Site Source

This is a code repository for [cytoscape.org](http://www.cytoscape.org/ "Cytoscape Web Site") web site.

# How to Update www.cytoscape.org

 * Clone with write permission
 * Checkout *develop* branch
 * Edit pages
 * Check locally and deploy to test web site first:
   * ./deploy-test.sh
   * This server is maintained by UCSD.  You need to ask them to deploy to this server.
 * If it looks OK, deploy to the production web server:
   * ./deploy-vine1.sh
   * You need credentials on 169.228.38.222 to deploy.
 * Push your changes to *develop* branch.
