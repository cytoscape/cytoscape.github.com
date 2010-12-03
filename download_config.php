<?php

# Base URLs
$cbio_base = "http://www.cbio.mskcc.org/cytoscape/release/";
$chianti_base = "http://chianti.ucsd.edu/";

# Logging
$download_log = "/home/groups/c/cy/cytoscape/persistent/data/cyto_data.txt";

#
$latest_version = "2.8.0";
$latest_version_underscore = "2_8_0";
$latest_version_doc_prefix = "2_8";

# Beta and Development versions.  Use empty string when beta is not available.
#$beta_2x = $chianti_base."Cyto-2_8-beta";
$beta_2x = ""; 

# Older versions (be sure to update!)
$older_versions = array(
	"2.1" => "http://chianti.ucsd.edu/Cyto2.1/",
	"2.2" => "http://chianti.ucsd.edu/Cyto-2_2/",
	"2.3.0" => "http://chianti.ucsd.edu/Cyto-2_3/",
	"2.3.1" => "http://chianti.ucsd.edu/Cyto-2_3_1/",
	"2.3.2" => "http://chianti.ucsd.edu/Cyto-2_3_2/",
	"2.4.0" => "http://chianti.ucsd.edu/Cyto-2_4/",
	"2.4.1" => "http://chianti.ucsd.edu/Cyto-2_4_1/",
	"2.5.0" => "http://chianti.ucsd.edu/Cyto-2_5/",
	"2.5.1" => "http://chianti.ucsd.edu/Cyto-2_5_1/",
	"2.5.2" => "http://chianti.ucsd.edu/Cyto-2_5_2/",
	"2.6.0" => "http://chianti.ucsd.edu/Cyto-2_6_0/",
	"2.6.1" => "http://chianti.ucsd.edu/Cyto-2_6_1/",
	"2.6.2" => "http://chianti.ucsd.edu/Cyto-2_6_2/",
	"2.6.3" => "http://chianti.ucsd.edu/Cyto-2_6_3/",
	"2.7.0" => "http://chianti.ucsd.edu/Cyto-2_7_0/"
);

$latest_version_url = $chianti_base."Cyto-".$latest_version_underscore."/";

$latest_release_notes_link = "cyto_".$latest_version_doc_prefix."_features.php";
$latest_download_link = "download.php?file=cyto".$latest_version_underscore;
$latest_manual_pdf = "manual/Cytoscape".$latest_version_doc_prefix."Manual.pdf";
$latest_manual_html = "manual/Cytoscape".$latest_version_doc_prefix."Manual.html";

$latest_javadoc = $latest_version_url."/javadoc/";

# Distribution files
$latest_dist_gz = $latest_version_url."cytoscape-v".$latest_version.".tar.gz";
$latest_dist_zip = $latest_version_url."cytoscape-v".$latest_version.".zip";
$latest_dist_source = $latest_version_url."cytoscapeSource-v".$latest_version.".tar.gz";

$latest_mac = $latest_version_url."Cytoscape_".$latest_version_underscore."_macos.dmg";
$latest_windows_32 = $latest_version_url."Cytoscape_".$latest_version_underscore."_windows_32bit.exe";
$latest_windows_64 = $latest_version_url."Cytoscape_".$latest_version_underscore."_windows_64bit.exe";
$latest_linux = $latest_version_url."Cytoscape_".$latest_version_underscore."_unix.sh";

?>
