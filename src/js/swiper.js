import Swiper from "swiper";
import {
	Autoplay,
	EffectFade,
	Navigation,
	EffectCoverflow,
	Pagination,
	Scrollbar,
	EffectCreative,
} from "swiper/modules";
/**
 * @param swiperInit
 */
export function swiperInit() {
	swiperBanner();
	swiperHomeBannerMobile();
	swiperHome4();
	swiperHome5();
	swiperHome6();
	swiperHome9();
	swiperHome10();
}
function swiperBanner() {
	const swiper = new Swiper(".swiper-home-banner", {
		slidesPerView: 1,
		modules: [Autoplay, Navigation],
		loop: true,
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false,
		// },
		speed: 1500,
		navigation: {
			nextEl: ".home-1 .btn-next",
			prevEl: ".home-1 .btn-prev",
		},
	});
}

function swiperHomeBannerMobile() {
	const swiperHomeBannerMobile = new Swiper(".swiper-home-banner-mobile", {
		modules: [Autoplay, Navigation],
		slidesPerView: 1,
		speed: 1200,
		rewind: true,

		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 3500,
		},
		navigation: {
			nextEl: ".home-1-mobile .btn-next",
			prevEl: ".home-1-mobile .btn-prev",
		},
	});
}

// export function swiperHome4() {
// 	const swiperContainer = document.querySelector(".home-4 .swiper");
// 	if (!swiperContainer) return;

// 	const isDesktop = window.innerWidth >= 1200;

// 	const swiper = new Swiper(swiperContainer, {
// 		modules: [Autoplay, EffectCoverflow, Pagination],
// 		effect: isDesktop ? "coverflow" : "slide",
// 		coverflowEffect: isDesktop
// 			? {
// 					rotate: 0,
// 					stretch: 30,
// 					depth: 80,
// 					modifier: 5,
// 					slideShadows: false,
// 			  }
// 			: undefined,
// 		slidesPerView: isDesktop ? 1.05 : 1,
// 		spaceBetween: isDesktop ? 0 : 24,
// 		speed: 1500,
// 		rewind: true,
// 		pagination: {
// 			el: ".home-4 .pagination",
// 			clickable: true,
// 		},
// 		// autoplay: {
// 		// 	delay: 3500,
// 		// },
// 	});

// 	const titles = document.querySelectorAll(".home-4-item .title");
// 	const slides = document.querySelectorAll(".home-4 .swiper-slide");

// 	if (titles.length && slides.length) {
// 		titles[0].classList.add("active");

// 		titles.forEach((title) => {
// 			title.addEventListener("click", () => {
// 				const targetId = title.getAttribute("data-id");
// 				const targetIndex = [...slides].findIndex(
// 					(slide) => slide.getAttribute("data-id") === targetId
// 				);

// 				if (targetIndex !== -1) {
// 					swiper.slideTo(targetIndex);
// 					titles.forEach((el) => el.classList.remove("active"));
// 					title.classList.add("active");
// 				}
// 			});
// 		});

// 		swiper.on("slideChange", () => {
// 			const currentSlide = slides[swiper.realIndex];
// 			if (!currentSlide) return;

// 			const currentId = currentSlide.getAttribute("data-id");

// 			titles.forEach((title) => {
// 				title.classList.toggle("active", title.getAttribute("data-id") === currentId);
// 			});
// 		});
// 	}
// }

export function swiperHome4() {
	const swiperContainer = document.querySelector(".home-4 .swiper");
	if (!swiperContainer) return;

	const isDesktop = window.innerWidth >= 1200;

	const swiper = new Swiper(swiperContainer, {
		modules: [Autoplay, EffectCreative, Pagination],
		effect: isDesktop ? "creative" : "slide",
		creativeEffect: isDesktop
			? {
					prev: {
						translate: ["-100%", 0, -500],
						opacity: 0.3,
						scale: 0.9,
					},
					next: {
						translate: ["100%", 0, -500],
						opacity: 0.3,
						scale: 0.9,
					},
			  }
			: undefined,
		slidesPerView: 1,
		spaceBetween: isDesktop ? 0 : 24,
		speed: 1500,
		rewind: true,
		pagination: {
			el: ".home-4 .pagination",
			clickable: true,
		},
		// autoplay: {
		// 	delay: 3500,
		// },
	});

	const titles = document.querySelectorAll(".home-4-item .title");
	const slides = document.querySelectorAll(".home-4 .swiper-slide");

	if (titles.length && slides.length) {
		titles[0].classList.add("active");

		titles.forEach((title) => {
			title.addEventListener("click", () => {
				const targetId = title.getAttribute("data-id");
				const targetIndex = [...slides].findIndex(
					(slide) => slide.getAttribute("data-id") === targetId
				);

				if (targetIndex !== -1) {
					swiper.slideTo(targetIndex);
					titles.forEach((el) => el.classList.remove("active"));
					title.classList.add("active");
				}
			});
		});

		swiper.on("slideChange", () => {
			const currentSlide = slides[swiper.realIndex];
			if (!currentSlide) return;

			const currentId = currentSlide.getAttribute("data-id");

			titles.forEach((title) => {
				title.classList.toggle("active", title.getAttribute("data-id") === currentId);
			});
		});
	}
}

function swiperHome5() {
	const swiper = new Swiper(".home-5 .swiper", {
		modules: [Autoplay],
		slidesPerView: 2,
		spaceBetween: 16,
		speed: 1500,
		rewind: true,
		autoplay: {
			delay: 4500,
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
	});
}

function swiperHome6() {
	const swiper = new Swiper(".home-6 .swiper", {
		modules: [Autoplay, Navigation],
		slidesPerView: 2,
		spaceBetween: 16,
		speed: 1200,
		rewind: true,
		navigation: {
			nextEl: ".home-6 .btn-next",
			prevEl: ".home-6 .btn-prev",
		},
		autoplay: {
			delay: 4500,
		},

		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 24,
			},

			1200: {
				slidesPerView: 8,
				spaceBetween: 24,
			},
		},
	});
}

function swiperHome9() {
	const swiper = new Swiper(".home-9 .swiper", {
		modules: [Autoplay, Navigation],
		slidesPerView: 2,
		spaceBetween: 16,
		speed: 1500,
		rewind: true,
		navigation: {
			nextEl: ".home-9 .btn-next",
			prevEl: ".home-9 .btn-prev",
		},
		autoplay: {
			delay: 3500,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
	});
}

function swiperHome10() {
	const swiper = new Swiper(".home-10 .swiper", {
		modules: [Autoplay, Navigation, Scrollbar],
		slidesPerView: 1,
		spaceBetween: 16,
		scrollbar: {
			el: ".home-10 .swiper-scrollbar",
			hide: false,
			draggable: true,
			dragSize: "auto", // hoặc bỏ luôn, mặc định là auto
		},
		speed: 1500,
		rewind: true,
		navigation: {
			nextEl: ".home-10 .btn-next",
			prevEl: ".home-10 .btn-prev",
		},

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
		},
		autoplay: {
			delay: 4500,
		},
	});
}
