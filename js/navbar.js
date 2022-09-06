$(function () {
  let $navItem = $(".navbar .nav-item");
  $navItem.on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
