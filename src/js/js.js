$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.content').isotope({
    // options
    itemSelector: 'li'
  });
  //  các nút giới thiệu và tương tác khi click
  $("#dengioithieu").click(function () {
    $('html,body').animate({ scrollTop: $("#gioithieu").offset().top }, 1000);
    return false;
  });


  $("#dentuongtac").click(function () {
    $('html,body').animate({ scrollTop: $("#tuongtac").offset().top }, 1300);
    return false;
  });

  // xử lý toggle cho câu hỏi
  $('.ndtraloi').slideUp();
  $('.cauhoi').click(function(event) {
  /* Act on the event */
    $(this).next().slideToggle();
}); 


  // khai bao su dung wow
  new WOW().init();
});
