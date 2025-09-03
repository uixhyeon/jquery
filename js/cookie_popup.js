// $(function(){
//     // if($.cookie())
//     let chk = $("#chk")
//     $(".closeBtn").click(function(){
//         // console.log(chk.is(":checked")) // 체크하고 확인 참 /그냥확인 거짓
// if(chk.is(":checked")){
// $.cookie("popup" , "none" , {expires :3 , path: "/"})

// }
// $(".notice_wrap").fadeOut("fast")

//     })
// })
// // 위에것 쿠키저장 안해놓음
$(function(){
    // if($.cookie())
    let chk = $("#chk")
    if($.cookie("popup") !== "none"){
        $(".notice_wrap").fadeIn()
    }
    $(".closeBtn").click(function(){
        // console.log(chk.is(":checked"));
        
        if(chk.is(":checked")){
            $.cookie("popup" , "none" , { expires: 3, path: "/" })
        }// 쿠키에 대한
        $(".notice_wrap").fadeOut("fast")
    })
})