$(document).ready(function () {

    // On focus and blur of Navbar Search-bar, flag section toggle
    flag_toggle();

    function flag_toggle() {
        $('.form-control').focus(function(e) {
            if($(window).width() < 560) {
                $('.nav-flag-item').css('display', 'none');
            }
        }).blur(function(e){
            if($(window).width() < 560) {
                $('.nav-flag-item').css('display', 'block');
            }
        });
    }

    $(window).resize(function() {
        flag_toggle();
    });

    // Image base 64 formatter
    function base_64(id_1, id_2) {
        document.getElementById(id_1).onchange = function (event) {
            const tgt = event.target || window.event.srcElement;
            const files = tgt.files;

            // FileReader support
            if (FileReader && files && files.length) {
                const fr = new FileReader();
                fr.onload = function () {
                    document.getElementById(id_2).src = fr.result;
                };
                fr.readAsDataURL(files[0]);
            }
        };
    }

    try {
        base_64('real-file-item_1', 'custom-button_1');
        base_64('real-file-item_2', 'custom-button_2');
        base_64('real-file-item_3', 'custom-button_3');
    } catch (e) {
        e.message;
    }

    try {
        base_64('real-file-item_4', 'custom-button_4');
    } catch (e) {
        e.message;
    }

    // Balance page Payment Counter
    const CREDIT_MIN = 0;
    const CREDIT_MAX = 15000;

    const paymentInput = document.querySelector('#payment-input');
    let paymentCounter = document.querySelector('#payment-counter');
    const warning_text = document.querySelector(".warning-text");
    const formatterNumber = new Intl.NumberFormat('en');


    try {
        paymentInput.addEventListener('input', inputHandler);
    } catch (e) {
        e.message;
    }

    function inputHandler(event) {
        let number = '';
        for (const letter of this.value) {
            if ('0123456789'.includes(letter)) {
                number += letter;
            }
        }

        number = parseInt(number);

        if (number < CREDIT_MIN){
            number = CREDIT_MIN;
        } else if (number > CREDIT_MAX){
            number = CREDIT_MAX;
        } else if (isNaN(number)){
            number = 0;
        }

        paymentCounter.innerText = number / 10;
        number = formatterNumber.format(number);
        this.value = number;
    }

    try {
        paymentInput.addEventListener("keydown", warningText);
    } catch (e) {
        e.message;
    }

    function warningText(event) {
        if (event.getModifierState("CapsLock")) {
            warning_text.style.display = "block";
        } else {
            warning_text.style.display = "none";
        }
    }

    // Footer fixed bottom
    footer = $('.footer')
    fixedBottom();

    function fixedBottom(elHeight = 0) {
        if ($("html").height() < $(window).height() - elHeight) {
            footer.addClass('fixed-bottom');
        } else {
            footer.removeClass('fixed-bottom');
        }
    }

    $(window).resize(function() {
        fixedBottom();
    });

    // Writing Comment
    const comments_block = document.querySelector('.news-page-content .comments-block .comments');
    const comment_input = document.querySelector('.input-block .input input');
    const comment = '<div class="d-flex py-2">\n' +
        '                        <div class="user-image mr-2">\n' +
        '                            <img src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" alt="user" class="img">\n' +
        '                        </div>\n' +
        '                        <div class="comment">\n' +
        '                            <p></p>\n' +
        '                        </div>\n' +
        '                    </div>';


    $(comment_input).on('keypress', (event) => {
        if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
            const incorrect_comment = $('.incorrect-comment');

            if ($(comment_input).val().trim() !== '') {
                $(comments_block).append(comment);
                const comment_text = $('.news-page-content .comments-block .comments p')
                comment_text[comment_text.length - 1].append($(comment_input).val());
                comment_input.value = '';

                $('html, body').animate({
                    scrollTop: $(comment_text[comment_text.length - 1]).offset().top - 200
                }, 150);

                incorrect_comment.css('display', 'none');
            } else {
                incorrect_comment.css('display', 'block');
            }
        }
    })


    // FAQ button collapse
    const question = document.querySelectorAll('.question-button');
    const answer = document.querySelectorAll('.question-answer');
    const question_icon = document.querySelectorAll('.question-button i');
    const slideToggleDuration = 240
    const slideUpDuration = 280

    question.forEach((el, i) => {
        el.addEventListener('click', () => {
            $(answer[i]).slideToggle(slideToggleDuration);
            $(question_icon[i]).toggleClass('rotate-icon')
            answer.forEach((elem, j) => {
                if (j !== i) {
                    $(elem).slideUp(slideUpDuration);
                }
            });
            question_icon.forEach((icon, k) => {
                if (k !== i) {
                    $(icon).removeClass('rotate-icon');
                }
            });
            const elHeight = $(answer).height() + $('footer').height()
            fixedBottom(elHeight);
        });
    });

});



