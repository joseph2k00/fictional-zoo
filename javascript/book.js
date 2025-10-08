const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var currentSelectedDay = "";
var currentSelectedMonthYear = "";
var next6dates

$(document).ready(function(){
    const today = new Date();

    next6dates = getNextSixDays(today);

    populateCardDates(next6dates);

    fillFormDate("date-card-1")
    document.getElementById("month-year-min").textContent  = today.getDate() + " " + (months[today.getMonth()] + " " + today.getFullYear())

    $(".date-card").removeClass("date-card-active");
    $("#date-card-1").addClass("date-card-active");
    $(".triangle").removeClass("fill-white").addClass("fill-transparent");
    $("#date-card-1-triangle").addClass("fill-white");

    $(".date-card").click(function (e){
        var id = $(this).attr('id');
        $(".date-card").removeClass("date-card-active");
        $("#" + id).addClass("date-card-active");
        $(".triangle").removeClass("fill-white").addClass("fill-transparent");
        $("#" + id + "-triangle").addClass("fill-white");
        fillFormDate(id);
    });

    $("#scroll-right").click(function (){
        lastDayInCurrent = next6dates[next6dates.length - 1];
        let nextDay = new Date(lastDayInCurrent.raw.getTime() + (24 * 60 * 60 * 1000));
        next6dates = getNextSixDays(nextDay);
        populateCardDates(next6dates);
        document.getElementById("bd-day-of-month").textContent  = (next6dates[0].raw.getDate());
        document.getElementById("bd-month").textContent  = (months[next6dates[0].raw.getMonth()] + " " + next6dates[0].raw.getFullYear());  
        $(".date-card").removeClass("date-card-active");
        $("#date-card-1").addClass("date-card-active");  
        $(".triangle").removeClass("fill-white").addClass("fill-transparent");
        $("#date-card-1-triangle").addClass("fill-white");
    });

    $("#scroll-left").click(function (){
        lastDayInCurrent = next6dates[0];
        let nextDay = new Date(lastDayInCurrent.raw.getTime() - (24 * 60 * 60 * 1000) * 6);
        next6dates = getNextSixDays(nextDay);
        populateCardDates(next6dates);
        document.getElementById("bd-day-of-month").textContent  = (next6dates[0].raw.getDate());
        document.getElementById("bd-month").textContent  = (months[next6dates[0].raw.getMonth()] + " " + next6dates[0].raw.getFullYear());  
        $(".date-card").removeClass("date-card-active");
        $("#date-card-1").addClass("date-card-active");  
        $(".triangle").removeClass("fill-white").addClass("fill-transparent");
        $("#date-card-1-triangle").addClass("fill-white");
    });

    $(".numberBox").change(function () {
        recalcalculateBill();
    });

    $(".numberBox").keyup(function () {
        recalcalculateBill();
    });

    $(".change-ticket-btn").click(function () {
        recalcalculateBill();
    });
});

function getNextSixDays(date) {
    if (date.getTime() <= (new Date()).getTime()) {
        date = new Date()
    }
    let days = [];

    for (let i = 0; i < 6; i++) {
        let nextDay = new Date(date.getTime() + (24 * 60 * 60 * 1000) * i);

        days.push({
            index: (i+1),
            raw: nextDay,
            day: nextDay.getDate(),
            month: months[nextDay.getMonth()],
            year: nextDay.getFullYear()
        });
    }

    return days;
}

function populateCardDates(dates) {
    dates.forEach(date => {
        const parent = document.getElementById("date-card-" + date.index);
        const day_of_month = parent.querySelector(".day-of-month");
        day_of_month.textContent = date.day;
        const month_yr = parent.querySelector(".month-year");
        month_yr.textContent = date.month + " " + date.year;
    });

    firstDate = dates[0].raw;
    const today = new Date();

    if (
        firstDate.getDate() == today.getDate() &&
        firstDate.getMonth() == today.getMonth() &&
        firstDate.getFullYear() == today.getFullYear()
    ) {
        $("#scroll-left").attr("disabled", true).addClass("disabled-btn");
    } else {
        $("#scroll-left").attr("disabled", false).addClass("enabled-btn");
    }
}

function fillFormDate(id) {
    const parent = document.getElementById(id);
    currentSelectedDay = parent.querySelector(".day-of-month").textContent;
    currentSelectedMonthYear = parent.querySelector(".month-year").textContent;
    document.getElementById("bd-day-of-month").textContent  = (currentSelectedDay)
    document.getElementById("bd-month").textContent  = (currentSelectedMonthYear)
}


function openDatePicker() {
    const dateInput = document.getElementById("datepicker");

    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;

    dateInput.min = minDate; // Set min date to today
    dateInput.showPicker(); // Opens the date picker
}

function handleDateChange() {
    const selectedDate = new Date(document.getElementById("datepicker").value);
    console.log(selectedDate);

    next6dates = getNextSixDays(selectedDate);
    populateCardDates(next6dates);
    $(".triangle").removeClass("fill-white").addClass("fill-transparent");
    $("#date-card-1-triangle").addClass("fill-white");
    document.getElementById("bd-day-of-month").textContent  = (selectedDate.getDate())
    document.getElementById("bd-month").textContent  = (months[selectedDate.getMonth()] + " " + selectedDate.getFullYear())
    document.getElementById("bd-month").textContent  = (months[selectedDate.getMonth()] + " " + selectedDate.getFullYear())
    document.getElementById("month-year-min").textContent  = selectedDate.getDate() + " " + (months[selectedDate.getMonth()] + " " + selectedDate.getFullYear())
    $(".date-card").removeClass("date-card-active");
    $("#date-card-1").addClass("date-card-active");
}

function changeValue(step, input) {
    input = input.parentElement.querySelector(".numberBox");
    let newValue = parseInt(input.value) + step;
    
    if (newValue >= input.min && newValue <= input.max) {
        input.value = newValue;
    }
}

function recalcalculateBill() {
    var adults = 150;
    var child = 80;
    var student = 120;

    inputs = document.getElementsByClassName("numberBox");

    var adults_total = adults * inputs[0].value;
    var child_total = child * inputs[1].value;
    var student_total = student * inputs[2].value;

    document.getElementById("total-regular").textContent = adults_total;
    document.getElementById("total-child").textContent = child_total;
    document.getElementById("total-student").textContent = student_total;
    document.getElementById("total").textContent = adults_total + child_total + student_total;
}