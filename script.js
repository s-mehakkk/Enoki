document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('footer-placeholder').innerHTML='<object type="text/html" data="./components/footer/footer.html"></object>';
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('try-placeholder').innerHTML='<object type="text/html" data="./components/try/try.html"></object>';
});

$(function () {
    $("#includedHeader").load("./components/header/header.html", function () {
        $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: "./components/header/header.css"
        }).appendTo("head");
    });
});

$(function () {
    $("#includedFooter").load("./components/footer/footer.html", function () {
        $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: "./components/footer/footer.css"
        }).appendTo("head");
    });
});

$(document).ready(function () {
    $('#includedBrands').load('./components/brands/brands.html', function () {
        $.getScript("./components/brands/brands.js");
        $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: "./components/brands/brands.css"
        }).appendTo("head");
    });
});

window.onload = function() {
    var headerTwo = document.getElementById('headerTwo');
    var headerOne = document.getElementById('headerOne');
    
    // Set the width of headerOne to be the same as the computed width of headerTwo
    headerOne.style.width = headerTwo.offsetWidth + 'px';
};