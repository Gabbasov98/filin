let filterItem = document.querySelector(".filter-item")

if(filterItem){
    filterItem.querySelector(".filter__btn").onclick = function () {
        console.log(true)
        filterItem.classList.toggle("_active")
    }
    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(filterItem);

        if ( ! withinBoundaries ) {
            filterItem.classList.remove("_active")
        }
    })
}


function diplomasSlider() {
    var swiper = new Swiper('.diplomas .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
            nextEl: '.diplomas .swiper-button-next',
            prevEl: '.diplomas .swiper-button-prev',
        },
    })
}

diplomasSlider()
