var button = document.querySelector("#add-button");
var month = document.querySelector(".month");
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

(function currentMonth () {
    var date = new Date().getMonth();
    month.innerText = months[date];
})();

var handler = function(e) {
    collectAllData();
    updateStatistic();
    updateList();

    e.preventDefault();
}

button.addEventListener("click", handler)