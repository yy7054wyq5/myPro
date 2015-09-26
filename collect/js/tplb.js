window.onload = function(){
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var img_box = document.getElementById("img_box");
  var buttons = document.getElementById('img_dot').getElementsByTagName('span');
  var index = 1;//为按钮赋一个初始值
  
  function showButton(){//小圆点高亮
  	for(var i=0;i<buttons.length;i++){
        if(buttons[i].className=="on"){
        	buttons[i].className="";
        	break;
      }
  	}
  	buttons[index - 1].className = 'on';//第一个小圆点亮起来
  }

  function animat(offset){//箭头切换的封装函数
	  var newleft = parseInt(img_box.style.left)+ offset;//newleft是一个新left数值
	  img_box.style.left = newleft +"px";
	  if(newleft>=0){//当出现最后一张图的附属图时，将left值定为-1800px（真正的3号图）
		 img_box.style.left = -1800 + "px" ;
	  }
	  if(newleft<=-2400){//当出现第一张图的附属图时，将left值定为-600px（真正的1号图）
		 img_box.style.left = -600 + "px" ;
	  }
	  //debugger;
  }

  prev.onclick = function(){//点击左箭头
	  animat(600);
	  index -= 1;//自减1
	  if(index<1){//当index小于1（相当于说点到第一张图，没有上一张图了）,应将index设为1
	  	index=3;
	  }
	  showButton();
  }

  next.onclick = function(){//点击右箭头
	  animat(-600);
	  index += 1;//自加1
	  if(index>3){//当index大于3（相当于说点到第三张图，再往下点没图了）,应将index设为1
	  	index=1;
	  }
	  showButton();
  }

  for (var i=0;i<buttons.length;i++) {//小按钮点击效果（小按钮在数组内，需要通过遍历数组才能用）
  	buttons[i].onclick = function(){
  	  if(this.className=="on"){
  	  	 return;
  	  }	
      var myindex = parseInt(this.getAttribute("index"));//getAttribute方法获取自定义元素的属性，然后转换成整数
      var offset = - 600 *(myindex - index);//偏移量
      animat(offset);
      index = myindex;
      showButton();
      //debugger;
  	}
  };


}
