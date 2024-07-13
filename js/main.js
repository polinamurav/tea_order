$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.card-img-top').magnificPopup({
        type: 'image',
    });

    let popup = $('#popup');
    popup.css('display', 'none');

    // для карусели
    $('.carousel-slide').slick({
        // dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $("#accordion").accordion();

    let phoneInput = $('#inputPhone');
    phoneInput.inputmask({"mask": "(999) 999-9999"});

    let indexInput = $('#inputIndex');
    indexInput.keydown(function (e) {
        let number = parseInt(e.key);
        if (e.keyCode === 46 || e.keyCode === 8) {
            return true;
        }
        if (isNaN(number)) {
            return false;
        }
    });

    let nameInput = $('#inputName');
    let surnameInput = $('#inputSurname');
    let cityInput = $('#inputCity');
    let addressInput = $('#inputAddress');

    let order = $('#order');
    order.click(function () {
        RegistrationValidationForm();
        let popupButton = $('#button-popup');
        popupButton.click(function () {
            $('#popup').css('display', 'none');
            $('#make-order').css('display', 'none');
        });
    });


    function RegistrationValidationForm() {

        if (!nameInput.val()) {
            alert('Заполните имя!');
            return;
        }

        if (!surnameInput.val()) {
            alert('Заполните фамилию!');
            return;
        }

        if (!phoneInput.val()) {
            alert('Заполните телефон!');
            return;
        }

        if (!cityInput.val()) {
            alert('Заполните страну!');
            return;
        }

        if (!indexInput.val()) {
            alert('Заполните индекс!');
            return;
        }

        if (indexInput.val().length !== 6) {
            alert("Индекс должен быть не меньше 6 символов");
            return;
        }

        if (!addressInput.val()) {
            alert('Заполните адрес!');
            return;
        }

        popup.css('display', 'block');
        nameInput.parent().remove();
        surnameInput.parent().remove();
        phoneInput.parent().remove();
        cityInput.parent().remove();
        indexInput.parent().remove();
        addressInput.parent().remove();
        nameInput.remove();
        surnameInput.remove();
        phoneInput.remove();
        cityInput.remove();
        indexInput.remove();
        addressInput.remove();
        order.remove();
        $('#form').css('display', 'none');
    }


    // let menuBurger = $('.menu-burger');
    // let menuClose = $('.menu-close');
    // menuBurger.click(function () {
    //     $('#navbarNav').css('display', 'block');
    //     menuBurger.css('display', 'none');
    //     menuClose.css('display', 'block');
    //     menuClose.click(function () {
    //         $('#navbarNav').css('display', 'none');
    //         menuBurger.css('display', 'block');
    //         menuClose.css('display', 'none');
    //     });
    // });
})