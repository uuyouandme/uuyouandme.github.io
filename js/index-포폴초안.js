$(document).ready(function () {
  let wh = $(window).height();

  $(window).resize(function () {
    location.reload(); //새로고침
    let wh = $(window).height();
    $('html,body')
      .stop()
      .animate({ scrollTop: wh * a }, 500);
  });

  $('#gnb li, #dot span').click(function () {
    let num = $(this).index();
    $('#tt').text(num);
    $('#dot span').eq(num).addClass('active');
    $('#dot span').eq(num).siblings().removeClass('active');
    $('html,body')
      .stop()
      .animate({ scrollTop: wh * num }, 500);
  });

  let a = 0;
  let area_n = $('.area').length;
  let wheel = true;

  $('.area').on('mousewheel DOMMounseScroll', function (e, delta) {
    e.preventDefault();

    if (wheel) {
      let n = $(this).index();

      if (delta < 0) {
        a = n + 1;
      } else {
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

  $(window).scroll(function () {
    let sc = $(document).scrollTop();

    if (sc >= 0 && sc < wh) {
      a = 0;
    }

    if (sc >= wh && sc < wh * 2) {
      a = 1;
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
  });
});

//#home
$(document).ready(function () {
  let $simg = $('.slide ul');
  let $simgli = $('.slide ul li');
  let $sbtn = $('.slide_btn ul li');
  let $snext = $('.slide_side_btn .nex');
  let $spre = $('.slide_side_btn .pre');
  let simg_w = $simgli.width();
  let simg_n = $simgli.length;
  let soldidx = 0;
  let sindex = 0;

  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex) {
    targetX = -(sindex * simg_w);
    $simg.stop().animate({ left: targetX }, 600);
    $sbtn.eq(soldidx).removeClass('active');
    $sbtn.eq(sindex).addClass('active');
    soldidx = sindex;
  }

  function slideAuto() {
    sindex++;
    if (sindex == simg_n) {
      sindex = 0;
    }
    slideImg(sindex);
  }

  auto = setInterval(slideAuto, 4000);

  $sbtn.click(function () {
    clearInterval(auto);
    $('.play').hide();
    $('.stop').show();
    sindex = $(this).index();
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });

  $spre.click(function () {
    clearInterval(auto);
    $('.play').hide();
    $('.stop').show();
    sindex--;
    if (sindex < 0) {
      sindex = simg_n - 1;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });

  $snext.click(function () {
    clearInterval(auto);
    sindex++;
    if (sindex == simg_n) {
      sindex = 0;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });

  $('.play').hide();

  $('.stop').click(function () {
    clearInterval(auto);
    $('.stop').hide();
    $('.play').show();
  });
  $('.play').click(function () {
    auto = setInterval(slideAuto, 4000);
    $('.play').hide();
    $('.stop').show();
  });
});

//webpublishing
$(document).ready(function () {
  let $img = $('.changeimg ul li');
  let $btn = $('.btn ul li');
  let $lbtn = $('.side_btn .lbtn');
  let $rbtn = $('.side_btn .rbtn');
  let oldidx = 0;
  let idx = 0;
  let img_n = $img.length;

  function changeImg(idx) {
    if (oldidx != idx) {
      $btn.eq(oldidx).removeClass('active');
      $btn.eq(idx).addClass('active');
      $img.eq(oldidx).stop().fadeOut('300');
      $img.eq(idx).stop().fadeIn('300');
    }
    oldidx = idx;
  }

  function changeAuto() {
    idx++;
    if (idx > img_n - 1) {
      idx = 0;
    }
    changeImg(idx);
  }

  timer = setInterval(changeAuto, 8000);

  $btn.click(function () {
    clearInterval(timer);
    idx = $(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto, 8000);
  });

  $lbtn.click(function () {
    clearInterval(timer);
    idx--;
    if (idx < 0) {
      idx = img_n - 1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto, 8000);
  });

  $rbtn.click(function () {
    clearInterval(timer);
    idx++;
    if (idx > img_n - 1) {
      idx = 0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto, 8000);
  });

  function changeAuto() {
    clearInterval(timer);
  }
});

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

  // 두 번째 탭 그룹
  $('.tab-2 li').click(function () {
    let num = $(this).index();
    let move = 70 * num; // 세로폭 70px씩 증가됨

    $('.tab-header2 .tab-highlight2').animate({ top: move });
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    let result = $(this).attr('data-alt');
    $('.tab-contents2 > div').removeClass('active');
    $('#' + result + '_2').addClass('active');
  });
});

/* webdesign_tab_uxui */
$(document).ready(function () {
  $('.tab-contents2, #tabmenu2').hide();

  // "Graphic" 탭 클릭 시
  $('.gobutton .graphic').click(function () {
    $('.tab-contents, #tabmenu').show();
    $('.tab-contents2, #tabmenu2').hide();
  });

  // "UX/UI" 탭 클릭 시
  $('.gobutton .uxui').click(function () {
    $('.tab-contents, #tabmenu').hide();
    $('.tab-contents2, #tabmenu2').show();
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
});

/*  */
$(document).ready(function () {
  /* 탭메뉴 클릭____________________________ */
  $('.tab11 li').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    let result = $(this).attr('data-alt');
    $('.panel li').removeClass('active');
    $('#' + result)
      .addClass('active')
      .hide()
      .fadeIn();
  });

  //해당 탭메뉴를 클릭할 때 해당 첫 썸네일을 클릭시킴....(마지막에 누른채로 보이지 않고 항상 처음처럼 보이게 함)
  $('.tab11 li:first-child').click(function () {
    $('.gallery1 .thumbs li:first').click();
  });
  $('.tab11 li:nth-child(2)').click(function () {
    $('.gallery2 .thumbs li:first').click();
  });
  $('.tab11 li:last-child').click(function () {
    $('.gallery3 .thumbs li:first').click();
  });
  $('.tab11 li:last-child').click(function () {
    $('.gallery4 .thumbs li:first').click();
  });
  $('.tab11 li:last-child').click(function () {
    $('.gallery5 .thumbs li:first').click();
  });

  /* 탭메뉴별 이미지갤러리_____________________ */

  //tab1-gallery
  let goldidxA = 0;
  let gidxA = 0;

  function galleryImgA(gidxA) {
    if (goldidxA != gidxA) {
      $('.gallery1 .thumbs li').eq(goldidxA).css({ opacity: 0.3 });
      $('.gallery1 .thumbs li').eq(gidxA).css({ opacity: 1 });
      $('.gallery1 .largeImg li').eq(goldidxA).stop().fadeOut(300);
      $('.gallery1 .largeImg li').eq(gidxA).stop().fadeIn(300);
    }
    goldidxA = gidxA;
  }

  $('.gallery1 .thumbs li').click(function () {
    gidxA = $(this).index();
    galleryImgA(gidxA);
  });

  //tab2-gallery
  let goldidxB = 0;
  let gidxB = 0;

  function galleryImgB(gidxB) {
    if (goldidxB != gidxB) {
      $('.gallery2 .thumbs li').eq(goldidxB).css({ opacity: 0.3 });
      $('.gallery2 .thumbs li').eq(gidxB).css({ opacity: 1 });
      $('.gallery2 .largeImg li').eq(goldidxB).stop().fadeOut(300);
      $('.gallery2 .largeImg li').eq(gidxB).stop().fadeIn(300);
    }
    goldidxB = gidxB;
  }

  $('.gallery2 .thumbs li').click(function () {
    gidxB = $(this).index();
    galleryImgB(gidxB);
  });

  //tab3-gallery
  let goldidxC = 0;
  let gidxC = 0;

  function galleryImgC(gidxC) {
    if (goldidxC != gidxC) {
      $('.gallery3 .thumbs li').eq(goldidxC).css({ opacity: 0.3 });
      $('.gallery3 .thumbs li').eq(gidxC).css({ opacity: 1 });
      $('.gallery3 .largeImg li').eq(goldidxC).stop().fadeOut(300);
      $('.gallery3 .largeImg li').eq(gidxC).stop().fadeIn(300);
    }
    goldidxC = gidxC;
  }

  $('.gallery3 .thumbs li').click(function () {
    gidxC = $(this).index();
    galleryImgC(gidxC);
  });

  //tab4-gallery
  let goldidxD = 0;
  let gidxD = 0;

  function galleryImgD(gidxD) {
    if (goldidxD != gidxD) {
      $('.gallery4 .thumbs li').eq(goldidxD).css({ opacity: 0.3 });
      $('.gallery4 .thumbs li').eq(gidxD).css({ opacity: 1 });
      $('.gallery4 .largeImg li').eq(goldidxD).stop().fadeOut(300);
      $('.gallery4 .largeImg li').eq(gidxD).stop().fadeIn(300);
    }
    goldidxD = gidxD;
  }

  $('.gallery4 .thumbs li').click(function () {
    gidxD = $(this).index();
    galleryImgD(gidxD);
  });

  //tab5-gallery
  let goldidxE = 0;
  let gidxE = 0;

  function galleryImgE(gidxE) {
    if (goldidxE != gidxE) {
      $('.gallery5 .thumbs li').eq(goldidxE).css({ opacity: 0.3 });
      $('.gallery5 .thumbs li').eq(gidxE).css({ opacity: 1 });
      $('.gallery5 .largeImg li').eq(goldidxE).stop().fadeOut(300);
      $('.gallery5 .largeImg li').eq(gidxE).stop().fadeIn(300);
    }
    goldidxE = gidxE;
  }

  $('.gallery5 .thumbs li').click(function () {
    gidxE = $(this).index();
    galleryImgE(gidxE);
  });
});

/* webplan */
$(function () {
  $('#tabs').tabs({
    show: { effect: 'blind', direction: 'right', duration: 300 },
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

$(document).ready(function () {
  $('.tab-a').click(function () {
    $('.tab').removeClass('tab-active');
    $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass('tab-active');
    $('.tab-a').removeClass('active-a');
    $(this).parent().find('.tab-a').addClass('active-a');
  });
});

/* slide */
$(document).ready(function () {
  let $simg = $('.slide ul');
  let $simgli = $('.slide ul li');
  let $snext = $('.slide_side_btn .rbtn');
  let $spre = $('.slide_side_btn .lbtn');
  let simg_w = $simgli.width();
  let simg_n = $simgli.length;
  let soldidx = 0;
  let sindex = 0;

  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex) {
    targetX = -(sindex * simg_w);
    $simg.stop().animate({ left: targetX }, 600);
  }

  //자동함수 생성
  function slideAuto() {
    sindex++;
    if (sindex == simg_n) {
      //simg_n은 이미지개수 5, index는 0,1,2,3,4
      sindex = 0;
    }
    slideImg(sindex);
  }

  auto = setInterval(slideAuto, 4000);

  //좌우버튼
  $spre.click(function () {
    clearInterval(auto);
    sindex--;
    if (sindex < 0) {
      //simg_n은 이미지개수 5, index는 0,1,2,3,4
      sindex = simg_n - 1;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });

  $snext.click(function () {
    clearInterval(auto);
    sindex++;
    if (sindex == simg_n) {
      sindex = 0;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });


});
