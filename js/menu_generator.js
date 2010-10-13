//
// Menu bar generator
//	Dynamically generate menu for each page.

$(document).ready(function(){
	
	appendIconLinks();
	
	appendMainMenuItems();
	appendIntro();
	appendDownload();
	appendPlugin();
	appendDocument();
	appendCommunity();
});

// root URL
var baseURL = "http://www.cytoscape.org/";
var pluginSiteURL = "http://chianti.ucsd.edu/cyto_web/plugins/";
var latestVersion = "2.7.0";
var betaVersionURL = "http://chianti.ucsd.edu/Cyto-2_8-beta/";


function insertSearchBox() {
	$("#header").prepend(
		"<form class=\"searchform\">" + 
		
		"<input class=\"searchfield\" type=\"text\" value=\"Search...\"" +
		" onfocus=\"if (this.value == 'Search...') {this.value = '';}\"" +
		" onblur=\"if (this.value == '') {this.value = 'Search...';}\" />" +
      	"<input class=\"searchbutton\" type=\"button\" value=\"Go\" />" + 
		
		"</form>"
	);
}


var iconLocation = baseURL + "images/icon/";
var icons = new Array(
		["youtube.png", "http://www.youtube.com/user/cytoscapeconsortium", "Subscribe RSS"],
		["delicious.png", "http://delicious.com/cytoscape", "Bookmarks"],
		["flickr.png", "http://www.flickr.com/photos/cytoscape/", "Flickr"],
		["twitter.png", "http://twitter.com/cytoscape", "Follow us on Twitter"],
		["rss.png", "http://groups.google.com/group/cytoscape-announce/feed/rss_v2_0_msgs.xml", "RSS News Feed"]
	);



function appendIconLinks() {
	
	for(var i=0; i<icons.length; i++) {
		$("#linkIcons").append("<li><a href=\"" + icons[i][1] + "\" target=\"_new\">" + 
								"<img src=\"" + 
								iconLocation + icons[i][0] + "\" /></a></li>");
	}
}


function appendMainMenuItems() {
	$("#nav").append("<li id=\"homeMenu\"><a href=\"http://www.cytoscape.org/\">Home</a></li>");
	$("#nav").append("<li id=\"introMenu\"><a href=\"#\">Introduction</a></li>");
	$("#nav").append("<li id=\"downloadMenu\"><a href=\"" + baseURL +"download.html\">Download</a></li>");
	$("#nav").append("<li id=\"pluginMenu\"><a href=\"#\">Plugins</a></li>");
	$("#nav").append("<li id=\"documentMenu\"><a href=\"#\">Documentation</a></li>");
	$("#nav").append("<li id=\"communityMenu\"><a href=\"#\">Community</a></li>");
	$("#nav").append("<li id=\"bugMenu\"><a href=\"http://cbio.mskcc.org/cytoscape/bugs/my_view_page.php\">Report a Bug</a></li>");
}

function appendIntro() {
	$("#introMenu").append(
		"<ul>" + 
			"<li><a href=\"" + baseURL + "what_is_cytoscape.html\">What is Cytoscape?</a></li>" +
			"<li><a href=\"" + baseURL + "who_is_using.html\">Who is Using Cytoscape?</a></li>" + 
			"<li><a href=\"http://cytoscape.wodaklab.org/wiki/FAQ\">FAQ</a></li>" + 
			"<li><a href=\"#\">Gallery</a>" +
				"<ul>" +
					"<li><a href=\"" + baseURL + "screenshots.html\">Screenshots</a></li>" +
					"<li><a href=\"" + baseURL + "movies.html\">Movies</a></li>" + 
					"<li><a href=\"#\">User-Generated</a>" + 
						"<ul>" + 
							"<li><a href=\"http://www.flickr.com/search/?q=cytoscape\">Cytoscape Images at Flickr</a></li>" + 
							"<li><a href=\"http://www.youtube.com/results?search_query=cytoscape\">Cytoscape Movies at YouTube</a></li>" + 
						"</ul>" +
					"</li>" + 
				"</ul>" + 
			"</li>" +
		"</ul>"
		
	);
}



function appendPlugin() {
	$("#pluginMenu").append("<ul>" + 
		"<li><a href=\"plugins.html\">List of Plugins</a></li>" +
		"<li><a href=\"" + baseURL + "plugin_submit.html\">Submit Your Plugin</a></li></ul>"
	);
}


function appendDocument() {
	$("#documentMenu").append("<ul>" + 
		"<li><a href=\"" + baseURL + "documentation_users.html\">for Users</a></li>" +
		"<li><a href=\"" + baseURL + "documentation_developers.html\">for Developers</a></li>" +
		"<li><a href=\"http://cytoscape.wodaklab.org/wiki/\">Cytoscape Wiki</a></li></ul>"
	);
}

function appendDownload() {
	$("#downloadMenu").append("<ul>" + 
		"<li><a href=\"" + baseURL + "download.html\">Latest Release</a></li>" +
		"<li><a href=\"" + betaVersionURL + "\">Beta Version</a></li>" +
		"<li><a href=\"" + baseURL + "older_versions.html\">Older Versions</a></li></ul>"
	);
}

function appendCommunity() {
	$("#communityMenu").append("<ul>" + 
		"<li><a href=\"" + baseURL + "development_team.html\">Developer Team</a></li>" + 
    	"<li><a href=\"" + baseURL + "community.html\">Social Media</a></li></ul>"
	);
}
