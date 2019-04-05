// then hover mode card change color

$(document).ready(function() {

    $('#mode').hover(function() {
        $('.color_video').css('background-image', 'linear-gradient(black, #4EF89B,black)');
        $('.letter').css('color', 'rgb(35, 61, 35) ');
        $('.letter').css('font-weight', '600 ');
        $('.letter').css('opacity', '1 ');

    }, function() {
        $('.color_video').css('background-image', 'linear-gradient(black, black,black)');
        $('.letter').css('color', ' rgb(187, 173, 173)');
        $('.letter').css('font-weight', '300 ');
        $('.letter').css('opacity', '0.2 ');


    });
});
// then hover github card change color
$(document).ready(function() {

    $('#github').hover(function() {

        $('.color_video').css('background-image', 'linear-gradient(black, #24292e,black) ');
        $('.letter').css('font-weight', '600 ');
        $('.letter').css('opacity', '1 ');
        $('.letter').css('color', '#24292e ');

    }, function() {
        $('.color_video').css('background-image', 'linear-gradient(black, black,black)');
        $('.letter').css('color', ' rgb(187, 173, 173)');
        $('.letter').css('font-weight', '300 ');
        $('.letter').css('opacity', '0.2 ');

    });
});

// then hover linked card change color

$(document).ready(function() {

    $('#linked').hover(function() {
        $('.letter').css('font-weight', '600 ');
        $('.letter').css('opacity', '1 ');
        $('.color_video').css('background-image', 'linear-gradient(black, #3b5998,black)');
        $('.letter').css('color', '#3a4761 ');

    }, function() {
        $('.color_video').css('background-image', 'linear-gradient(black, black,black)');
        $('.letter').css('color', ' rgb(187, 173, 173)');
        $('.letter').css('font-weight', '300 ');
        $('.letter').css('opacity', '0.2 ');

    });
});
// make voice stop and start
$(document).ready(function() {

    let playing = true;

    $('.fa-volume-up').click(function() {
        if (playing == false) {
            document.getElementById('my_audio').play();
            $('.fa-volume-up').css('color', 'white');

            playing = true;
        } else {
            document.getElementById('my_audio').pause();
            $('.fa-volume-up').css('color', 'red');
            playing = false;
        }
    });
});