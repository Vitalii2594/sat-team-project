$(document).ready(function () {
  $(".sale-small a").click(function (e) {
    e.preventDefault();
    $(".sale-big img").hide().attr("src", $(this).attr("href")).fadeIn(1000);
  });
});
