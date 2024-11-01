document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('footer-placeholder').innerHTML='<object type="text/html" data="./components/footer/footer.html"></object>';
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('try-placeholder').innerHTML='<object type="text/html" data="./components/try/try.html"></object>';
});

$(function(){
    $("#includedHeader").load("./components/header/header.html"); 
});
$(function(){
    $("#includedFooter").load("./components/footer/footer.html"); 
});
$(document).ready(function() {
    $('#includedBrands').load('./components/brands/brands.html', function() {
        // After loading, apply the styles and initialize the GSAP scroll functionality
        $.getScript("./components/brands/brands.js");
    });
});


window.onload = function() {
    var headerTwo = document.getElementById('headerTwo');
    var headerOne = document.getElementById('headerOne');
    
    // Set the width of headerOne to be the same as the computed width of headerTwo
    headerOne.style.width = headerTwo.offsetWidth + 'px';
};