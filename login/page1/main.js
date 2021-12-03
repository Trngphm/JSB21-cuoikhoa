var next = document.getElementById("next");
    login = document.getElementById("login");
    button_back = document.getElementsByClassName("button-back");
    next_pass = document.getElementById("next2");

button_back[0].addEventListener('click', function(e) {
    e.preventDefault();
    back1();
})

button_back[1].addEventListener('click', function(e) {
    e.preventDefault();
    back2();
})

next.addEventListener('click', function(e) {
    e.preventDefault();
    chuyen_ten();
})



login.addEventListener('click', function(e) {
    e.preventDefault();
    chuyen_xac_nhan();

})

next_pass.addEventListener('click', function(e) {
    e.preventDefault();
    chuyen_pass();
})

function chuyen_ten() {
    var email = document.getElementById("Email");
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // console.log(typeof(email.value));
    // console.log();
    
    if (email.value !== "" && regex.test(email.value)) {
        document.getElementById("phan-1").style.display = 'none';
        document.getElementById("ten").style.display = 'block';
        localStorage.setItem("email", email.value);
    } else {
        document.getElementsByClassName("span")[0].innerHTML = "Vui lòng nhập email"
        add(email);
    }

    document.getElementsByClassName("span_back")[0].innerHTML = email.value;
}

function chuyen_pass() {
    var ho = document.getElementById("lastname");
    var ten = document.getElementById("firstname");
    var email = document.getElementById("Email");

    if (ho.value != "" && ten.value != "") {
        document.getElementById("ten").style.display = "none";
        document.getElementById("phan-2").style.display = "block";
        localStorage.setItem("lastname", ho.value);
        localStorage.setItem("firstname", ten.value);
    } else {
        if (ho.value == "" && ten.value == "") {
            document.getElementsByClassName("span")[1].innerHTML = "Vui lòng nhập họ của bạn";
            document.getElementsByClassName("span")[2].innerHTML = "Vui lòng nhập tên của bạn";
            add(ho);
            add(ten);
        } else {
            if (ho.value == "") {
                document.getElementsByClassName("span")[1].innerHTML = "Vui lòng nhập họ của bạn";
                add(ho);
            } else {
                document.getElementsByClassName("span")[2].innerHTML = "Vui lòng nhập tên của bạn"
                add(ten);
            }
        }
    }

    document.getElementsByClassName("span_back")[1].innerHTML = email.value;
}

function back1() {
    var email = document.getElementById("Email");
    document.getElementById("ten").style.display = 'none';
    document.getElementById("phan-1").style.display = 'block';
    document.getElementsByClassName("span")[0].innerHTML = ""
    remove(email);
}


function back2() {
    var ho = document.getElementById("lastname");
    var ten = document.getElementById("firstname");
    document.getElementById("phan-2").style.display = 'none';
    document.getElementById("ten").style.display = 'block';
    document.getElementsByClassName("span")[1].innerHTML = "";
    document.getElementsByClassName("span")[2].innerHTML = "";
    remove(ho);
    remove(ten);
}

function chuyen_xac_nhan() {
    var pass = document.getElementById("pass");
    var    email = document.getElementById("Email");
    const re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if (pass.value !== "" && re.test(pass.value)) {
        document.getElementById("phan-2").style.display = 'none';
        document.getElementById("phan-3").style.display = 'block';
        localStorage.setItem("pass", pass.value);
    } else {
        document.getElementsByClassName("span")[3].innerHTML = "Vui lòng nhập mật khẩu đúng";
        add(pass);
    }

    document.getElementById("chu_email").innerHTML = email.value;
}


// dữ liệu
var no = document.getElementById("no");
var yes = document.getElementById("yes");


no.addEventListener('click', function(e) {
    e.preventDefault;
    khong_duy_tri();
})

yes.addEventListener('click', function(e) {
    e.preventDefault;
    co_duy_tri();
})

function khong_duy_tri() {
    document.cookie = "auth = false; path=/"
    window.location.replace("/index.html");
}

function co_duy_tri() {
    document.cookie = "auth = true; path=/"
    window.location.replace("/index.html");

}

// cac function
function add(input) {
    input.classList.add("invalid");
}

function remove(input) {
    input.classList.remove("invalid");
}


function input_focus(input) {
    input.onfocus = function() {
        span = input.parentElement.querySelector("span");
        span.innerHTML = "";
        remove(input);
    }
}

function input() {
    var email = document.getElementById("Email");
    var ho = document.getElementById("lastname");
    var ten = document.getElementById("firstname");
    var pass = document.getElementById("pass");
    input_focus(email);
    input_focus(ho);
    input_focus(ten);
    input_focus(pass);
}

input()




















