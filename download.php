<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Download Cytoscape</title>

    <meta name="description" content="Download page for Cytoscape.">
    <meta name="author" content="Keiichiro Ono">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="js/download.js"></script>

    <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="js/UAParser/ua-parser.0.7.0.min.js"></script>

    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

    <link href="css/main.bootstrap.css" rel="stylesheet">
</head>

<body>
<!--[if lt IE 11]>
<p class="browsehappy">
    You are using an <strong>outdated, ancient, archaic</strong> browser.
    Please <a href="http://browsehappy.com/">upgrade
    your browser</a> to improve your experience.
</p>
<![endif]-->


<div class="narrow white">
    <div class="container centering">
        <h1 class="cy-latest-version">Download Cytoscape </h1>
    </div>
</div>

<div class="narrow white">
    <div class="container">
        <div class="row centering download-main">
            <a class="download-primary">
                <button class="download-button platform">
                    <h1>
                        <span class="glyphicon glyphicon-cloud-download" style="vertical-align: text-top;"></span>
                    </h1>
                </button>
            </a>

            <div class="warn win32"></div>
        </div>
    </div>

</div>

<div class="narrow white">
    <div class="container centering">
        <div class="row centering">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
                <h3>Please install <a
                        href="http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html">
                    Java</a> first to use Cytoscape.
                </h3>
                <h4 class="warn">
                    Java 6 is no longer supported
                </h4>

                <h3>
                    Problems? <a href="troubleshooting.html">Read this page first</a>
                </h3>
            </div>
        </div>
    </div>
</div>
<div class="narrow white">
    <div class="container">
        <div class="row centering">
            <h4>
                <a href="releasenotes.html">
                    Release Notes
                </a>
            </h4>
        </div>
    </div>
</div>

<div class="narrow white">
    <div class="container">
        <div class="row centering">
            <h4>
                <a href="download-platforms.html">
                    Other Platforms
                </a>
            </h4>
            <h4>
                <a href="download_old_versions.html">
                    Old Versions
                </a>
            </h4>
        </div>
    </div>
</div>
</div>


<div class="narrow white">
    <div class="container">
        <div class="row centering">
            <h3>License Agreement</h3>
        </div>

        <div class="row centering">
            <div class="col-sm-12 col-md-8 col-md-offset-2">
                <p>
                    Cytoscape is available as a platform-independent open-source Java application, released under the
                    terms of the <a href="http://www.gnu.org/copyleft/lesser.html" target="_new">LGPL</a>. By
                    downloading Cytoscape, you agree that you have read the license agreement that follows and agree to
                    its terms. If you don't agree, do not download Cytoscape.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="belt light-gray">
    <div class="container centering">
        <h3>
            CYTOSCAPE LICENSE AGREEMENT
        </h3>
        <h4>
            GNU LESSER GENERAL PUBLIC LICENSE Version 2.1, February 1999
        </h4>

        <div class="row">
            <div class="col-sm-12 col-md-6 col-md-offset-3">
                <div class="license" style="text-align: left;"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-6 col-md-offset-3">
            <p style="text-align: left;">
                Note: Incorporating function code by extending an abstract class is specifically 
                deemed to be equivalent to ‘using numerical parameters, data structure layouts 
                and accessors, and small macros and small inline functions (ten lines or less in 
                length)’ for the purposes of Section 5.
            </p>
            </div>
        </div>
    </div>
</div>

<div class="belt white">
    <div class="container centering">
        <div class="row">
	        <h4>
	            Cytoscape installers are created with:
	        </h4>
	        <a href="https://www.ej-technologies.com/products/install4j/overview.html">
	            <img src="http://www.ej-technologies.com/images/banners/install4j_large.png"/>
	        </a>
        </div>

        <div class="row">
            <h4>
                Cytoscape is supported by JetBrains through their open source licencing program:
            </h4>
            <a href="https://www.jetbrains.com/">
                <img src="https://www.jetbrains.com/company/docs/logo_jetbrains.png" />
            </a>
        </div>
    </div>
</div>


<footer></footer>

<!-- Google Code for Cytoscape downloaded Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1026957401;
var google_conversion_language = "en";
var google_conversion_format = "1";
var google_conversion_color = "ffffff";
var google_conversion_label = "-cK5CJPKiwIQ2cDY6QM";
var google_conversion_value = 0;
/* ]]> */
</script>

<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js">
</script>

<noscript>
<div style="display:inline;" class="white">
<img height="1" width="1" style="border-style:none;" alt="" src="http://www.googleadservices.com/pagead/conversion/1026957401/?label=-cK5CJPKiwIQ2cDY6QM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>

<script>
    $(function () {
        var BASE_URL = LATEST.url + 'Cytoscape_' + LATEST.version.split('.').join('_') + '_';

        var is64 = true;

        var parser = new UAParser();
        console.log(parser.getOS());
        console.log(parser.getCPU());
        console.log(window.navigator.platform);
        console.log(window.navigator.cpuClass);
        if (navigator.userAgent.indexOf("WOW64") === -1 ||
                navigator.userAgent.indexOf("Win64") === -1) {
            is64 = false;
        }

        var osString = '';
        var osName = parser.getOS().name;
        var cpu = parser.getCPU();
        var architecture = null;
        if (cpu !== undefined) {
            architecture = cpu.architecture;
        }
        var fileName = '';

        if (osName.indexOf('Mac OS') !== -1) {
            osString = osName;
            fileName = 'macos.dmg';
        } else if (osName.indexOf('Windows') !== -1 || cpu === 'amd64') {
            // This is windows.
            if (is64 || architecture === 'amd64') {
                osString = osName + ' (64 bit)';
                fileName = 'windows_64bit.exe';
            } else {
                osString = osName + ' (32 bit)';
                fileName = 'windows_32bit.exe';
                $('.win32').append('<h3>32bit version is not recommended.  Please use 64bit version if possible.</h3>');
            }
        } else if (osName.indexOf('Linux') !== -1 || osName.indexOf('Ubuntu') !== -1) {
            osString = osName;
            fileName = 'unix.sh';
        } else {
            osString = undefined;
        }

        if (osString === undefined) {
            $('.download-primary').remove();
            $('.download-main').append('<h3>Could not detect your system.  Please choose from the following links:</h3>');
        } else {
            var downloadLink = BASE_URL + fileName;

            $('.platform h1').append(' for ' + osString);
            $('.download-primary').attr('href', downloadLink);
        }


        $.ajax({
            url: "LGPL.txt",
            success: function (data) {
                var lines = data.split(/\n/);
                $(".license").html(lines.join("<br />"));
            }
        });
    });
</script>
<script src="js/setup_page.js"></script>
</body>

</html>
