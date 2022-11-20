var drawerClose = document.getElementById("drawerClose").classList;
var drawerHeadClose = document.getElementById("drawerHeadClose").classList;
var buttonOneClose = document.getElementById("buttonOneClose").classList;
var journeyTag = document.getElementById("journeyTag").style;
var sidebarli = document.getElementById("sidebarli").style;
var demotask1 = document.getElementById("demotask1").style;
var pane = document.getElementById("pane").classList;
var btn = document.getElementById("btn").classList;
function closeDrawer() {
  if (drawerClose == "drawer__close") {
    drawerClose.remove("drawer__close");
    drawerHeadClose.remove("drawer__head__close");
    buttonOneClose.remove("button__one__close");
    pane.remove("pane__close");
    drawerClose.add("drawer__open");
    drawerHeadClose.add("drawer__head__open");
    buttonOneClose.add("button__one__open");
    pane.add("pane__open");
    journeyTag.display = "inline-block";
    sidebarli.display = "block";
    demotask1.display = "flex";
    btn.remove("btn__open");
    btn.add("btn__close");
  } else {
    drawerClose.add("drawer__close");
    drawerHeadClose.add("drawer__head__close");
    buttonOneClose.add("button__one__close");
    pane.remove("pane__open");
    drawerClose.remove("drawer__open");
    drawerHeadClose.remove("drawer__head__open");
    buttonOneClose.remove("button__one__open");
    journeyTag.display = "none";
    sidebarli.display = "none";
    demotask1.display = "none";
    btn.add("btn__open");
    btn.remove("btn__close");
    pane.add("pane__close");
  }
}
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");
function myFunction() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more &#8595;";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less &#8593;	";
    moreText.style.display = "inline";
  }
}
