var swiper = new Swiper(".swiper-banner-home", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    	640: {
        	slidesPerView: 2,
    		spaceBetween: 20,
      	},
      	768: {
        	slidesPerView: 3,
        	spaceBetween: 20,
      	},
      	1024: {
        	slidesPerView: 5,
        	spaceBetween: 10,
    	},
    },
});
