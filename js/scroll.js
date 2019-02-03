  <script>
        $(function(){
        $('.header_scroll').on('click',function(){
          $('html').animate({
            scrollTop: $('._scrollTo').offset().top
          }, 1000);
        });
      });
    </script>



    $('html').scroll(function() {
    if ($(this).scrollTop() > 0) {
$('html').animate({
            scrollTop: $('._scrollTo').offset().top
          }, 1000);
    }
});



