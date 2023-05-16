const videoPlay = () => {
	// document.body.addEventListener('touchstart', () => {
	const allVideos = document.querySelectorAll('video');
	for (let i = 0; i < allVideos.length; i += 1) {
		allVideos[i].muted = true;
		allVideos[i].play();
	}
	// }, { once: true });
};

export default videoPlay;
