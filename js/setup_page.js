/**
 * Created with JetBrains WebStorm.
 * User: kono
 * Date: 2013/07/30
 * Time: 10:32
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {

    // For drop down menu
    $('.dropdown-toggle').dropdown();

    var responsiveNav =
        '<div class="container"><nav class="navbar navbar-default" role="navigation">' +
            '<div class="container-fluid">' +

            '<div class="navbar-header">' +
            '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#cy-navbar">' +
            '<span class="sr-only">Toggle navigation</span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '</button>' +
            '<a class="navbar-brand" href="index.html"><img src="images/logo/cy3logoOrange.svg" height="100%"/>Cytoscape</a>' +
            '</div>' +

            '<div class="collapse navbar-collapse" id="cy-navbar">' +
            '<ul class="nav navbar-nav">' +
            '<li class="dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Intro.<b class="caret"></b></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="what_is_cytoscape.html">What is Cytoscape?</a></li>' +
            '<li><a href="who_is_using.html">Who is Using Cytoscape</a></li>' +
            '<li><a href="screenshots.html">Screenshots</a></li>' +
            '</ul></li>' +
            '<li><a href="download.html">Download</a></li>' +

            '<li><a href="http://apps.cytoscape.org/" target="_blank">Apps</a></li>' +

            '<li class="dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Docs<b class="caret"></b></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="documentation_users.html">For Users</a></li>' +
            '<li><a href="documentation_developers.html">For Developers</a></li>' +
            '<li><a href="releasenotes.html">Release Notes</a></li>' +
            '<li><a href="http://wiki.cytoscape.org/">Wiki</a></li>' +
            '<li><a href="http://opentutorials.cgl.ucsf.edu/index.php/Portal:Cytoscape3">Open Tutorials</a></li>' +
            '</ul></li>' +

            '<li class="dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Community<b class="caret"></b></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="development_team.html">Developer Team</a></li>' +
            '<li><a href="community.html">Social Media</a></li>' +
            '<li><a href="http://nrnb.org/cyretreat/">Conferences</a></li>' +
            '<li><a href="http://nrnb.org/training.html">Training</a></li>' +
            '</ul></li>' +

            '<li><a href="http://chianti.ucsd.edu/cyto_web/bugreport/bugreport.php">Report a Bug</a></li>' +
            '<li><a class="cy3-color" href="https://groups.google.com/forum/#!forum/cytoscape-helpdesk">Help</a></li>' +



            '<li><div class="google-search">' +

            '<script>(function() {' +
            "var cx = '010752552860291056652:n_a3iwexlj8';"+
            "var gcse = document.createElement('script');" +
            "gcse.type = 'text/javascript';" +
            "gcse.async = true;" +
            "gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + " +
            "'//www.google.com/cse/cse.js?cx=' + cx;" +
            "var s = document.getElementsByTagName('script')[0];" +
            "s.parentNode.insertBefore(gcse, s);" +
            "})();" +
            "</script><gcse:searchbox-only></gcse:searchbox-only>" +

            '</li></div>' +

            '</ul>' +
            '</div></div></nav></div>';


    $('body').prepend(responsiveNav);

    // Footer
    var footerText = '<div class="container"><div class="row">' +
        '<div class="col-xs-12 col-md-8"><p class="text-muted text-left">' +
        'Funding for continued development and maintenance of Cytoscape is provided by the U.S. ' +
        '<a href="http://www.nigms.nih.gov">National Institute of General Medical Sciences (NIGMS)</a> ' +
        'under award number GM070743.  ' +
        'Cytoscape user support, education and new initiatives are supported by the ' +
        '<a href="http://nrnb.org">National Resource for Network Biology (NRNB)</a> under award ' +
        'numbers P41 RR031228 and GM103504.</p>' +
        '<p class="text-muted text-center">&copy;2001-2014 <a href="http://www.cytoscapeconsortium.org/">' +
        'Cytoscape Consortium</a></p>' +

        '</div><div class="col-xs-12 col-md-4">' +
        '<p>Search Cytoscape Web Sites:</p>' +
        '<script>(function() {' +
        "var cx = '010752552860291056652:n_a3iwexlj8';"+
            "var gcse = document.createElement('script');" +
            "gcse.type = 'text/javascript';" +
            "gcse.async = true;" +
            "gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + " +
            "'//www.google.com/cse/cse.js?cx=' + cx;" +
            "var s = document.getElementsByTagName('script')[0];" +
            "s.parentNode.insertBefore(gcse, s);" +
            "})();" +
        "</script><gcse:searchbox-only></gcse:searchbox-only>" +

        '</div></div></div>';

    var googleAnalytics = '<script type="text/javascript">' +
                          "var _gaq = _gaq|| []; _gaq.push(['_setAccount', 'UA-155159-2']);" +
                           "_gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script');" +
                            "ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';"+
                            "var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })(); </script>";

    $('footer').append(footerText);
    $('body').append(googleAnalytics);
});