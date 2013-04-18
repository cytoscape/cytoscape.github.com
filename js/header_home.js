//
// Generate header for each page.
// Page title will be used as a subtitle.
//

document
    .write("<div id=\"header\">"
        +
        "<form class=\"searchform\" action=\"http://www.google.com/search\">"
        + "<input type=\"hidden\" name=\"hl\" value=\"en\">"
        + "<input type=\"hidden\" name=\"hq\" value=\"inurl:www.cytoscape.org/\">"
        + "<input type=\"hidden\" name=\"ie\" value=\"UTF-8\">"
        + "<input type=\"hidden\" name=\"oe\" value=\"UTF-8\">"
        + "<input type=\"hidden\" name=\"filter\" value=\"0\">"
        + "<input class=\"searchfield\" type=\"text\" name=\"q\" size=\"23\" maxlength=\"30\" value=\"Search...\""
        + " onfocus=\"if (this.value == 'Search...') {this.value = '';}\""
        + " onblur=\"if (this.value == '') {this.value = 'Search...';}\">"
        + "<input class=\"searchbutton\" type=\"submit\" name=\"btnG\" value=\"Go\">"
        + "</form>"
        +

        "<div class=\"title\">"
        + "<h1>Cytoscape</h1>"
        + "</div></div>" +

        "<ul id=\"nav\"></ul>");
