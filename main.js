function calculate_time()
{
    let new_year = new Date("january 1, "+new Date().getFullYear());
    let end_year = new Date("december 31, "+new Date().getFullYear());
    var years_before = Math.floor(Math.abs(end_year.getTime()-new Date())/86400000);
    console.log("The day's before new year are - "+years_before);
    document.getElementById("daysleft").innerHTML = "Days Until New Year - "+years_before;
}