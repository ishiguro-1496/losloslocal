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

      $(".bank_info_update_btn").click(function(){
      Swal.fire({
        type:"success",
        title: "口座情報を更新しました",
        confirmButtonText: '<a href="account.html" style="color:white; text-decoration:none;">戻る</a>'
      });
    });

      $(".work_upload_btn").click(function(){
      Swal.fire({
        type:"success",
        title: "お題完了証拠を申請しました",
        confirmButtonText: '<a href="work_list.html" style="color:white; text-decoration:none;">一覧へ</a>'
      });
    });

      $(".food_recieve_btn").click(function(){
      Swal.fire({
        title: 'XXptを利用してこのアイテムを受け取りますか？',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'はい',
        cancelButtonText: 'キャンセル'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            '受取申請が完了しました',
            '',
            'success'
            );
        }
      });
    });


      var work_upload_block　= 
                 `
                 <div id="work_upload_block">
                    <div class="form_block">
                      <label class="form_label">完了証拠</label>
                      <div class="form_wd_4">
                        <input id="filebutton" class="input-file" type="file">
                      </div>
                    </div>
                    <div class="form_block">
                     <label class="form_label"></label>
                     <div class="form_wd_2">
                       <button class="work_upload_delete_btn delete_btn btn" id="list_btn">削除</button>
                     </div>
                   </div>
                  </div>`;

       $(document).on('click','.work_upload_add_btn',function(){
           $("#work_upload_area").append(work_upload_block);
       });

       $(document).on("click", ".work_upload_delete_btn", function(){
           $(this).parents("#work_upload_block").remove();
         });





      });
