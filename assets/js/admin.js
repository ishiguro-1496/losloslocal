$(function() {
      $('#search_block').hide();
      $('#search_text').on('click',function()
      {
        $('#search_block').slideToggle(400);
        });


      $("#header").load("header.html");
      $("#sidebar").load("sidebar.html");
      $("#footer").load("footer.html");
      $.getScript("../assets/js/sidebar.js", function() {
    });




      $(".register_btn").click(function(){
		  Swal.fire({
		    type:"success",
		    title: "作成が完了しました",
		    confirmButtonText: '<a href="#" style="color:white; text-decoration:none;">一覧へ</a>'
		  });
		});

      $(".update_btn").click(function(){
		  Swal.fire({
		    type:"success",
		    title: "編集が完了しました",
		    confirmButtonText: '<a href="#" style="color:white; text-decoration:none;">一覧へ</a>'
		  });
		});

      $(".approve_btn").click(function(){
      Swal.fire({
        type:"success",
        title: "承認が完了しました",
        confirmButtonText: '<a href="#" style="color:white; text-decoration:none;">一覧へ</a>'
      });
    });

      $(".payment_btn").click(function(){
      Swal.fire({
        type:"success",
        title: "支払いを行いました",
        confirmButtonText: '<a href="#" style="color:white; text-decoration:none;">一覧へ</a>'
      });
    });

       $(".delete_btn").click(function(){
		  Swal.fire({
		    title: '削除してもよろしいですか？',
		    type: 'warning',
		    showCancelButton: true,
		    confirmButtonColor: '#3085d6',
		    cancelButtonColor: '#d33',
		    confirmButtonText: 'OK'
		  }).then((result) => {
		    if (result.value) {
		      Swal.fire(
		        '削除が完了しました',
		        '',
		        'success'
		        );
		    }
		  });
		});


       var i = 2;

       var recommend_user_block　= 
                 `
                 <div id="recommend_user_block">
                   <div class="form_block">
                     <label class="form_label"></label>
                     <div class="form_wd_2">
                       <input type="text" placeholder="ユーザー名" class="form_input">
                     </div>
                   </div>
                   <div class="form_block">
                     <label class="form_label"></label>
                     <div class="form_wd_2">
                       <button class="recommend_user_delete_btn delete_btn btn">削除</button>
                     </div>
                   </div>
                 </div>`;



       $(document).on('click','.recommend_user_add_btn',function(){
           $("#recommend_user_area").append(recommend_user_block);
       });

       $(document).on("click", ".recommend_user_delete_btn", function(){
           $(this).parents("#recommend_user_block").remove();
         });

       var recommend_shop_block　= 
                 `
                 <div id="recommend_shop_block">
                   <div class="form_block">
                     <label class="form_label"></label>
                     <div class="form_wd_2">
                       <input type="text" placeholder="店舗名" class="form_input">
                     </div>
                   </div>
                   <div class="form_block">
                     <label class="form_label"></label>
                     <div class="form_wd_2">
                       <button class="recommend_shop_delete_btn delete_btn btn">削除</button>
                     </div>
                   </div>
                 </div>`;



       $(document).on('click','.recommend_shop_add_btn',function(){
           $("#recommend_shop_area").append(recommend_shop_block);
       });

       $(document).on("click", ".recommend_shop_delete_btn", function(){
           $(this).parents("#recommend_shop_block").remove();
         });


       var card_setting_block　= 
                 `
                 <div id="card_setting_block">
                   <div id="section">
                     <h2>ランクアップカード1</h2>
                     <div class="form_block">
                       <label class="form_label required">ランク名</label>
                       <div class="form_wd_2">
                         <input type="text" placeholder="" class="form_input" required="">
                       </div>
                     </div>
                     <div class="form_block">
                       <label class="form_label required">特典獲得に必要なカード枚数</label>
                       <div class="form_wd_2 input_inline">
                         <input type="number" placeholder="" class="form_input" required=""><span id="unit">枚達成時</span>
                       </div>
                     </div>
                     <div class="form_block">
                       <label class="form_label required">特典内容</label>
                       <div class="form_wd_6">
                         <input type="text" placeholder="" class="form_input" required="">
                       </div>
                     </div>
                     <div class="form_block">
                       <div class="form_wd_4">
                        <button class="card_setting_delete_btn delete_btn btn" >削除</button>
                       </div>
                     </div>
                   </div>
                 </div>`;

       $(document).on('click','.card_setting_add_btn',function(){
           $("#card_setting_area").append(card_setting_block);
       });

       $(document).on("click", ".card_setting_delete_btn", function(){
           $(this).parents("#card_setting_block").remove();
         });




      });
