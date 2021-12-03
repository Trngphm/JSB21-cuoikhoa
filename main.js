let scroll_top = document.getElementById("scroll-top")

console.dir(scroll_top)
console.log(scroll_top.innerHTML)
scroll_top.classList.add("icon")

// go to top
scroll_top.addEventListener("click", function() {topFunction()})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    scroll_top.style.display = "block";
  } else {
    scroll_top.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// sign in
// var sign_in = document.getElementById("sign_in");
// sign_in.addEventListener('click', function() {
//   dieuhuong();
// })

function dieuhuong() {
  location.assign("./login/page1/index.html");
}

// đổi hình
// var hinh = document.getElementsByClassName("hinh");
// hinh[0].style.backgroundImage = "url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' stroke='%23707070'%3E%3Cg class='mectrl_stroke' fill='none'%3E%3Ccircle cx='32' cy='32' r='30.25' stroke-width='1.5'/%3E%3Cg transform='matrix(.9 0 0 .9 10.431 10.431)' stroke-width='2'%3E%3Ccircle cx='24.25' cy='18' r='9'/%3E%3Cpath d='M11.2 40a1 1 0 1126.1 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')";

// const cookiesArray = document.cookie.split(";").map((cookie) => cookie.trim());
// const cookiesHashmap = cookiesArray.reduce((all, cookie) => {
//   const [cookieName, value] = cookie.split("=");
//   return {
//     [cookieName]: value,
//     ...all,
//   };
// }, {})
// console.log(cookiesHashmap)

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return '';
}

// có dữ liệu

function ktra_auth() {
  var auth = getCookie("auth");
  if (auth != "") {
    doi_hinh()
  } else {
    var sign_in = document.getElementById("sign_in");
    sign_in.addEventListener('click', function() {
    dieuhuong();
  })
  }
}


function doi_hinh() {
  var chu = document.getElementsByClassName("chu")[0];
  var ten = localStorage.getItem("firstname");
  document.getElementsByName("image")[0].src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' stroke='%23707070'%3E%3Cg class='mectrl_stroke' fill='none'%3E%3Ccircle cx='32' cy='32' r='30.25' stroke-width='1.5'/%3E%3Cg transform='matrix(.9 0 0 .9 10.431 10.431)' stroke-width='2'%3E%3Ccircle cx='24.25' cy='18' r='9'/%3E%3Cpath d='M11.2 40a1 1 0 1126.1 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  chu.innerHTML = ten;
  sign_in.addEventListener('click', function(e) {
    e.preventDefault();
  var submenu = document.getElementById("subnav-content");
  if (submenu.classList == "hien") {
    submenu.classList.remove("hien");
    submenu.classList.add("an");
  }
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } 
     tai_khoan();
   })
}


// click sign_in
function tai_khoan() {
  var tai_khoan = document.getElementById("tai-khoan-mainbody");
  var out = document.getElementsByClassName("out")[0];
  var auth = getCookie("auth");
  if (auth != "") {
    if (tai_khoan.classList == "an") {
      tai_khoan.classList.remove("an");
      tai_khoan.classList.add("hien");
      thong_tin()
    } else {
      tai_khoan.classList.remove("hien");
      tai_khoan.classList.add("an");
    }
  
    out.addEventListener("click", function(e) {
      e.preventDefault();
      dang_xuat();
    })
  }
}



// hiện ẩn submenu
var subnavbtn = document.getElementsByClassName("subnavbtn")[0];
var subnavmenu = document.getElementById("subnav-content");
subnavbtn.addEventListener("click", function(e) {
  e.preventDefault();
  var tai_khoan = document.getElementById("tai-khoan-mainbody");
  if(tai_khoan.classList == "hien") {
    tai_khoan.classList.remove("hien");
    tai_khoan.classList.add("an");
  }
  hien_an_sub();
})


function hien_an_sub() {
  var submenu = document.getElementById("subnav-content");
  if (submenu.classList == "an") {
    submenu.classList.remove("an");
    submenu.classList.add("hien")
  } else {
    submenu.classList.remove("hien");
    submenu.classList.add("an");
  }
}

function thong_tin() {
  var ho = localStorage.getItem("lastname");
  var ten = localStorage.getItem("firstname");
  var email = localStorage.getItem("email");
  var current_primary = document.getElementsByClassName("current-primary")[0];
  var current_secondary = document.getElementsByClassName("current-secondary")[0];
  current_primary.innerHTML = ho + " " + ten;
  current_secondary.innerHTML = email;
}

function dang_xuat() {
  document.cookie = "auth = ; path=/"
  var chu = document.getElementsByClassName("chu")[0];
  var sign_in = document.getElementById("signinbtn");
  document.getElementsByName("image")[0].src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' stroke='%23707070'%3E%3Cg class='mectrl_stroke' stroke-width='1.9' fill='none'%3E%3Ccircle cx='32' cy='32' r='30.25'/%3E%3Cg transform='matrix(1.1 0 0 1.1 8.8 5.61)'%3E%3Ccircle class='mectrl_stroke' cx='20' cy='16' r='7'/%3E%3Cpath class='mectrl_stroke' d='M30 35h10m-5-5v10M30.833 32.09A11 11 0 009 34'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  chu.innerHTML = "Đăng nhập";
  var tai_khoan = document.getElementById("tai-khoan-mainbody");
  tai_khoan.classList.remove("hien");
  tai_khoan.classList.add("an");
  ktra_auth();
}

ktra_auth();


var input_btn = document.getElementById("c-action-btn");
var label_btn = document.getElementsByClassName("c-action-trigger")[0];
var menu = document.getElementById("subnav-content-mobile");
label_btn.addEventListener("click", function(e) {
  e.preventDefault();
  var tai_khoan = document.getElementById("tai-khoan-mainbody");
  if (tai_khoan.classList == "hien") {
    tai_khoan.classList.remove("hien");
    tai_khoan.classList.add("an");
  }
  hien_sub_mobile()
})


function hien_sub_mobile() {
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}






































