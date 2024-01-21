new WOW().init()

window.onload = function(){
    $("#loading").fadeOut(1000);
    $("body").removeClass("preload");
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    var mobileURL = "https://api.whatsapp.com/send/?phone=56991353540&text=";
    var pcURL = "https://web.whatsapp.com/send?phone=56991353540&text=";

    if (isMobile) {
        document.getElementById("telefono").href = mobileURL;
    } else {
        document.getElementById("telefono").href = pcURL;
    }
}