$(document).ready(function () {
  //브라우저 높이 가져오기
  let wh = $(window).height();

  /*브라우저 창 사이즈 변경시___________ */
  $(window).resize(function () {
    location.reload(); //새로고침
    let wh = $(window).height();
    $('html,body')
      .stop()
      .animate({ scrollTop: wh * a }, 500);
  });

  /* 탑메뉴 클릭시______________________ */
  $('#dot span').click(function () {
    let num = $(this).index();
    $('#dot span').eq(num).addClass('active');
    $('#dot span').eq(num).siblings().removeClass('active');
    $('html,body')
      .stop()
      .animate({ scrollTop: wh * num }, 1000);
  });

  /* 마우스휠__________________________ */
  let a = 0; //페이지번호
  let area_n = $('.area').length; //섹션개수
  let wheel = true;

  $('.area').on('mousewheel DOMMouseScroll', function (e, delta) {
    if (wheel) {
      let n = $(this).index();

      if (delta < 0) {
        //휠을 아래로 돌렸다면
        a = n + 1;
      } else {
        //휠을 위로 돌렸다면
        a = n - 1;
      }

      if (a <= 0) {
        a = 0;
      }
      if (a >= area_n - 1) {
        a = area_n - 1;
      }

      $('#dot span').eq(a).addClass('active');
      $('#dot span').eq(a).siblings().removeClass('active');
      $('html,body')
        .stop()
        .animate({ scrollTop: wh * a }, 500);
    }
  });

  /*스크롤이벤트______________________ */
  $(window).scroll(function () {
    let sc = $(document).scrollTop();

    //한영역 높이가 wh임
    if (sc >= 0 && sc < wh) {
      a = 0;
    }

    if (sc >= wh && sc < wh * 2) {
      a = 1;

      //콜백함수를 사용해서 첫번째 요소의 애니메이션이 완료한 후에 2번째 요소가 나오게 함
      $('.about_contents p:nth-child(2)')
        .delay(200)
        .animate({ top: '0' }, 700, function () {
          $('.about_contents p:nth-child(1)')
            .delay(200)
            .animate({ right: '250px', opacity: '1' }, 700);
        });
    }

    if (sc >= wh * 2 && sc < wh * 3) {
      a = 2;
    }

    if (sc >= wh * 3 && sc < wh * 4) {
      a = 3;
    }

    if (sc >= wh * 4 && sc < wh * 5) {
      a = 4;
    }

    if (sc >= wh * 5 && sc < wh * 6) {
      a = 5;
    }

    if (sc >= wh * 6 && sc < wh * 7) {
      a = 6;
    }

    if (sc >= wh * 7 && sc < wh * 8) {
      a = 7;
    }

    if (sc >= wh * 8 && sc < wh * 9) {
      a = 8;
    }

    if (sc >= wh * 9 && sc < wh * 10) {
      a = 9;
    }
  });

  /* 레이어 팝업1 */
  $('.menu').click(function () {
    wheel = false;
    $(this).next().show();
    return false;
  });

  $('.close').click(function () {
    wheel = true;
    $('.pop').hide();
    return false;
  });

  /* 레이어 팝업2 */
  $('.menu2').click(function () {
    wheel = false;
    $(this).next().show();
    return false;
  });

  $('.close').click(function () {
    wheel = true;
    $('.pop').hide();
    return false;
  });

  /* 레이어 팝업3 */
  $('.menu3').click(function () {
    wheel = false;
    $(this).next().show();
    return false;
  });

  $('.close').click(function () {
    wheel = true;
    $('.pop').hide();
    return false;
  });

  /* 서브 메뉴 */
  $('.main').hover(
    function () {
      $(this).find('.sub').stop().slideDown();
    },
    function () {
      $(this).find('.sub').stop().slideUp();
    }
  );
});

//scroll work 100%
const options = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 1.0, // 50%가 viewport에 들어와 있어야 callback 실행
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, options);

const boxList = document.querySelectorAll('.box');

// 반복문을 돌려 모든 DOM에 적용
boxList.forEach((el) => observer.observe(el));

/*  */
$(document).ready(function () {
  // 첫 번째 탭 그룹
  $('.tab-1 li').click(function () {
    let num = $(this).index();
    let move = 70 * num; // 세로폭 70px씩 증가됨

    $('.tab-header .tab-highlight').animate({ top: move });
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    let result = $(this).attr('data-alt');
    $('.tab-contents div').removeClass('active');
    $('#' + result).addClass('active');
  });
});

// 탭 메뉴의 탭 클릭 시
$('.tab-header .tab li').click(function () {
  let num = $(this).index();
  let move = 70 * num;

  $('.tab-header .tab-highlight').animate({ top: move });
  $(this).siblings().removeClass('active');
  $(this).addClass('active');

  let result = $(this).attr('data-alt');
  $('.tab-contents div').removeClass('active');
  $('#' + result).addClass('active');
});

/* uiux page */
function guide1() {
  $('.w_slide_btn>span').toggleClass('active');
}
setInterval(guide1, 500);

//태블릿 화면(오버시 화면 올라가게)_________________
$('.w_tab_slide ul li:nth-child(n)').mouseenter(function () {
  $(this).css('background-position', '0 100%');
});
$('.w_tab_slide ul li:nth-child(n)').mouseleave(function () {
  $(this).css('background-position', '0 0');
});

//웹디자인 슬라이드__________________________________
$('.w_list li').click(function () {
  $('.w_list li').removeClass('btn_active'); //기존 숫자
  $(this).addClass('btn_active'); //클릭한 숫자

  val = $(this).index(); //0,1,2,3,...

  $('.w_bg ul').animate({ left: -700 * val + 'px' }); //왼쪽 배경이미지 슬라이드
  $('.w_txt_slide ul').animate({ left: -340 * val + 'px' }); //왼쪽 텍스트 슬라이드
  $('.w_tab_slide ul').animate({ left: -794 * val + 'px' }); //오른쪽 탭이미지 슬라이드
});

//DETAIL 버튼 클릭시 모달창 띄우기_______________________
$('.w_txt_slide>ul>li>span').click(function () {
  wheel = false;
  w_pop = $(this).parent().index(); //Detail 버튼의 부모의 index
  $('.w_page span:nth-child(1)').text(w_pop + 1); //오른쪽 상단 페이지 넘버
  $('html').css({ overflowY: 'hidden' }); //기존 html 스크롤 숨기기
  $('.w_pop>li').eq(w_pop).show(); //w_pop index에 해당하는 팜업보이기
  $('#w_popup').stop(true, true).fadeIn(); //검정배경
  return false;
});

/*오른쪽 상단 버튼-다음보기*/
$('.w_btn .right_btn').click(function () {
  $('#w_popup').scrollTop(0); /*스크롤 상단으로 올리기*/

  if (w_pop < 7) {
    $('.w_pop>li').eq(w_pop).stop(true, true).fadeOut();
    w_pop++;

    $('.w_page span:nth-child(1)').text(w_pop + 1); /*페이지 번호*/
    $('.w_pop>li').eq(w_pop).stop(true, true).fadeIn();
  }
});

/*오른쪽 상단 버튼-이전보기*/
$('.w_btn .left_btn').click(function () {
  $('#w_popup').scrollTop(0); /*스크롤 상단으로 올리기*/

  if (w_pop > 0) {
    $('.w_pop>li').eq(w_pop).stop(true, true).fadeOut();
    w_pop--;

    $('.w_page span:nth-child(1)').text(w_pop + 1); /*페이지번호*/
    $('.w_pop>li').eq(w_pop).stop(true, true).fadeIn();
  }
});

/*오른쪽 상단 버튼-닫기*/
$('.w_btn_close, .w_back').click(function () {
  wheel = true;
  $('html').css({ overflowY: 'scroll' });
  $('#w_popup').stop(true, true).fadeOut();
  $('.w_pop>li').stop(true, true).hide();
  return false;
});

/* webplan */
$(function () {
  $('#tabs').tabs({
    show: { effect: 'blind', direction: 'right', duration: 400 },
  });
  $('#accordion').accordion();

  var btn = $('#accordion li a');
  var wrapper = $('#accordion li');

  $(btn).on('click', function () {
    $(btn).removeClass('active');
    $(btn).parent().find('.addon').removeClass('fadein');

    $(this).addClass('active');
    $(this).parent().find('.addon').addClass('fadein');
  });
});
