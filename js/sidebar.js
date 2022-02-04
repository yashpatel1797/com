const mySideBar = document.querySelector('#my-side-bar');
const sideBarButton = document.querySelector('.nav-opening-button');
const sideBarNavLinks = document.querySelectorAll('.nav-link_item');

const arrayOfClickableItemsToToggleSideBar = [
	sideBarButton,
	...sideBarNavLinks,
];
arrayOfClickableItemsToToggleSideBar.forEach((button) => {
	button.addEventListener('click', () => {
		mySideBar.classList.toggle('sidebar-active');
	});
});

