$(function() {

      $("#header").load("header.html");
      // $("#sidebar").load("sidebar.html");
      $("#glb_nav").load("glb_nav.html");
      $("#footer").load("footer.html");
      $.getScript("../assets/js/sidebar.js", function() {
    });

      $(".apply_btn").click(function(){
      Swal.fire({
        type:"success",
        title: "申請が完了しました",
        confirmButtonText: '<a href="food_list.html" style="color:white; text-decoration:none;">一覧へ</a>'
      });
    });


      $(".update_btn").click(function(){
      Swal.fire({
        type:"success",
        title: "編集が完了しました",
        confirmButtonText: '<a href="#" style="color:white; text-decoration:none;">一覧へ</a>'
      });
    });

      $(".pw_update_btn").click(function(){
      Swal.fire({
        type:"success",
        title: "パスワードを更新しました",
        confirmButtonText: '<a href="account.html" style="color:white; text-decoration:none;">戻る</a>'
      });
    });

      $(".profile_update_btn").click(function(){
      Swal.fire({
        type:"success",
        title: "プロフィールを更新しました",
        confirmButtonText: '<a href="account.html" style="color:white; text-decoration:none;">戻る</a>'
      });
    });





      });
