function updateDateTime() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

updateDateTime();

setInterval(updateDateTime, 1000);
