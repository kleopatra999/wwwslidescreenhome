		//**************************
		// Detects if the current device is an Android OS-based device.
		function DetectAndroid()
		{		
				var deviceAndroid = "android";
				var uagent = navigator.userAgent.toLowerCase();
				
			 if (uagent.search(deviceAndroid) > -1) 
		      return true;
		   else
		      return false;
		}


window.onload = function(evt) {
	
	if(DetectAndroid()) {
		//get video link
		var androidVideo = document.getElementById("android_video_button");
		androidVideo.style.display = "block";
		
	
	
	
	
	} else {
	
		//get video link
		var video = document.getElementById("video_button");
		video.style.display = "block";
	
	}
	
}