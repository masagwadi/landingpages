
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}



// Slick slider for the 
$(".slider").slick({

// normal options...
infinite: true,
slidesToShow: 4,
autoplay: true,
autoplaySpeed: 2000,


// the breakpoints
responsive: [{

    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true
    }

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: false
    }

  }, {

    breakpoint: 480,
    // settings: "unslick" // destroys slick
    settings: {
      slidesToShow: 1,
      dots: false
    }
  }]


});


// Slick slider for the endorsers 
$(".endorsers").slick({
    infinite: true,
    slidesToShow: 2,
    autoplay: false,
    autoplaySpeed: 2000,

    
// the breakpoints
responsive: [{

    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      infinite: true
    }

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: false
    }

  }, {

    breakpoint: 480,
    // settings: "unslick" // destroys slick
    settings: {
      slidesToShow: 1,
      dots: false
    }
  }]

});

// Slick slider for the quotes 
$(".quotes-block").slick({
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,

    // the breakpoints
    responsive: [{
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        dots: false
        }
    },{
        breakpoint: 780,
        settings: {
        slidesToShow: 1,
        dots: false
        }
    }
]

});


// Video play on icon click
$('body').on('click','.video-card__play', function(){
    var video = $(this).siblings( ".video" );
    var image = $(this).siblings( ".video-card__place-holder" );
    var youtubeLink =  $(video).data('src');
    var iframe = video.find('iframe');
    iframe.attr('src', youtubeLink + '?autoplay=1' ).show();
    $(this).delay(200).hide(200);
    image.hide();
});


// Scroll position check

var OriginalformBlockHeight = $('.form-block').outerHeight();

$(window).bind('scroll', function() {
    var scrollTop     = $(window).scrollTop();
    var formTop = $('.form-block-container').prev().offset().top; //get the offset top of the form block
    var heightOfPrev = $('.form-block-container').prev().outerHeight();
    var formBlockHeight = $('.form-block').outerHeight();
    var FormtopPosition = formTop - scrollTop + heightOfPrev + formBlockHeight + 30;
    var prviousElementTopPosition = formTop - scrollTop + heightOfPrev;
    var formfixed = $('.form-block').hasClass('form-top');


    // Get the distace of the form to the right
    var formRight = $(document).width() - ($('.form-block').offset().left + $('.form-block').width());
    if(isMobile){
        formRight = 0;
    }


    // For desktop
    // if(!isMobile){
        if(FormtopPosition < 20 && !formfixed ){
            // fix the form block to the top
            $('.form-block').addClass('form-top').css('right', formRight);
            
            // Collapse the form info but add the border on the form
            $('.form-info').hide().css({'border': '1px solid #d8d8d8'});

            // add the height of the form block as body padding
            $('.form-block-container').css('padding-top',formBlockHeight + 30);

        }else if((prviousElementTopPosition) > -(OriginalformBlockHeight) && formfixed ) {
            // release the form block from the top
            $('.form-block').removeClass('form-top').css({'right': 'auto'});

            // show the form info and hide the border
            $('.form-info').show().css({'border': 'none'});

            // add the height of the form block as body padding
            $('.form-block-container').css('padding-top', 0);
        }
    // }

    
    
    
});


// Show toogle form info

$('body').on('click', '.form-top .form-block__title', function(){
    $('.form-info').slideToggle();
    $(this).toggleClass('open');
    $('.form-top').toggleClass('open');
});




// Progress prototype


    var circle = document.querySelector('circle');
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    
    function setProgress(percent) {
      const offset = circumference - percent / 100 * circumference;
      circle.style.strokeDashoffset = offset;
    }

    setProgress(0);

    $(window).bind('scroll', function() {

        var docHeight = $(document).height();
        var scrollposition = $(document).scrollTop();
        var windowHeight = window.innerHeight;

        var perc = (scrollposition + windowHeight) / docHeight * 100;
        console.log(perc - 16);
        if (perc < 17){
            setProgress(perc/2); 
        }else{
            setProgress(perc);
        }

        if(perc > 95){
            circle.style.fill = `#f1ce00`;
        }else{
            circle.style.fill = `transparent`;
        }
        

    });
