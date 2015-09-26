$(function() {
	// 顶部菜单滑动
    $("#slide-nav").lavaLamp({
        fx: "backout",
        speed: 1500,
        click: function(event, menuItem) {
            return false;
        }
    });

    // 应对fullpage.js背景在小于1300宽度下背景未居中的bug，在启动fullpage.js之前设置背景定位
    for(k=0;k<5;k++){
        //alert(sectionBgs.sectionImg[k].secimg);
        var sectionBg = sectionBgs.sectionImg[k].secimg;
        $('#section'+k).css('background',sectionBg);
    }
    $('#section3').css('backgroundColor','#3394D8');
	// 全屏滚动初始化
    fullpage.initialize('#fullpage', {
    	anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    	css3: true,
    	navigation: true,
    	navigationTooltips: ['首页', '产品介绍', '发展历程', '旗下公司','新闻动态'],
    	onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            // 离开第一屏的函数
            if(index == 1 && direction =='down'){
                // fp-sectionbgdown为加了.bgdown的bug
                $('#section0').removeClass('fp-sectionbgdown');
                $('#section0').addClass('fp-section');
                $('#section0').css('background',sectionBgs.sectionImg[0].secimgChange);
            }
            if(index == 3){
                $('.slideImg').removeClass('toBig');
                $('.slideImg').css('width','0px');
                $('.slideImg').css('height','0px');
            }
            if(index == 5){
               $('.sec3left li').removeClass('toRight');
               $('.sec3right li').removeClass('toLeft');
               $('.sec3center').removeClass('toOpacity');
            }
            if(index == 7){
                $('#section3 .content').removeClass('show');
            }
            if(index == 9){
                $('#section4 .content').removeClass('show');
            }
    	},
    	//回到第一屏的函数,第一屏动画,fullpage以index为1开始排序
    	afterLoad: function(anchorLink, index){
            if($.cookie('name')=='helloCookie'){
                loadOne();
            }
            else{
                $('#section0').css('background',sectionBgs.sectionImg[0].secimgLoading);
                setTimeout(function(){
                    loadOne();
                },1500);
            }
    		var loadedSection = $(this);
            // 第一次载入将名字存入cookie，通过判断cookie的名字。来判断是首次访问还是本页切换
            $.cookie('name', 'helloCookie');
            // 第一屏回调函数
            function loadOne(){
                if(index == 1){             
                    // 加载动画
                    $('.index_logo').addClass('moveup');
                    $('#section0').addClass('bgdown');
                    $('.index_logo').show();
                    $('#section0').css('background',sectionBgs.sectionImg[0].secimg);
                    // 延迟加载的动画
                    setTimeout(function(){
                        $('.index_title').addClass('moveleft');
                        $('.index_title,.welcome').show();
                        $('.welcome').addClass('moveright');
                        }, 1000);
                }
                else{
                    $('.index_logo,.index_title,.welcome').hide();
                    $('.index_logo').removeClass('moveup');
                    $('.index_title').removeClass('moveleft');
                    $('.welcome').removeClass('moveright');
                }
            }
            // 第二屏回调函数
            if(index == 3){
                $('.slideImg').addClass('toBig');
                $('.slideImg').css('width','450px');
                $('.slideImg').css('height','306px');
            }
            $('.sec3left li').addClass('leftAuto');
            $('.sec3right li').addClass('rightAuto');
            $('.sec3center').addClass('autoOpacity'); 
            // 第三屏回调函数
            if(index == 5){  
                var s3number = 5;
                for (var i=$('.sec3left li').length-1;i>=0;i--){
                    setTimeout(function(){
                        s3number --;
                        $('.sec3left li:nth-child('+s3number+')').addClass('toRight');
                        $('.sec3right li:nth-child('+s3number+')').addClass('toLeft');
                    },i*150);
                }
                $('.sec3center').addClass('toOpacity');
            }
            // 第四屏回调函数
            if(index == 7){
                $('#section3 img').mouseover(function(){
                    $(this).addClass('bigImg');
                    $(this).mouseleave(function(){$(this).removeClass('bigImg');});
                });
                $('#section3 .content').addClass('show');
            }
            // 第五屏回调函数
            if(index == 9){
                $('#section4 .content').addClass('show');
            }
    	}//回调函数结束

    });
});

// 第二屏JS
window.onload = function(){
    $('.slideCon>img').mouseover(function(){
        $(this).next().css('display','block');
    });
    $('.slideCon>.slideText').mouseleave(function(){
        $(this).css('display','none');
    });
}   