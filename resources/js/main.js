$(document).ready(function () {
  //STECKY MENU
  $(".js--services-section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });

  //mix it up
  var mixer = mixitup(".container");

  //SMOTH SCROL  FOR IE/ EDGE/ SAFARI
  $("a").onaction("click", function (event) {
    if (this.hash !== "") {
      event.prevent.default();

      var hash = this.hash;

      $("html, body").action(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
