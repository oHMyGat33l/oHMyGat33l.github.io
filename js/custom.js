
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);


function checkStuff() {
  var email = document.form1.email;
  var password = document.form1.password;
  var msg = document.getElementById("msg");

  if (email.value == "") {
    msg.style.display = "block";
    msg.innerHTML = "Please enter your email";
    email.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }

  if (password.value == "") {
    msg.innerHTML = "Please enter your password";
    password.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value)) {
    msg.innerHTML = "Please enter a valid email";
    email.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }
  if (email.value == "admin@gmail.com" && password.value == "admin") {
    location.href = "index.html";
    alert("Berhasil login");
    return false;
  } else {
    msg.innerHTML = "";
    alert("Email atau password salah");
  }
}

const myAudio = document.getElementById("audio");
const btn = document.getElementById("btn-playback");
const btnIcon = document.querySelector("#btn-playback > i");
const btnText = document.getElementById("btn-text");

const toggleMusic = () => {
  const dataPlay = btn.getAttribute("data-play");

  if (dataPlay === "false") {
    btn.setAttribute("data-play", "true");
    myAudio.play();
    btnIcon.classList.remove("fa-play");
    btnIcon.classList.add("fa-pause");
    btnText.innerText = "Stop";
  } else {
    btn.setAttribute("data-play", "false");
    myAudio.pause();
    btnIcon.classList.remove("fa-pause");
    btnIcon.classList.add("fa-play");
    btnText.innerText = "Play";
  }
};

myAudio.onpause = () => {
  btn.setAttribute("data-play", "false");
  myAudio.pause();
  btnIcon.classList.remove("fa-pause");
  btnIcon.classList.add("fa-play");
  btnText.innerText = "Play";
};
myAudio.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
    btnText.innerText = "Stop";
  },
  false
);