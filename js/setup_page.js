/**
 * Created with JetBrains WebStorm.
 * User: kono
 * Date: 2013/07/30
 * Time: 10:32
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {

    ////////////////////////////////////
    // Modify this when releasing new version!
    ////////////////////////////////////
    var CYTOSCAPE_LATEST_VERSION = '3.10.3';

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
    const pageName = window.location.pathname.split('/').pop();
    var cytoscape_web_menu = '<li><a href="https://web.cytoscape.org">Cytoscape Web</a></li>'

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
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Intro<b class="caret"></b></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href="what_is_cytoscape.html">What is Cytoscape?</a></li>' +
        '<li><a href="who_is_using.html">Who is Using Cytoscape</a></li>' +
        '<li><a href="stat.html">Project Statistics</a></li>' +
        '<li><a href="screenshots.html">Screenshots</a></li>' +
        '<li><a href="roadmap.html">Roadmap</a></li>' +
        '</ul></li>' +
        cytoscape_web_menu +
        '<li><a href="download.html">Download</a></li>' +

        '<li><a href="http://apps.cytoscape.org/" target="_blank">Apps</a></li>' +

        '<li id="docs" class="dropdown">' +
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Documentation<b class="caret"></b></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href="https://manual.cytoscape.org/en/stable/">Manual</a></li>' +
        '<li><a href="http://tutorials.cytoscape.org">Tutorials</a></li>' +
        '<li><a href="https://github.com/cytoscape/cytoscape-automation/wiki">Automation</a></li>' +
        '<li><a href="https://www.youtube.com/channel/UCv6auk9FK4NgXiXiqrDLccw">Video Demos</a></li>' +
        '<li><a href="documentation_users.html">Links for Users</a></li>' +
        '<li><a href="documentation_developers.html">Links for Developers</a></li>' +
        '<li><a href="releasenotes.html">Release Notes</a></li>' +
        '<li><a href="logos.html">Logos and merch</a></li>' +
        '</ul></li>' +

        '<li class="dropdown">' +
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Community<b class="caret"></b></a>' +
        '<ul class="dropdown-menu">' +
        '<li class="warn"><a href="http://nrnb.org/competitions.html">Competitions</a></li>' +
        '<li><a href="development_team.html">Developer Team</a></li>' +
        '<li><a href="community.html">Social Media</a></li>' +
        '<li><a href="http://nrnb.org/training.html">Training</a></li>' +
        '</ul></li>' +

        '<li><a href="bug-report.html">Report a Bug</a></li>' +

        '<li class="dropdown">' +
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Help<b class="caret"></b></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href="troubleshooting.html">Troubleshooting</a></li>' +
        '<li><a href="common_issues.html">Common Issues</a></li>' +
        '<li><a href="documentation_users.html">Getting Help</a></li>' +
        '</ul></li>' +

        '<li><gcse:searchbox-only newWindow="true"></gcse:searchbox-only></li>' +

        '</ul>' +

        '</div></div></nav>';

    navContainer.append(responsiveNav);
    $('body').prepend(navContainer);

    // Footer
    var currentYear = new Date().getFullYear().toString();
    var footerText = '<div class="container"><div class="row">' +
        '<div class="col-xs-12 col-md-8"><p class="text-muted text-left">' +
        'Funding for continued development and maintenance of Cytoscape is provided by the U.S. ' +
        '<a href="https://www.genome.gov/">National Human Genome Research Institute (NHGRI)</a> ' +
        'under award number NIH NHGRI U24 HG012107<br/>(Previously: R01 HG009979; R01 GM070743)<br/> ' +
        'Cytoscape user support, education and new initiatives are supported by the ' +
        '<a href="http://nrnb.org">National Resource for Network Biology (NRNB)</a> under award ' +
        'number P41 GM103504.<br/>' +
        'The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.</p>' +
        '<p class="text-muted text-center">&copy;2001-' + currentYear + ' <a href="http://www.cytoscapeconsortium.org/">' +
        'Cytoscape Consortium</a></p>' +
        
        '</div><div class="col-xs-12 col-md-4">' +
        '<gcse:searchbox-only newWindow="true"></gcse:searchbox-only>' +
        '</div></div>' +
        '</div>';

    '</div></div></div>';

    var googleAnalytics = '<!-- Google tag (gtag.js) -->' +
        "<script async src='https://www.googletagmanager.com/gtag/js?id=G-VW6TVC8T9J'></script>" +
        '<script>' +
        'window.dataLayer = window.dataLayer || [];' +
        'function gtag(){dataLayer.push(arguments);}' +
        "gtag('js', new Date());" +
        "gtag('config', 'G-VW6TVC8T9J');" +
        '</script>';
    
    // Hotjar Tracking Code for Cytoscape.org 
    var hotjarTracking = '<script>' +
        '(function(h,o,t,j,a,r){' +
        'h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};' +
        'h._hjSettings={hjid:3415751,hjsv:6};' +
        "a=o.getElementsByTagName('head')[0];" +
        "r=o.createElement('script');r.async=1;" +
        'r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;' +
        'a.appendChild(r);' +
        "})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');" +
        '</script>';

    $('footer').append(footerText);
    $('head').append(googleAnalytics);
    $('head').append(hotjarTracking);
});
