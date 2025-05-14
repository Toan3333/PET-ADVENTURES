import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
	scrollActive: function () {
		const height = $("header").height();
		const isMobile = window.innerWidth <= 768; // tùy breakpoint bạn dùng

		if (isMobile) {
			$("header").removeClass("active"); // luôn xóa class ở mobile
			return;
		}

		if ($(window).scrollTop() > height) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	},

	mobile: function () {
		$(".header-bar").on("click", function () {
			$(this).toggleClass("active");
			$("body").toggleClass("isOpenMenu");

			// Đổi icon
			const $icon = $(this).find("i");
			$icon.toggleClass("fa-bars fa-xmark");
		});

		$('.header-nav-mobile li[class*="menu-item-has-children"] > a').on("click", function (e) {
			e.preventDefault();
			$(this)
				.toggleClass("dropdown-active")
				.next()
				.slideToggle()
				.parent()
				.siblings()
				.find("a")
				.removeClass("dropdown-active")
				.next()
				.slideUp();
		});
	},
	initVariable: function () {
		const $header = $(".header"); // Chắc chắn đúng selector
		if ($header.length) {
			const height = $header.outerHeight(); // outerHeight có padding & border
			document.documentElement.style.setProperty("--header-height", `${height}px`);
		}
	},
	init: function () {
		headerSearch();
		header.scrollActive();
		header.mobile();
		header.initVariable();
	},
};
document.addEventListener(
	"scroll",
	function (e) {
		header.scrollActive();
	},
	true
);
