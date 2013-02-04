# Syncs latest file changes to cytoscape.org
# - excludes all svn directories

# Collect user name

#  Issue rsync command
rsync -c -av --delete --exclude ".git/" --exclude "deploy.sh" --exclude "deploy-test.sh" . root@chianti.ucsd.edu:/var/www/html/cytoscape_test_website/

