var currentDayEl = $("#currentDay");
    var currentDay = moment().format("dddd Do MMMM YYYY");
    currentDayEl.text(currentDay);

var startOfBusiness = moment(09, 'hh');

while (startOfBusiness.hour() < 18) {
    console.log(startOfBusiness.format('hha'));

    startOfBusiness.add(1, 'hours');

    console.log(moment().format("HH").isBefore(startOfBusiness));
}