const fs = require('fs');
const momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup;

exports.parseCalc = path => {
	let contents = fs.readFileSync(path);

	let times = contents.toString().match(/@lasted\([0-9hms]+\)/gm);

	let totalTime = times.reduce((acc, item) => {
		const calcDuration = (time) => {
			let breakdown = time.match(/([0-9]+h)?([0-9]+m)?([0-9]+s)/);

			if (!breakdown) return 0;

			let [, hrs, mins, secs] = breakdown.map((segment, index) => {
				if (index == 0) return undefined; // this is the entire matched string, discard it
				return (segment === undefined) ? 0 : parseInt(segment);
			});

			let elapsed = (hrs * 3600) + (mins * 60) + secs;

			return elapsed;
		};

		if (typeof acc === 'string') {
			acc = calcDuration(acc);
		}

		return acc + calcDuration(item);
	});

	let projectTime = require('moment').duration(totalTime, 'seconds').format();

	console.log(`\n\n${projectTime} spent on this project so far.\n\n`);
}