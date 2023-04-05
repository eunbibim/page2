$(document).ready(function () {

$(".main").hover(function(){
  $(this).find(".sub").stop().slideDown();
},function(){
  $(this).find(".sub").stop().slideUp();
});





let $simg=$(".slide ul");
let $simgli=$(".slide ul li");
let $sbtn=$(".slide_btn ul li");
let simg_w=$simgli.width();
let simg_n=$simgli.length;
let soldidx=0;
let sindex=0;

//index번째 비주얼이미지 이동하는 함수생성
function slideImg(sindex){

  targetX=-(sindex*simg_w) //움직이는 거리(너비)

  $simg.stop(true,true).animate({left:targetX},600); //위에서 계산한 거리만큼 움직임
  $sbtn.eq(soldidx).removeClass("active"); //기존버튼 비활성화
  $sbtn.eq(sindex).addClass("active"); //선택버튼 활성화
  soldidx=sindex;

};

  //슬라이드 자동
function slideAuto(){
  
  sindex++;
  if(sindex==simg_n){ 
    sindex=0;
  }
  slideImg(sindex);

};

auto=setInterval(slideAuto,3000);

//하단버튼
$sbtn.click(function(){

  clearInterval(auto);
  $(".play").hide();
  $(".stop").show();
  sindex=$(this).index();
  slideImg(sindex);
  auto=setInterval(slideAuto,4000); 

});






$(".swsdimg img").click(function(){

  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  $(".swsdtext .content").removeClass("active");
  $("#"+$(this).attr("data-alt")).addClass("active");
  //$("#tap1").addClass("active");

});

});


