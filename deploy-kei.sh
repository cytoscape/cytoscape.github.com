#  Issue rsync command
rsync -c -av --delete --exclude ".idea/" --exclude ".git/" --exclude "deploy.sh" --exclude "deploy-test.sh" --exclude "deploy-kei.sh" . kono@grenache.ucsd.edu:~/public_html/cytoscape_test/

