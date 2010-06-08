/* Configuration: */

var tabs = {
	
	"Cytoscape Announce": {
		"feed"		: "http://groups.google.com/group/cytoscape-announce/feed/rss_v2_0_msgs.xml",
		"function"	: rss
	}

}

var totalTabs;

$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */

	$('#feedWidget1').show();

	showTab('Cytoscape Announce', '#activeTab1', '#tabContent1');
	
});


function showTab(key, tab, content)
{
	var obj = tabs[key];
	if(!obj) return false;
	
	var stage = $(content);
	
	/* Forming the query: */
	var query = "select * from feed where url='"+obj.feed+"' LIMIT 5";
	
	/* Forming the URL to YQL: */
	var url = "http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(query)+"&format=json&callback=?";
	
	$.getJSON(url,function(data){

		stage.empty();

		/* item exists in RSS and entry in ATOM feeds: */
		$.each(data.query.results.item || data.query.results.entry,function(){
			try{
				/* Trying to call the user provided function, "this" the rest of the feed data: */
				stage.append(obj['function'](this));
				
			}
			catch(e){
				/* Notifying users if there are any problems with their handler functions: */
				var f_name =obj['function'].toString().match(/function\s+(\w+)\(/i);
				if(f_name) f_name = f_name[1];
				
				stage.append('<div>There is a problem with your '+f_name+ ' function</div>');
				return false;
			}
		})
	});
	
	$(tab).append("<a href=\"" + obj.feed + "\">" + key + "<img src=\"images/icon/rss.png\"/><a/>");
}



function twitter(item)
{
	/* Formats the tweets, by turning hashtags, mentions an URLS into proper hyperlinks: */
	return $('<div>').html(
			formatString(item.description || item.title)+
			' <a href="'+(item.link || item.origLink)+'" target="_blank">[tweet]</a>'
	);
}

function rss(item)
{
	return $('<div>').html(formatString(item.pubDate)+ "<br/>" +
			formatString(item.title.content || item.title) +
			' <a href="'+(item.origLink || item.link[0].href || item.link)+'" target="_blank">[read]</a>'
	);
}

function buzz(item)
{
	return $('<div>').html(
			formatString(item.content[0].content || item.title.content || item.title)+
			' <a href="'+(item.origLink || item.link[0].href || item.link)+'" target="_blank">[read]</a>'
	);
}

function formatString(str)
{
	/* This function was taken from our Twitter Ticker tutorial - http://tutorialzine.com/2009/10/jquery-twitter-ticker/ */
	str = str.replace(/<[^>]+>/ig,'');
	str=' '+str;
	str = str.replace(/((ftp|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?)/gm,'<a href="$1" target="_blank">$1</a>');
	str = str.replace(/([^\w])\@([\w\-]+)/gm,'$1@<a href="http://twitter.com/$2" target="_blank">$2</a>');
	str = str.replace(/([^\w])\#([\w\-]+)/gm,'$1<a href="http://twitter.com/search?q=%23$2" target="_blank">#$2</a>');
	return str;
}