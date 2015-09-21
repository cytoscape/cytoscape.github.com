$(document).ready(function () {
    appendMainMenuItems();
    appendIntro();
    appendDocument();
    appendCommunity();
});

function appendMainMenuItems() {
    $("#nav")
        .append("<li id=\"homeMenu\"><a href=\"index.html\">Home</a></li>")
        .append("<li id=\"introMenu\"><a href=\"#\">Introduction</a></li>")
        .append("<li id=\"downloadMenu\"><a href=\"download.php\">Download</a></li>")
        .append("<li id=\"pluginMenu\"><a href=\"http://apps.cytoscape.org\" target=\"_blank\">Apps</a></li>")
        .append("<li id=\"documentMenu\"><a href=\"#\">Documentation</a></li>")
        .append("<li id=\"communityMenu\"><a href=\"#\">Community</a></li>")
        .append("<li id=\"bugMenu\"><a href=\"http://chianti.ucsd.edu/cyto_web/bugreport/bugreport.php\">Report a Bug</a></li>")
        .append("<li id=\"helpMenu\"><a href=\"community.html\">Getting Help</a></li>");
}

function appendIntro() {
    $("#introMenu").append(
        "<ul><li><a href=\"what_is_cytoscape.html\">What is Cytoscape?</a></li>"
        + "<li><a href=\"who_is_using.html\">Who is Using Cytoscape?</a></li>"
        + "<li><a href=\"screenshots.html\">Screenshots</a></li></ul>"
        + "<li><a href=\"roadmap.html\">Roadmap</a></li></ul>");
}

function appendDocument() {
    $("#documentMenu").append(
        "<ul><li><a href=\"documentation_users.html\">for Users</a></li>"
        + "<li><a href=\"documentation_developers.html\">for Developers</a></li>"
        + "<li><a href=\"releasenotes.html\">Release Notes</a></li>"
        + "<li><a href=\"http://wiki.cytoscape.org/\">Cytoscape Wiki</a></li>"
        + "<li><a href=\"http://opentutorials.cgl.ucsf.edu/index.php/Portal:Cytoscape3\">Cytoscape at Open Tutorials</a></li></ul>");
}

function appendCommunity() {
    $("#communityMenu")
        .append(
        "<ul><li><a href=\"development_team.html\">Developer Team</a></li>"
        + "<li><a href=\"community.html\">Social Media</a></li>"
        + "<li><a href=\"http://nrnb.org/cyretreat/\">Conferences</a></li>"
        + "<li><a href=\"http://nrnb.org/training.html\">Training</a></li>"
        + "</ul>");
}
