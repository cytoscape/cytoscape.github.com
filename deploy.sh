# Syncs latest file changes to cytoscape.org
# - excludes all svn directories

# Collect user name
echo ""
echo ""
echo "Don't forget to create a shell on SourceForge first!"
echo ""
echo "	ssh -t USERNAME,cytoscape@shell.sourceforge.net create"
echo ""
echo ""
echo "Sourceforge username: "
read name

#  Issue rsync command
rsync -av --delete --exclude ".svn/" --exclude "deploy.sh" . $name,cytoscape@web.sourceforge.net:htdocs/

