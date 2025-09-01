$(function () {
  // console.log("확인")
  //   $("#openBtn").click(function () {
  //     $("#popup").show();
  //   });
  //   $("#closeBtn").click(function () {
  //     $("#popup").hide();
  //   });
//   ////페이드인 아웃
//   $("#openBtn").click(function () {
//     $("#popup").fadeIn(1000);
//   });
//   $("#closeBtn").click(function () {
//     $("#popup").fadeOut(1000);
//   });
// //
 $("#openBtn").click(function () {
    $("#popup").toggle();//열려있음 닫 닫혀잇음 열
  });
    $("#closeBtn").click(function () {
    $("#popup").fadeOut(1000);
  });



  //함수닫
});
