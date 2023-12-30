// siderbar

var root = document.querySelector(":root");

const menuItems = document.querySelectorAll(".menu-item");
// remove active class from all
const changeActiveItem = () => {
	menuItems.forEach((item) => {
		item.classList.remove("active");
	});
};

menuItems.forEach((item) => {
	item.addEventListener("click", () => {
		changeActiveItem();
		item.classList.add("active");

		// show notification popup

		if (item.id != "notification") {
			document.querySelector(".notification-popup").style.display =
				"none";
		} else {
			document.querySelector(".notification-popup").style.display =
				"block";
			document.querySelector(
				"#notification .notification-count",
			).style.display = "none";
		}
	});
});

// messages
// highlight message box
const msgNotification = document.querySelector("#messages-notification");
const msg = document.querySelector(".messages");

msgNotification.addEventListener("click", () => {
	msg.style.boxShadow = "0 0 1rem var(--color-primary)";
	document.querySelector(
		"#messages-notification .notification-count",
	).style.display = "none";

	setTimeout(() => {
		msg.style.boxShadow = "none";
	}, 2000);
});

// messages search

const messages = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

const searchMsg = () => {
	const val = messageSearch.value.toLowerCase();
	messages.forEach((chat) => {
		let name = chat.querySelector("h5").textContent.toLowerCase();
		if (name.indexOf(val) != -1) {
			chat.style.display = "flex";
		} else {
			chat.style.display = "none";
		}
	});
};
messageSearch.addEventListener("keyup", searchMsg);

// ================  THEME ====================

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

const openThemeModal = () => {
	themeModal.style.display = "grid";
};
theme.addEventListener("click", openThemeModal);

const closeThemeModal = (e) => {
	if (e.target.classList.contains("customize-theme"))
		themeModal.style.display = "none";
};
themeModal.addEventListener("click", closeThemeModal);

// ================  THEME - FONTS ====================

const fontSizes = document.querySelectorAll(".choose-size span");

const removeSizeSelector = () => {
	fontSizes.forEach((size) => {
		size.classList.remove("active");
	});
};
fontSizes.forEach((size) => {
	size.addEventListener("click", () => {
		removeSizeSelector();
		let fontSize;
		size.classList.add("active");
		if (size.classList.contains("font-size-1")) {
			fontSize = "10px";
			root.style.setProperty(" --sticky-top-left", "5.4rem");
			root.style.setProperty(" --sticky-top-right", "5.4rem");
		} else if (size.classList.contains("font-size-2")) {
			fontSize = "13px";
			root.style.setProperty(" --sticky-top-left", "5.4rem");
			root.style.setProperty(" --sticky-top-right", "-7rem");
		} else if (size.classList.contains("font-size-3")) {
			fontSize = "16px";
			root.style.setProperty(" --sticky-top-left", "-2rem");
			root.style.setProperty(" --sticky-top-right", "-17rem");
		} else if (size.classList.contains("font-size-4")) {
			fontSize = "19px";
			root.style.setProperty(" --sticky-top-left", "-5rem");
			root.style.setProperty(" --sticky-top-right", "-25rem");
		} else if (size.classList.contains("font-size-5")) {
			fontSize = "22px";
			root.style.setProperty(" --sticky-top-left", "-10rem");
			root.style.setProperty(" --sticky-top-right", "-33rem");
		}
		//change the size of html element
		document.querySelector("html").style.fontSize = fontSize;
	});
});

// ================  THEME - COLORS ====================

const colorPallate = document.querySelectorAll(".choose-color span");
const removeColorSelector = () => {
	colorPallate.forEach((color) => {
		color.classList.remove("active");
	});
};
colorPallate.forEach((color) => {
	color.addEventListener("click", () => {
		let primaryHue;
		removeColorSelector();

		if (color.classList.contains("color-1")) {
			primaryHue = 252;
		} else if (color.classList.contains("color-2")) {
			primaryHue = 52;
		} else if (color.classList.contains("color-3")) {
			primaryHue = 352;
		} else if (color.classList.contains("color-3")) {
			primaryHue = 152;
		} else if (color.classList.contains("color-5")) {
			primaryHue = 202;
		}
		color.classList.add("active");
		root.style.setProperty("--primary-color-hue", primaryHue);
	});
});

// ================  THEME - BACKGROUND COLORS ====================

const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");


let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBg = () =>{
	root.style.setProperty('--light-color-lightness', lightColorLightness)
	root.style.setProperty('--white-color-lightness', whiteColorLightness)
	root.style.setProperty('--dark-color-lightness', darkColorLightness)
}
Bg1.addEventListener("click", () => {

	Bg1.classList.add('active');
	Bg2.classList.remove('active');
	Bg3.classList.remove('active');
	window.location.reload();
});

Bg2.addEventListener("click", () => {
	lightColorLightness = "15%";
	darkColorLightness = "95%";
	whiteColorLightness = "20%";
	Bg2.classList.add('active');
	Bg1.classList.remove('active');
	Bg3.classList.remove('active');
	changeBg()
});

Bg3.addEventListener("click", () => {
	lightColorLightness = "0%";
	darkColorLightness = "95%";
	whiteColorLightness = "10%";
	Bg2.classList.remove('active');
	Bg1.classList.remove('active');
	Bg3.classList.add('active');
	changeBg()
});
