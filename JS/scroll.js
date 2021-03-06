$(document).ready(function () {

    // Scroll to top
    const scrollButton = $('#scroll-to-top');
    const scrollSize = 200;
    let blockScrollButton = true;

    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollSize && blockScrollButton === true) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    });

    scrollButton.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // On focus of input or textarea - hide scroll-button
    function hideOnFocus(element) {
        $(element).focus(function () {
            if ($(window).width() < 1024) {
                blockScrollButton = false;
                $(scrollButton).css('display', 'none');
            }
        }).blur(function () {
            if ($(window).width() < 1024) {
                blockScrollButton = true;
                $(scrollButton).css('display', 'block');
            }
        });
    }

    hideOnFocus('input');
    hideOnFocus('textarea');

    // On click the Comments button from the index
    // page, scroll to the comments on the news page.
    const comments_buttons = document.querySelectorAll('.comment .btn');

    if (JSON.parse(localStorage.getItem("comments_button_click"))) {
        $('html, body').animate({
            scrollTop: $("#elementtoScrollToID").offset().top - 50
        }, 500);
        localStorage.removeItem("comments_button_click");
    }

    if (comments_buttons.length !== 0) {
        for (let i = 0; i < comments_buttons.length; i++) {
            comments_buttons[i].addEventListener('click', saveInLocalStorage);
        }
    }

    function saveInLocalStorage () {
        let obj = {
            scroll: true
        };

        let serialObj = JSON.stringify(obj);
        localStorage.setItem("comments_button_click", serialObj);
    }

    // On Scroll fixed comments block
    let news_feed_container;
    let comments_container;
    let comments_container_div;
    let comments_container_offset_top;
    let news_container;
    let rightMargin;
    let fixedWidth;
    let commentsHeight;

    try {
        news_feed_container = $('.news-feed-container');
        comments_container = $('.lot-of-comments-news-container');
        comments_container_div = $('.comments-news-container');
        comments_container_offset_top = $(comments_container_div).offset().top;
        news_container = $('.news-container')

        refreshInfo();
        if ($(news_container).height() > $(comments_container_div).height()) {
            onScrollFixed();
        }
    } catch (e) {
        e.message;
    }

    function refreshInfo() {
        rightMargin = ($(window).width() - $(news_feed_container).width()) / 2;
        fixedWidth = $(news_feed_container).width() * 25 / 100;
        commentsHeight = $(comments_container_div).height() - $(window).height() + comments_container_offset_top;
    }

    if ($(news_container).height() > $(comments_container_div).height()) {
        $(window).resize(function() {
            refreshInfo();
            onScrollFixed();
        });
    }

    $(window).bind('scroll', function () {
        if ($(news_container).height() > $(comments_container_div).height()) {
            onScrollFixed();
        }
    });

    function onScrollFixed() {
        if ($(window).scrollTop() > commentsHeight) {
            $(comments_container).addClass('on-scroll-fixed');
            $(comments_container).css({
                right: rightMargin,
                width: fixedWidth
            });
        } else {
            $(comments_container).removeClass('on-scroll-fixed');
            $(comments_container).css({
                width: fixedWidth
            });
        }
    }

});
