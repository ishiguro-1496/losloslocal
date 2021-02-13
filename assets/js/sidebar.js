$(function() {



      $(window).on('load resize', function(){
        var winW = $(window).width();
        var devW = 760;
        if (winW <= devW) {
        $('#sidebar').hide();
        } else {
         $('#sidebar').show();
        }
      });


      $('.menu_btn').on('click',function()
      {
        $('#sidebar').stop(true).animate({'width': 'toggle'});
        });


      $('.batsu').on('click',function()
      {
        $('#sidebar').hide();
        });


      $('#treeview a').on('click',function()
      {
        $(this).next('ul').slideToggle(400)
        });
});