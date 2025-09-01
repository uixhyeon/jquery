// $(function(){
// console.log("시작")
// })
//시작 확인완
$(function () {
  // console.log("시작")
  // 1. .slideDown()매서드 / .slideUp()

  //   $(".menu > li").hover(
  //     function () {
  //       // console.log("hover")
  //       // console.log($(this))
  //       //this는 메뉴안 li임을 알게됨
  //       //300은 0.3초 이다.
  //       $(this).find(".submenu").stop().slideDown(300);
  //     },
  //     //  펑션 하나가 끝남

  //     function () {
  //       $(this).find(".submenu").stop().slideUp(300);
  //     }
  //   );
  //아래에같은걸 쓰면 안되니 일단 위에것 주석

  // 2. fadeIn() / fadeOut()
  //   $(".menu > li").hover(
  //     function () {
  //       $(this).find(".submenu").stop().fadeIn(500);
  //     },
  //     function () {
  //       $(this).find(".submenu").stop().fadeOut(300);
  //     }
  //   );
  // 3. 전체 서브메뉴 영역이 한꺼번에 열림
  // $(".menu").hover(
  //     //이번에는 해당하는거의 서브메뉴가 아니라서 디스 안씀
  // function(){
  // $(".submenu").stop().slideDown(400)

  // },
  // function(){
  // $(".submenu").stop().slideUp(400)

  // },

  // )
  //4.
  //   $(".menu").hover(
  //     //이번에는 해당하는거의 서브메뉴가 아니라서 디스 안씀
  //     function () {
  //       $(".submenu , .header-bg").stop().slideDown(400);
  //     },
  //     function () {
  //       $(".submenu , .header-bg").stop().slideUp(400);
  //     }
  //   );
  //5. classList()
  $(".menu >li").hover(
    function () {
      $(this).find(".submenu").addClass("active");
    },
    function () {
      $(this).find(".submenu").removeClass("active");
    }
  );
});
