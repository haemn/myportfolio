//2.싱글톤 패턴 디자인 패턴을 사용해서 구조를 변경해서 구현해보기.

/*jqueryui.com  완성본 제공 플러그인역할*/

/*다운로드후 폴더안에 추가하기.jquery ui min파일만 가져오기 .. html에 연결시켜주기*/

//하나의 클래스 개념을 사용해서 만드는 패턴이라고 생각하면 된다.

// 클래스
var Avengers = (function($){
    
    //멤버 변수
    var color = ['#de5e5e','#51a2ed','#d279cb','#e9b34b','#60ba5b'];
    var title = ['IRONMAN','CAPTAIN','THOR','SPIDERMAN','HULK'];
    var name_on=function(){
        $(this).children('h2').addClass('on',200);
    }
    
    var name_off=function(){
        $(this).children('h2').removeClass('on',200);
    }
    
    var change_ = function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');


        var index = $(this).index();

        $('body').animate({'background-color' : color[index]});
        $('h1').text(title[index]);
    }
    
    //메소드이지만 캡슐화가 되어 있는 메소드
   /* var popup= function(){
        alert('popup');
    }*/
    
    return {
       /* dialog : popup(),*/
        firstAnimation : function(){
            $('.gnb li').each(function(index){
              $(this).delay(100 * index).animate({
                 top:0
              },3000,'easeOutBounce');
            });
        },eventMethod : function(){
            $('.gnb li').on('mouseenter.name_is_on',name_on_);
            $('.gnb li').on('mouseenter.name_is_down',name_off_);
            $('.gnb li').on('click.select_and_name_change',name_change_);
        },
    }
    
    
}(jQuery));
//제이쿼리함수방식


$(document).ready(function(){
    //Avengers.popup();//에러난다. popup 접근 불가능. return에서 해결해줘야한다
    Avengers.firstAnimation();
    Avengers.eventMethod();
  
});













//riahnrhyme GIT ID





















