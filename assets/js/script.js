// setting variable for the work day scheduler
var daySchedule = [
	{ time: "9 AM", event: "" },
	{ time: "10 AM", event: "" },
	{ time: "11 AM", event: "" },
	{ time: "12 PM", event: "" },
	{ time: "1 PM", event: "" },
	{ time: "2 PM", event: "" },
	{ time: "3 PM", event: "" },
	{ time: "4 PM", event: "" },
	{ time: "5 PM", event: "" }
];
// function for updating the blockColor based on current time of day
var blockColor = function (time) {
    //current time
    var testTime = moment(moment().format("H A"), "H A");
    // block of time being tested and value returned
    var testBlock = moment(time, "H A");

    // change color style of block depending on if statement results
    if (testTime.isBefore(testBlock) === true) {
        return "future";
    } else if (testTime.isAfter(testBlock) === true) {
        return "past";
    } else {
        return "present";
    }
};

// if localStorage is not empty retrieve the saved schedule from localStorage
if (JSON.parse(localStorage.getItem("savedSchedule")) !== null) {
    daySchedule = JSON.parse(localStorage.getItem("savedSchedule"));
};

// set up the rows for each hour in the schedule
daySchedule.forEach(function(hourBlock, index) {

    // variable for the hourBlock label
    let timeLabel = hourBlock.time;

    // variable to set the color of the hourBlock based on blockColor variable above
    let hourColor = blockColor(timeLabel);

    // row setup and formatting of css in scheduler
    let hourFormat =
    '<div class="time-block" id="' +
		index +
		'"><div class="row no-gutters input-group"><div class="col-sm-2 col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
		timeLabel +
		'</div><textarea class="form-control ' +
		hourColor +
		' description">' +
		hourBlock.event +
        '</textarea><div class="col-sm-2 col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save"></i></button></div></div></div>';
    
    // append the hourFormat to the rows based on variable criteria
    $(".container").append(hourFormat);
});
