$(document).ready(function() {

    // run the fade() function every 2 seconds
    setInterval(function(){
        fade();
    },2000);


    // toggle between fadeIn and fadeOut with 0.3s fade duration.
    function fade(){
        $("span").fadeToggle(300);
    }

});