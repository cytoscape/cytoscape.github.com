// Get Tumblr Images

gbimg=new Array();

gbcnt=0;

imgnum=0;

fid=null;

function addimg(){
	if(gbcnt < imgnum){
		var tarea=document.getElementById('id_add_img_area');
		tarea.innerHTML+=gbimg[gbcnt];
		gbcnt++;
	} else {
		gbcnt=0;
		clearInterval(fid);
	}
}

function my_tumble_photo_n(arg){
	tObj=arg['posts'];
	imgnum=tObj.length;
	for(i=0;i < imgnum;i++){
		var photourl=tObj[i]['photo-url-75'];
		var tumblrurl=tObj[i]['url'];
		var date=tObj[i]['date'];
		var img='<img src="' + photourl + '" style="margin:4px; border:none">';
		
		if(tumblrurl){
			var link='<a href="' + tumblrurl + '" target="_blank" title="' + date + '">';
			img=link+img+'</a>';
		}
		
		gbimg.push(img);
		var tmpimg=new Image();
		tmpimg.src=photourl;
	}
	
	fid = setInterval("addimg()", 250);
}