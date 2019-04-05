$(document).ready(function() {
    $(".icon1").mouseover(function() {
        $(".icon1").text("Home");
        $(".icon1").css("color", "white");
        $(".icon1").css("font-size", ".8em");
        $(".icon1").css("text-transform", "uppercase");
        $(".icon1").css("text-weight", "bold");
        $(".icon1").css("height", "24px");

        $(".icon1").addClass("icons-color");
        $(".icon1").removeClass("fas fa-house-damage")
    });
    $("#link1").mouseover(function() {
        $("#link1").css("text-decoration", "none");
    });
});

$(".icon1").mouseout(function() {
    $(".icon1").addClass("fas fa-house-damage");
    $(".icon1").css("color", "rgb(20, 17, 17)");
    $(".icon1").css("height", "20px");
    $(".icon1").css("font-size", "1.3em");
    $(".icon1").text("");

});

$(document).ready(function() {
    $(".icon2").mouseover(function() {
        $(".icon2").text("About");
        $(".icon2").css("color", "white");
        $(".icon2").css("font-size", ".8em");
        $(".icon2").css("text-transform", "uppercase");
        $(".icon2").css("text-weight", "bold");
        $(".icon2").css("height", "24px");

        $(".icon2").addClass("icons-color");
        $(".icon2").removeClass("fas fa-user-tie")
    });
    $("#link2").mouseover(function() {
        $("#link2").css("text-decoration", "none");
    });
});

$(".icon2").mouseout(function() {
    $(".icon2").addClass("fas fa-user-tie");
    $(".icon2").css("color", "rgb(20, 17, 17)");
    $(".icon2").css("height", "20px");
    $(".icon2").css("font-size", "1.3em");
    $(".icon2").text("");

});

$(document).ready(function() {
    $(".icon3").mouseover(function() {
        $(".icon3").text("My Work");
        $(".icon3").css("color", "white");
        $(".icon3").css("font-size", ".8em");
        $(".icon3").css("text-transform", "uppercase");
        $(".icon3").css("text-weight", "bold");
        $(".icon3").css("height", "24px");

        $(".icon3").addClass("icons-color");
        $(".icon3").removeClass("fas fa-hamsa")
    });
    $("#link3").mouseover(function() {
        $("#link3").css("text-decoration", "none");
    });
});

$(".icon3").mouseout(function() {
    $(".icon3").addClass("fas fa-hamsa");
    $(".icon3").css("color", "rgb(20, 17, 17)");
    $(".icon3").css("height", "20px");
    $(".icon3").css("font-size", "1.3em");
    $(".icon3").text("");

});


$(document).ready(function() {
    $(".icon4").mouseover(function() {
        $(".icon4").text("Contact");
        $(".icon4").css("color", "white");
        $(".icon4").css("font-size", ".8em");
        $(".icon4").css("text-transform", "uppercase");
        $(".icon4").css("text-weight", "bold");
        $(".icon4").css("height", "24px");

        $(".icon4").addClass("icons-color");
        $(".icon4").removeClass("fas fa-address-card")
    });
    $("#link4").mouseover(function() {
        $("#link4").css("text-decoration", "none");
    });

});
$(".icon4").mouseout(function() {
    $(".icon4").addClass("fas fa-address-card");
    $(".icon4").css("color", "rgb(20, 17, 17)");
    $(".icon4").css("height", "20px");
    $(".icon4").css("font-size", "1.3em");
    $(".icon4").text("");
});


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + "ᵥₐₗ " + m + "ₘᵢₙ  " + s + "ₛ";
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
// Contact

$(document).ready(function() {
    $("#mail_form").submit(function() {
        if ($("#a").val() == "") {
            $(".klaida").addClass("alert alert-danger");
            $(".klaida").text("Warning! This alert box could indicate , add NAME");
            return false;
        } else {
            $(".klaida").removeClass("alert alert-danger");
            $(".klaida").text("");
        }
    });
});
$(document).ready(function() {
    $("#mail_form").submit(function() {
        if ($("#b").val() == "") {
            $(".klaida1").addClass("alert alert-danger");
            $(".klaida1").text("Warning! This alert box could indicate ,add GMAIL ");
            return false;
        } else {
            $(".klaida1").removeClass("alert alert-danger");
            $(".klaida1").text("");
        }
    });
});
$(document).ready(function() {
    $("#mail_form").submit(function() {
        if ($("#c").val() == "") {
            $(".klaida2").addClass("alert alert-danger");
            $(".klaida2").text("Warning! This alert box could indicate ,add COMENTAR ");
            return false;
        } else {
            $(".klaida2").removeClass("alert alert-danger");
            $(".klaida2").text("");

        }

    });

});