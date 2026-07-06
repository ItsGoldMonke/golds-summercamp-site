document.addEventListener("DOMContentLoaded", function () {
    var timebtn = document.getElementById("timebtn");

    if (!timebtn) return;

    timebtn.addEventListener("click", function () {
        setInterval(function () {
            var mydate = new Date().toLocaleTimeString("en-GB", {
                timeZone: "Europe/Amsterdam",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            timebtn.textContent = "My date: " + mydate;
        }, 1000);
    });
});
