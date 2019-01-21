export function formatTime(timeInSeconds) {
	if (isNaN(timeInSeconds)) {
		return "-:--"
	} else {
		var minutes = Math.floor(timeInSeconds / 60);
		var seconds = Math.floor(timeInSeconds) % 60;
		var padding = "";
		if (seconds < 10) {
			padding = "0";
		}
		return minutes + ":" + padding + seconds;
	}
}