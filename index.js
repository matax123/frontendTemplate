new WOW().init()

window.onload = function () {
    $("#loading").fadeOut(1000);
    $("body").removeClass("preload");
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    var mobileURL = "https://api.whatsapp.com/send/?phone=56991353540&text=";
    var pcURL = "https://web.whatsapp.com/send?phone=56991353540&text=";

    let myImage = document.getElementById("myImage");
    myImage.style.height = "0px";
    handleResize();
    window.addEventListener('resize', function () {
        handleResize();
    });
    myImage.classList.remove("d-none");
}


function handleResize() {
    let windowWidth = window.innerWidth;
    let myImage = document.getElementById("myImage");
    let img = myImage.querySelector("img");
    let header = document.getElementById("header");
    let firstSection = document.getElementById("firstSection");
    let secondSection = document.getElementById("secondSection");
    let children = Array.from(secondSection.querySelectorAll("div div div div"));

    img.height = header.offsetHeight + firstSection.offsetHeight;

    if (windowWidth < 400) {
        img.height = 0;
        children.forEach(child => {
            console.log(child)
            child.className = "d-flex flex-wrap justify-content-center align-items-center w-100 gap-2"
        });
    }
    else if (windowWidth < 993) {
        img.height = firstSection.offsetHeight;
        img.style.marginTop = header.offsetHeight + "px";
        children.forEach(child => {
            child.className = "d-flex flex-wrap justify-content-center align-items-center gap-3"
        });
    }
    else {
        img.style.marginTop = "0px";
        children.forEach(child => {
            child.className = "d-flex flex-wrap justify-content-center align-items-center gap-3"
        });
    }
}

async function sendEmail(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var to = 'matiasortiz01@outlook.com'

    if (name == "" || email == "" || message == "") return alert("Por favor, complete todos los campos");

    let url = `https://email-sender-9qlw.onrender.com/contact?name=${name}&from=${email}&to=${to}&subject=Nuevo mensaje de contacto&message=${message}`;
    url = `http://localhost:8080/contact?name=${name}&from=${email}&to=${to}&subject=Nuevo mensaje de contacto&message=${message}`
    // url = "https://email-sender-9qlw.onrender.com/contact?name=Nombre&from=Contacto&to=elshadowmatax@gmail.com&subject=asunto&message=mensaje";
    let response = await fetch(url);

    if (response.status == 200) {
        alert("Mensaje enviado correctamente");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
    else alert("Error al enviar el mensaje");
}

document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.querySelector('.navbar-collapse');


    // let button = document.querySelector(".navbar-toggler");
    // if(button.classList.contains("collapsed")){
    //     myImage.style.top = "px";
    // }
    // console.log('Height changed:', entry.contentRect.height);
    // requestAnimationFrame(() => {
    //     myImage.style.top = entry.contentRect.height + "px";
    // });
    // console.log("top", myImage.style.top)


    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        console.log('Navbar is collapsed');
        console.log("height", navbarCollapse.offsetHeight)
        requestAnimationFrame(() => {
            
        });
        myImage.style.top = navbarCollapse.offsetHeight + "px";
            console.log("top", myImage.style.top)
            var _ = myImage.offsetHeight;
    });

    navbarCollapse.addEventListener('shown.bs.collapse', function () {
        console.log('Navbar is expanded');
        console.log("height", navbarCollapse.offsetHeight)
        requestAnimationFrame(() => {
            myImage.style.top = "1000px";
        });
        myImage.style.top = navbarCollapse.offsetHeight + "px";
            console.log("top", myImage.style.top)
            var _ = myImage.offsetHeight;
    });
});