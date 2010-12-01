<?php
	include "download_config.php";

	
	####################################################
	# Generate download page if input values are valid.
	####################################################
	function ProcessSuccess($download_log) {
		
		# Get User URL Parameters
		# Assume these values are validated in client script.
		$name = $_REQUEST["name"];
		$org = $_REQUEST["org"];
		$email = $_REQUEST["email"];
		$contact = $_REQUEST["contact"];
	
		# Add to the log
		$now = date("F j, Y, g:i a");  
		$ip = getenv(REMOTE_ADDR);
		
		$contactStr = "NO_EMAIL";
		if (isset($contact)) {
			$contactStr = "YES_EMAIL";
		}
		$newEntry = "$now\t$ip\t$file\t$name\t$org\t$email\t$contactStr\n";
		
		$fr = fopen($download_log, 'a');
		fputs($fr, $newEntry);
		fclose($fr);
	}
	
	
	# Process
	$submit = $_REQUEST["submit"];
	if (isset($submit)) {
		ProcessSuccess($download_log);
		$files["gz"] = $latest_dist_gz;
		$files["zip"] = $latest_dist_zip;
		$files["source"] = $latest_dist_source;
		$files["mac"] = $latest_mac; 
		$files["win32"] = $latest_windows_32;
		$files["win64"] = $latest_windows_64; 
		$files["linux"] = $latest_linux; 
	} else {
		echo "cannot process";
	}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/main.css" type="text/css" rel="stylesheet" media="screen">
<title>Thank you!</title>
<script type="text/javascript" 
src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/global_variables.js"></script>
<script type="text/javascript" src="js/menu_generator.js"></script>
</head>

<body>
<div id="container"> 
  <script src="js/header.js"></script>
  <div id="download">
    <div class="blockleft">
      <h2>Download Latest Version:
        <?=$latest_version?>
      </h2>  
      <ol>
        <li>
          <h3>Platform Specific Installers</h3>
        </li>
        <ul>
          <li><a href="<?=$files["mac"]?>">Mac OS X</a></li>
          <li><a href="<?=$files["win32"]?>">Windows 32bit</a></li>
          <li><a href="<?=$files["win64"]?>">Windows 64bit</a></li>
          <li><a href="<?=$files["linux"]?>">Linux</a></li>
        </ul>
        <li>
          <h3>Archived Distribution Files</h3>
          <ul>
          	<li><a href="<?=$files["zip"]?>">Zip Archive ( for Windows )</a></li>
          	<li><a href="<?=$files["gz"]?>">GZIP Archive ( for Mac/Unix Systems )</a></li>
          </ul>
        </li>
        <li>
          <h3>Source Distributions</h3>
          <ul>
          	<li><a href="<?=$files["source"]?>">Zipped Source Archive</a></li>
          </ul>
        </li>
      </ol>
    </div>
    
    <div class="blockright">
    	<h2>Older Versions</h2>
        <ul>
            <li><a href="http://chianti.ucsd.edu/Cyto2.1/">2.1</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_2/">2.2</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_3/">2.3.0</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_3_1/">2.3.1</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_3_2/">2.3.2</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_4/">2.4.0</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_4_1/">2.4.1</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_5/">2.5.0</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_5_1/">2.5.1</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_5_2/">2.5.2</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_6_0/">2.6.0</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_6_1/">2.6.1</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_6_2/">2.6.2</a></li>
            <li><a href="http://chianti.ucsd.edu/Cyto-2_6_3/">2.6.3</a></li>
      	</ul>
        
        
        <hr />
        <h2>Development Versions</h2>
        <ul>
          <li><a href="<?=$beta_2x?>">Beta Version: Cytoscape 2.8</a></li>
          <li>Nightly Build</li>
        </ul>
    </div>
  </div>
  <script src="js/footer.js"></script> 
</div>
</body>
</html>
