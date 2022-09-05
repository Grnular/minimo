$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
        },
    });

    $('.icon').on('click', function () {
        $(this).closest('.menu').toggleClass('menu-open');
    });
    $('.lodeMore').on('click', function () {
        $('.loadContent').css("display", "block");
    });
});


// const content = document.getElementById("content")
// const show = document.getElementById("showContent")
// show.addEventListener("click", () => {
//     content.style.display = "block"
// });

