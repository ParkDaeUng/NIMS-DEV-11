$(document).ready(function() {
    // nav hide show
  $(".slide-btn").click(function (e) {
    if($(".slide-btn").hasClass("slide-chk")) {
      // 메뉴 확대
      $("nav").animate({
        width: "280px",
        padding: "35px 0",
      }, 500);
      $(".main-wrapper").animate({
        marginLeft: "320px",
      }, 500);
      $(".slide-btn").removeClass("slide-chk");
      $('.user-sub-menu').hide();
      $(".user-info").removeClass("select")
      $(".user-sub-menu").removeClass("min");
      $('.sub-menu').hide();
      $(".sub-menu").removeClass("min");
      $(".menu-btn").removeClass("select")
      $("nav a").removeClass("min");
      $("nav a h1").text("마약류 오남용 실시간 분석·관리");
      $("nav .user-info").removeClass("min");
      $("nav .menu-wrapper").removeClass("min");
      $("nav .btn-wrapper").removeClass("min");
      $("#logo_img").attr("src","../images/logo_title.png");
      $(".slide-btn").text("메뉴축소");
      $(".slide-btn").prepend(`<img src="../images/nav_slide_zoomin.svg" />`)
    } else {
      // 메뉴 축소
      $('.user-sub-menu').hide();
      $(".user-info").removeClass("select")
      $('.sub-menu').hide();
      $(".menu-btn").removeClass("select")
      $("nav").animate({
        width: "122px",
        padding: "35px 0",
      }, 500);
      $(".main-wrapper").animate({
        marginLeft: "162px",
      }, 500);
      $(".slide-btn").addClass("slide-chk");
      $("nav a").addClass("min");
      $("nav a h1").text("마약류 오남용 실시간 분　석 관　리");
      $("nav .user-info").addClass("min");
      $("nav .menu-wrapper").addClass("min");
      $("nav .btn-wrapper").addClass("min");
      $("#logo_img").attr("src","../images/logo_symbol.png");
      $(".slide-btn").text("메뉴확대");
      $(".slide-btn").prepend(`<img src="../images/nav_slide_zoomout.svg" />`)
    };
  });

  // profile drop down
  $('.user-sub-menu').hide();
  $('.user-info').click(function() {
      if($(this).hasClass('min')) {
        $(this).next('.user-sub-menu').addClass('min');
      };
      $(this).toggleClass('select');
      $('.user-info').not(this).removeClass('select');
      $(this).next('.user-sub-menu').slideToggle(0);
      $('.user-info').not(this).next('.user-sub-menu').slideUp(0);
  });

  // nav drop down
  $('.sub-menu').hide();
  $('.menu-btn').click(function(e) {
    if($(this).parent().hasClass('min')) {
      $('.sub-menu').hide();
      $(this).next('.sub-menu').addClass('min');

      let viewY = window.innerHeight;
      let targetY = Math.floor(e.target.getBoundingClientRect().top);
      let popupHeight = $('.sub-menu').outerHeight()

      $('.menu-btn').not(this).next('.sub-menu').removeClass('min');
      $('.menu-btn').not(this).removeClass('select');

      $(this).toggleClass('select');
      if($('.menu-btn').hasClass('select')) {
          if((viewY - popupHeight) > (targetY + 10)) {
              $(this).next('.sub-menu').css({'display':'block', 'top':targetY, 'bottom':''});
          }else {
              $(this).next('.sub-menu').css({'display':'block', 'top':'', 'bottom':viewY - targetY - 50});
          }
      }else {
          $('.sub-menu').css({'display':'none'});
      };
    }else {
      $(this).toggleClass('select');
      $('.menu-btn').not(this).removeClass('select');
      $(this).next('.sub-menu').slideToggle(0);
      $('.menu-btn').not(this).next('.sub-menu').slideUp(0);
    };
  });

  // 셀렉트 박스 클릭
  $('.select-label').click(function () {
    var select_box = $(this).parents('.select-box');
    if(select_box.hasClass('selected')){
        $('.select-box').removeClass('selected');
        $('.select-box').find('.option').hide();
    }else{
        $('.select-box').removeClass('selected');
        $('.select-box').find('.option').hide();
        select_box.addClass('selected');
        select_box.find('.option').show();
    }    
  });
  
  // 셀렉트 옵션 선택
  $('.option-item').click(function () {
    var select_box = $(this).parents('.select-box');
    select_box.removeClass('selected');
    select_box.find('.option').toggle();
    select_box.find('.select-label').text($(this).text());  // 라벨에 선택값 넣기
    select_box.find('#select-input').val($(this).text());  // input에 선택값 넣기
  });

  // 아코디언 메뉴바
  $('.group-header').click(function() {
    const groupItem = $(this).parent();
    const groupContent = groupItem.find('.group-content');
    const otherGroupContents = $('.group-content').not(groupContent);

    groupContent.toggleClass('active');
    otherGroupContents.removeClass('active');
    
    $('.group-header').not(this).removeClass('active');
    $(this).toggleClass('active');

    const childGroup = groupItem.find('.child-group');
    if (childGroup.length > 0) {
      childGroup.find('.child-group-content').removeClass('active');
      childGroup.find('.child-group-header').removeClass('active');
    }
  });


  $('.child-group-header').click(function() {
    const childGroupContent = $(this).siblings('.child-group-content');
    const otherchildGroupContents = $('.child-group-content').not(childGroupContent);

    childGroupContent.toggleClass('active');
    otherchildGroupContents.removeClass('active');
    
    $('.child-group-header').not(this).removeClass('active');
    $(this).toggleClass('active');
  });
});


// drop down Menu
const mainGroups = document.querySelectorAll('.main-group');
const subGroups = document.querySelectorAll('.sub-group');

mainGroups.forEach(mainGroup => {
  mainGroup.addEventListener('click', () => {
    toggleClass(mainGroup, 'clicked');
  });
});

subGroups.forEach(subGroup => {
  subGroup.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleClass(subGroup, 'clicked');
  });
});

function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}