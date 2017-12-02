var endDate = new Date("Jan 1, 2029 00:00:00").getTime();
var counter = setInterval(function() {
    var now = new Date().getTime();
    var left = endDate - now;

    var days = Math.floor(left / 1000 / 60 / 60 / 24);
    var hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((left % (1000 * 60)) / 1000);

    var container = document.getElementById("countdown");

    container.innerHTML = "<span class=\"days\">" + days + " pv</span> <span>" + hours + " h</span> <span>" + minutes + " min </span><span>" + seconds + " s</span>";
    container.classList.add('show');
}, 1000);