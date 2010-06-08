// Tumblar Feed Parser
// The variable "tumblr_api_read" is now set.
	
for(var i=0; i<2; i++) {
	
	// Put date
	document.write(
			"<div class=\"entry\"><h5>" + tumblr_api_read.posts[i]['date'] + "</h5>");
	
	if(tumblr_api_read.posts[i]['type'] == "photo") {
    	document.write(
			
				tumblr_api_read.posts[i]['photo-caption'] + 
		"<a href=\""+ tumblr_api_read.posts[i]['url'] +"\">" +
		'<img src="' + tumblr_api_read.posts[i]['photo-url-400'] + '" /></a></div>'
		
	
    	);
	} else {
		document.write(
		
		"<a href=\""+ tumblr_api_read.posts[i]['url'] +"\"><h4>" + tumblr_api_read.posts[i]['regular-title'] + "</h4></a></div>");
	}
}