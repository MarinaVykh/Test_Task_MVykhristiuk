//js

//'use strict';
var tabsParent = document.getElementById('tabs');
var contentParent = document.getElementById('contents');

var tabs = tabsParent.getElementsByClassName('tabs__item');
var contents = contentParent.getElementsByClassName('tabs__content');
var onTabClick = function (e) {
    var target = e.target;
    var current = e.currentTarget;
    var contentName;

    while (target !== current) {
        if (target.className === 'tabs__item') {
            contentName = target.dataset.content;
            activateTab(contentName);
            showContent(contentName);
            return;
        }
        target = target.parentElement;
    }
};

tabsParent.addEventListener('click', onTabClick)

function activateTab(content) {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].dataset.content === content) {
            tabs[i].classList.add('tabs__item_active');
        } else {
            tabs[i].classList.remove('tabs__item_active');
        }
    }
}

function showContent(content) {
    for (var i = 0; i < contents.length; i++) {
        if (contents[i].dataset.content === content) {
            contents[i].classList.add('tabs__content_active');
        } else {
            contents[i].classList.remove('tabs__content_active');
        }
    }
}

// code duplication to be removed
var onCountryChanged = function () {
    var chosenCountryName = document.getElementById("country").value;
    var state = document.getElementById("us_state_block");
    if (chosenCountryName == "United States") {
        state.classList.remove('state_main');
    } else {
        state.classList.add('state_main');
    }
};

var onCountryChanged_2 = function () {
    var chosenCountryName = document.getElementById("country_2").value;
    var state = document.getElementById("us_state_block_2");
    if (chosenCountryName == "United States") {
        state.classList.remove('state_main');
    } else {
        state.classList.add('state_main');
    }
};

function init() {
    var contentName = tabs[0].dataset.content;
    activateTab(contentName);
    showContent(contentName);
}

init();

//jquery

$('.open_popup').click(function () {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay').show();
})


$('.popup .close, .overlay').click(function () {
    $('.overlay, .popup').hide();
        //.remove();
})


// $(document).ready(function(){
//     $(".close").click(function(){
//         setTimeout(
//             function() {
//                 location.reload();
//             }, 1000
//         );
//     });
// });















