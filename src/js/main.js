import AOS from "aos";
import lozad from "lozad";
import {
	setBackgroundElement,
	detectCloseElement,
	buttonToTop,
	clickScrollToDiv,
	appendCaptchaASP,
	ToggleItem,
	countUpInit,
} from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";

$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
	buttonToTop();
	ToggleItem();
	countUpInit();

	const $items = $(".destination-6 .item");
	const $contents = $(".destination-6 .content");
	function resetActive() {
		$items.removeClass("active");
		$contents.removeClass("active");
	}

	$items.on("click", function () {
		resetActive();
		const id = $(this).data("id");
		const $content = $(`.content[data-id="${id}"]`);

		if ($content.length > 0) {
			$(this).addClass("active");
			$content.addClass("active");
		}
	});

	if ($items.length > 0 && $contents.length > 0) {
		const $firstItem = $items.first();
		const $firstContent = $contents.first();
		$firstItem.addClass("active");
		$firstContent.addClass("active");
	}
});

// fancyfox popup
document.addEventListener("DOMContentLoaded", function () {
	Fancybox.bind("[data-fancybox]", {
		dragToClose: false,
		backdropClick: false,
		template: {
			closeButton:
				'<button class="fancybox-button fancybox-button--close" title="Close"><i class="fa-duotone fa-solid fa-xmark"></i></button>',
		},
	});
});

setTimeout(() => {
	Fancybox.show([
		{
			src: "#popup-form",
			type: "inline",
			dragToClose: false,
			backdropClick: false,
		},
	]);
}, 15000);

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
