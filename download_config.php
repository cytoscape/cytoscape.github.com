<?php

##!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
##
##
##
##
##
##  WARNING !!!!!!!!!!!!!!!!!!!!!!!
##
##
##  You must also update the file js/global_variables.js with new version numbers!!!!!!
##
##
##
##
##
##!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

# Base URLs
$cbio_base = "http://www.cbio.mskcc.org/cytoscape/release/";
$chianti_base = "http://chianti.ucsd.edu/";

# Logging
$download_log = "/home/groups/c/cy/cytoscape/persistent/data/cyto_data.txt";

#
$latest_version = "2.8.3";
$latest_version_underscore = "2_8_3";
$latest_version_doc_prefix = "2_8";

$latest_3x_version = "3.0.1";
$latest_3x_version_underscore = "3_0_1";
$latest_3x_version_doc_prefix = "3_0";

# Beta and Development versions.  Use empty string when beta is not available.
#$beta_2x = $chianti_base."Cyto-2_8-beta";
$beta_2x = ""; 

# Older versions (be sure to update!)
$older_versions = array(
    "3.0.0" => "http://chianti.ucsd.edu/cytoscape-3.0.0/",
    "2.8.2" => "http://chianti.ucsd.edu/Cyto-2_8_2/",
    "2.8.1" => "http://chianti.ucsd.edu/Cyto-2_8_1/",
    "2.8.0" => "http://chianti.ucsd.edu/Cyto-2_8_0/",
    "2.7.0" => "http://chianti.ucsd.edu/Cyto-2_7_0/",
    "2.6.3" => "http://chianti.ucsd.edu/Cyto-2_6_3/",
    "2.6.2" => "http://chianti.ucsd.edu/Cyto-2_6_2/",
    "2.6.1" => "http://chianti.ucsd.edu/Cyto-2_6_1/",
    "2.6.0" => "http://chianti.ucsd.edu/Cyto-2_6_0/",
    "2.5.2" => "http://chianti.ucsd.edu/Cyto-2_5_2/",
    "2.5.1" => "http://chianti.ucsd.edu/Cyto-2_5_1/",
    "2.5.0" => "http://chianti.ucsd.edu/Cyto-2_5/",
    "2.4.1" => "http://chianti.ucsd.edu/Cyto-2_4_1/",
    "2.4.0" => "http://chianti.ucsd.edu/Cyto-2_4/",
    "2.3.2" => "http://chianti.ucsd.edu/Cyto-2_3_2/",
    "2.3.1" => "http://chianti.ucsd.edu/Cyto-2_3_1/",
    "2.3.0" => "http://chianti.ucsd.edu/Cyto-2_3/",
    "2.2" => "http://chianti.ucsd.edu/Cyto-2_2/",
    "2.1" => "http://chianti.ucsd.edu/Cyto2.1/"
);

######### For Cytoscape 2.x Series
$latest_version_url = $chianti_base."Cyto-".$latest_version_underscore."/";

$latest_release_notes_link = "cyto_".$latest_version_doc_prefix."_features.php";
$latest_download_link = "download.php?file=cyto".$latest_version_underscore;
$latest_manual_pdf = "manual/Cytoscape".$latest_version_doc_prefix."Manual.pdf";
$latest_manual_html = "manual/Cytoscape".$latest_version_doc_prefix."Manual.html";

$latest_javadoc = $latest_version_url."/javadoc/";

# Distribution files
$latest_dist_gz = $latest_version_url."cytoscape-".$latest_version.".tar.gz";
$latest_dist_zip = $latest_version_url."cytoscape-".$latest_version.".zip";

$latest_mac = $latest_version_url."Cytoscape_".$latest_version_underscore."_macos.dmg";
$latest_windows_32 = $latest_version_url."Cytoscape_".$latest_version_underscore."_windows_32bit.exe";
$latest_windows_64 = $latest_version_url."Cytoscape_".$latest_version_underscore."_windows_64bit.exe";
$latest_linux = $latest_version_url."Cytoscape_".$latest_version_underscore."_unix.sh";


######### For Cytoscape 3.x Series
$latest_3x_version_url = $chianti_base."cytoscape-".$latest_3x_version."/";

$latest_3x_release_notes_link = "cyto_".$latest_3x_version_doc_prefix."_features.php";
$latest_3x_download_link = "download.php?file=cyto".$latest_3x_version_underscore;
$latest_3x_manual_pdf = "manual/Cytoscape".$latest_3x_version_doc_prefix."Manual.pdf";
$latest_3x_manual_html = "manual/Cytoscape".$latest_3x_version_doc_prefix."Manual.html";

$latest_3x_javadoc = $latest_3x_version_url."/API/";

# Distribution files
$latest_3x_dist_gz = $latest_3x_version_url."cytoscape-".$latest_3x_version.".tar.gz";
$latest_3x_dist_zip = $latest_3x_version_url."cytoscape-".$latest_3x_version.".zip";

$latest_3x_mac = $latest_3x_version_url."Cytoscape_".$latest_3x_version_underscore."_macos.dmg";
$latest_3x_windows_32 = $latest_3x_version_url."Cytoscape_".$latest_3x_version_underscore."_windows_32bit.exe";
$latest_3x_windows_64 = $latest_3x_version_url."Cytoscape_".$latest_3x_version_underscore."_windows_64bit.exe";
$latest_3x_linux = $latest_3x_version_url."Cytoscape_".$latest_3x_version_underscore."_unix.sh";

?>
