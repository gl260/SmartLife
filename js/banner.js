// Window.outerWidth 获取浏览器窗口外部的宽度
$(function () {
  let currentScreen = "none"; //none big small
  // 1.数据准备
  const banners = [
    {
      id: 0,
      big: "./img/banner0.png",
      small: "./img/banner0_sm.png",
    },
    {
      id: 1,
      big: "./img/banner1.png",
      small: "./img/banner1_sm.png",
    },
    {
      id: 2,
      big: "./img/banner2.png",
      small: "./img/banner2_sm.png",
    },
  ];

  // 2.监听屏幕大小变化
  $(window).on("resize", function () {
    // console.log(this);
    // jQuery中innerWidth() content + padding
    //         outerWidth() content + border + padding
    //         outerWidth(true) content + border + margin + padding
    let winWidth = $(this).outerWidth();
    let isBigScreen = winWidth >= 768;
    console.log(isBigScreen); //true false

    // 节流后,还需要优化 -- 在大屏的时候,就不要调用函数了,只有再切换的时候调用一下
    // randerbanner(banners, isBigScreen);
    if (currentScreen === "none") {
      randerbanner(banners, isBigScreen);
    }
    // 当前是大屏时, !isBigScreen = false,是不会进入这个if语句的
    if (currentScreen === "big" && !isBigScreen) {
      randerbanner(banners, isBigScreen);
    }
    // 当前是小屏时, isBigScreen = false.也不会进入这个if语句
    if (currentScreen === "small" && isBigScreen) {
      randerbanner(banners, isBigScreen);
    }
    // 可以将节流省略掉了
  });
  // 模拟用户操作
  $(window).trigger("resize");

  function randerbanner(banners = [], isBigScreen) {
    currentScreen = isBigScreen ? "big" : "small";

    console.log("被调用了");

    let bannerHtmlString = "";
    banners.forEach((item, index) => {
      // console.log(item, index);
      let bannerUrl = isBigScreen ? item.big : item.small;
      let active = index === 0 ? "active" : "";
      bannerHtmlString =
        bannerHtmlString +
        `
        <div class="carousel-item ${active}" data-interval="3000">
          <img src="${bannerUrl}" class="d-block w-100" alt="..." />
        </div>
        `;
    });
    $(".carousel-inner").empty().append(bannerHtmlString);
  }
});
