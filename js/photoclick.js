// $(document).ready(function () {
//     $('.project_photo__modifier').click(function () {
//          var o=$(this);
//         // var url=o.find('img').attr('src');
//         // var html='<a href="#" class="clone"><img src="'+url+'" /></a>'
//         // o.append(html);
//         // o=o.find('.clone');
//         o.animate({width:'200%',height:'200%'});
//         o.click(function () {
//             $(this).remove();
//         });
//     });
// });



  $(document).ready(function() {
  	alert('hello');
        $('.project_photo__modifier').click(function() {
            $('.project_photo__modifier').css('width', '600px');
            // $(this).css('right', '4px');
        });
    });