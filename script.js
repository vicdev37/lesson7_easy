let clock = document.getElementById('clock');

function clickclock() {
	let time = new Date();
	let h = (time.getHours() % 12).toString();
	let m = time.getMinutes().toString();
	let s = time.getSeconds().toString();

	if (h.length < 2 ) {
		h = '0' + h;
	}

	if (m.length < 2 ) {
		m = '0' + m;
	}

	if (s.length < 2) {
		s = '0' + s;
	}

	let clockString = h + ':' + m + ":" + s;

	clock.textContent = clockString;
}
clickclock();
setInterval(clickclock, 1000);