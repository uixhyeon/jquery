$(function () {
  // console.log("확인")
  //이동하는 애니메이션
  $(".move").click(function () {
    // console.log("click")
    $(".box").animate(
      {
        left: "300px",
      },
      1000
    );
  });
  //크기 변경 애니메이션
  $(".resize").click(function () {
    $(".box").animate(
      {
        width: "200px",
        height: "200px",
      },
      800
    );
  });
  // 보였다가 사라짐
  $(".fade").click(function () {
    $(".box").animate(
      {
        opacity: 0.1,
      },
      500
    );
  });

  //모두 애니메이션 click > hover 가능
  $(".all").click(function () {
    $(".box").animate(
      {
        left: "300px",
        width: "200px",
        height: "200px",
        opacity: 0.1,
        borderRadius :"50%",
      },
      1000
    );
  });
});
