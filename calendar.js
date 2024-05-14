const purple = "#834D9D"
const orange = "#F2A431"
const green = "#55B849"
const peach = "#DB8457"
const lavender = "#8174B1"
const aquamarine = "#ADD8E6"
const dark_blue = "#000080"
const dark_red = "#800020"
const dark_green = "#228B22"
const lemon = "#F5C108"
const dirty_pink = "#DA3074"
const electric_purple = "#CC00FF"
const deep_orange = "#FF9900"
const teal_blue = "#006666"
const dark_magenta = "#660066"
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        initialDate: '2024-08-21',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay,listWeek'
        },
        googleCalendarApiKey: 'AIzaSyBhK1Z3vN8QWKNdJX5V4c9SWqMn7jyytO4',
        events: {
            googleCalendarId: '3240885f8cde993cfb4753a3d5b563b5a20bc8936448b5291b67fc6396b70659@group.calendar.google.com'
        },
        eventDidMount: function (arg) {

            var event = arg.event;
            if (event.title.includes('Lecture')) {
                event.setProp('backgroundColor', dark_blue);
            } else if (event.title.includes('Talk') | event.title.includes('Tutorial')) {
                event.setProp('backgroundColor', lavender);
            } else if (event.title.includes('Exercise') | event.title.includes('Project Work')) {
                event.setProp('backgroundColor', lemon);
            } else if (event.title.includes('Lunch') | event.title.includes('Dinner')) {
                event.setProp('backgroundColor', dark_green);
            } else if (event.title.includes('Party') | event.title.includes('Day Off')) {
                event.setProp('backgroundColor', dark_magenta);
            } else {
                event.setProp('backgroundColor', peach);
            }
            console.log(event.extendedProps);

            return null;
        }
    });
    calendar.render();

});