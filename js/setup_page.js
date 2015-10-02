/**
 * Created with JetBrains WebStorm.
 * User: kono
 * Date: 2013/07/30
 * Time: 10:32
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {

    ////////////////////////////////////
    // Modify this when releasing new version!
    ////////////////////////////////////
    var CYTOSCAPE_LATEST_VERSION = '3.2.1';
    $('.cy-latest-version').append(CYTOSCAPE_LATEST_VERSION);

    (function() {
        var cx = '010752552860291056652:n_a3iwexlj8';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
            '//cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();

    // For drop down menu
    $('.dropdown-toggle').dropdown();

    var navContainer = $('<div class="container"></div>');

    var responsiveNav =
        '<nav class="navbar navbar-default" role="navigation">' +
            '<div class="container">' +

            '<div class="navbar-header">' +
            '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#cy-navbar">' +
            '<span class="sr-only">Toggle navigation</span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '</button>' +
            '<a class="navbar-brand" href="index.html">' +
                '<img src="images/logo/cy3logoOrange.svg" style="height: 43px !important; margin-top: -13px; margin-left: -1em;"/>' +
            '</a>' +
            '</div>' +

            '<div class="collapse navbar-collapse" id="cy-navbar">' +
            '<ul class="nav navbar-nav">' +
            '<li class="dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Intro.<b class="caret"></b></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="what_is_cytoscape.html">What is Cytoscape?</a></li>' +
            '<li><a href="who_is_using.html">Who is Using Cytoscape</a></li>' +
            '<li><a href="stat.html">Project Statistics</a></li>' +
            '<li><a href="screenshots.html">Screenshots</a></li>' +
            '<li><a href="roadmap.html">Roadmap</a></li>' +
            '</ul></li>' +

            '<li><a href="download.php">Download</a></li>' +

            '<li><a href="http://apps.cytoscape.org/" target="_blank">Apps</a></li>' +

            '<li id="docs" class="dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Documentation<b class="caret"></b></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="releasenotes.html">Release Notes</a></li>' +
            '<li><a href="documentation_users.html">For Users</a></li>' +
            '<li><a href="documentation_developers.html">For Developers</a></li>' +
            '<li><a href="http://wiki.cytoscape.org/">Wiki</a></li>' +
            '<li><a href="http://opentutorials.cgl.ucsf.edu/index.php/Portal:Cytoscape3">Open Tutorials</a></li>' +
            '</ul></li>' +

            '<li class="dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Community<b class="caret"></b></a>' +
            '<ul class="dropdown-menu">' +
            '<li class="warn"><a href="http://nrnb.org/competitions.html">Competitions</a></li>' +
            '<li><a href="development_team.html">Developer Team</a></li>' +
            '<li><a href="community.html">Social Media</a></li>' +
            '<li><a href="http://nrnb.org/cyretreat/">Conferences</a></li>' +
            '<li><a href="http://nrnb.org/training.html">Training</a></li>' +
            '</ul></li>' +

            '<li><a href="http://chianti.ucsd.edu/cyto_web/bugreport/bugreport.php">Report a Bug</a></li>' +

            '<li class="dropdown">' +
            '<a href="#" class="dropdown-toggle cy3-color" data-toggle="dropdown">Help<b class="caret"></b></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="troubleshooting.html">Troubleshooting</a></li>' +
            '<li><a href="https://groups.google.com/forum/#!forum/cytoscape-helpdesk">Getting Help</a></li>' +
            '</ul></li>' +

            '<li><gcse:searchbox-only newWindow="true"></gcse:searchbox-only></li>' +

            '</ul>' +

            '</div></div></nav>';

    navContainer.append(responsiveNav);
    $('body').prepend(navContainer);

    // Job Link
    $('<li class="dropdown"><a href="jobs.html" style="color: red; font-weight: 700;">Jobs</a></li>').insertAfter('#docs');

    // Footer
    var footerText = '<div class="container"><div class="row">' +
        '<div class="col-xs-12 col-md-8"><p class="text-muted text-left">' +
        'Funding for continued development and maintenance of Cytoscape is provided by the U.S. ' +
        '<a href="http://www.nigms.nih.gov">National Institute of General Medical Sciences (NIGMS)</a> ' +
        'under award number GM070743.  ' +
        'Cytoscape user support, education and new initiatives are supported by the ' +
        '<a href="http://nrnb.org">National Resource for Network Biology (NRNB)</a> under award ' +
        'numbers P41 RR031228 and GM103504.</p>' +
        '<p class="text-muted text-center">&copy;2001-2015 <a href="http://www.cytoscapeconsortium.org/">' +
        'Cytoscape Consortium</a></p>' +

        '</div><div class="col-xs-12 col-md-4">' +
        '<gcse:searchbox-only newWindow="true"></gcse:searchbox-only>' +
        '</div></div>' +
        '<script>' +
        '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){' +
        '    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),' +
        '    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)' +
        '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');' +
        'ga(\'create\', \'UA-155159-2\', \'auto\');' +
        'ga(\'send\', \'pageview\');'+
        '</script></div>';

        '</div></div></div>';

    var googleAnalytics = '<script type="text/javascript">' +
                          "var _gaq = _gaq|| []; _gaq.push(['_setAccount', 'UA-155159-2']);" +
                           "_gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script');" +
                            "ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';"+
                            "var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })(); </script>";

    $('footer').append(footerText);
    $('body').append(googleAnalytics);
});