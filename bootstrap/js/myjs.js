var clientWidth = document.body.clientWidth;
var winWidth = parseInt(clientWidth);
var loan = $('.loan');
var con4_question = $('.con4-question');
var con4_answer = $('.con4-answer');


//alert(winWidth);
if(winWidth>=1000){
		$('.navbar-brand').html('<img src="img/logo.png"/>');
		for(var i=0;i<loan.length;i++){
			// 第二部分文字内容圆圈的宽度高度
			loan[i].style.width = 160 + 'px'; 
			loan[i].style.height = 160 + 'px';
			loan[i].style.marginLeft = 25 + 'px';
			$(".footer").show();
		}
	}
if(winWidth<1000&&winWidth>748){
	for(var i=0;i<loan.length;i++){
		loan[i].style.width = 140 + 'px';
		loan[i].style.height = 140 + 'px';
		loan[i].style.marginLeft = winWidth*0.025 + 'px';
	}
}
if(winWidth<748){
	$('.navbar-brand').html('正乾金融');
	for(var i=0;i<$('.loan').length;i++){
		loan[i].style.width = 100 + 'px';
		loan[i].style.height = 100 + 'px';
		$(".footer").hide();
	}
}
if(winWidth<480){
	$('.connect').hide();
}

window.onload = function(){
	for(var j=0;j<con4_question.length;j++){
		con4_question[j].onclick = function() {
			//alert('ok');
			for(var j=0;j<con4_question.length;j++){
				if(this.nextSibling.style.display == 'block'){
					// 使用nextSibling（当前节点的下一个节点）的时候需要保证前后节点无空格
					this.nextSibling.style.display = 'none';
					this.className = 'con4-question';
				}
				else{
					this.nextSibling.style.display = 'block';
					this.className = 'on';
				}
				break;
			}
		};
	}
}

