$(document).ready(function(){
  
});

window.onload = function(){
	$("#video_list .item").click(function() {
		var myIndex = parseInt(this.getAttribute("index"));
		var myUrl = this.getAttribute("videoUrl");
		//alert(myIndex);
		var video_name = $('#video_list h3')[myIndex-1].innerHTML;//当前被点击的视频的名字
		$(".trans_con").show("normal");//开启浮层

		if(myUrl.substr(0,4)=="http"){//判断视频链接是否含有http开头的优酷视频
			//alert("成功！");
		   $('.myvideo').html('<p>'+ video_name +'</p>' + '<span>×</span><div class="myvideo_con"><embed src=" ' + myUrl + '" allowFullScreen="true" quality="high" width="628" height="394" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed></div>');
		   $(".trans_con span").click(function() {//关闭浮层
				$(".trans_con").hide("normal");
			});
		}

		if(myUrl.substr(0,6)=="weixin"){//判断视频链接开头是否含有weixin开头的本地视频
			//alert("成功！");
		   $('.myvideo').html('<p>'+ video_name +'</p>' + '<span>×</span><video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="628" height="394" poster="img/sp10.jpg" data-setup="{}"><source src="  '+ myUrl +' " type="video/mp4" /></video>')
		   //alert($('.myvideo').html());
		   $(".trans_con span").click(function() {//关闭浮层
		   		$(".trans_con").hide("normal");
		   		var myPlayer = $('#example_video_1');
		   		// for(var i=0;i<myPlayer.length;i++){
		   		// 	alert(myPlayer[i]);
		   		// }
		   		//明明只有1个myPlayer,但是调用该播放器还是需要加索引？
		   		myPlayer[0].pause();
			});
		}
	});
}

