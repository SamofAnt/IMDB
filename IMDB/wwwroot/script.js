$('.movie__average').each(function(){
    if(parseFloat($(this).text()) > 8)
    $(this).addClass("movie__average--green");
    else if(parseFloat($(this).text()) > 6)
    $(this).addClass("movie__average--orange");
    else
    $(this).addClass("movie__average--red");
});
    $(document).ready(function () {
    var autoplaySlider = $('#autoWidth').lightSlider({
    autoWidth: true,
    auto: true,
    pause: 5000,
    loop: true,
    speed: 2000,
    pauseOnHover: true,

});
});