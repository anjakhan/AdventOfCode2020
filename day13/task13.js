const array = [1000340, 13,'x','x','x','x','x','x',37,'x','x','x','x','x',401,'x','x','x','x','x','x','x','x','x','x','x','x','x',17,'x','x','x','x',19,'x','x','x',23,'x','x','x','x','x',29,'x',613,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',41];

// Part 1

const findBusTime = (array) => {
	const bustimes = [];
	array.forEach(time => !isNaN(time) ? bustimes.push(time) : false);
	const arrival = bustimes[0]

	let earliestPort = 1000400;
	let busID = 0;

	for (i=1; i<bustimes.length; i++) {
		let time = parseInt(arrival/bustimes[i])*bustimes[i] + bustimes[i]
		if (time < earliestPort) {
			earliestPort = time;
			busID = bustimes[i]
		}
	}
	return `BusID times minutes: ${(earliestPort-arrival)*busID}`;
}

findBusTime(array);

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Part 2

const busIDs = [13,'x','x','x','x','x','x',37,'x','x','x','x','x',401,'x','x','x','x','x','x','x','x','x','x','x','x','x',17,'x','x','x','x',19,'x','x','x',23,'x','x','x','x','x',29,'x',613,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',41];

const findSubsequentTimes = (array) => {
    let bus = array.map((x) => ({ID: x, time: x}));
    let run = true;
    let multi = 0;
    let inc = 1;

    while (run) {
        bus[0].time = bus[0].ID*multi;
        let match = true;

        for (let i=1; i<bus.length; i++) {
        	let newTime = 0;
            let j = 1;

            if (isNaN(bus[i].ID) === true) {
                bus[i].time = bus[i-1].time + 1;
				continue;
            }            

            while ((newTime - bus[i-1].time) <= 0) {
                newTime = bus[i].ID * (parseInt(bus[0].time / bus[i].ID) + j++);
            }

            bus[i].time = newTime;

            if (bus[i].multi != null) inc = multi - bus[i].multi;

            bus[i].multi = multi;

            if (bus[i].time != (bus[0].time + array.indexOf(bus[i].ID))) {
                match = false;
                break;
            }
        }

        match ? run = false : run = true;
        multi += inc;
    }
    return bus[0].time;
}

findSubsequentTimes(busIDs);
