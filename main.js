function calculate_time()
{
    let new_year = new Date("january 1, "+new Date().getFullYear());
    let end_year = new Date("december 31, "+new Date().getFullYear());
    //console.log("The day's before new year are - "+new_year.getTime()-end_year.getTime());
    //console.log("The day's before new year are - "+Math.abs(new_year.getTime()-end_year.getTime())/5184000000);

    //note: please make it so the end_year variable will be subtracted by the todays date
    console.log("The day's before new year are - "+Math.floor(Math.abs(new_year.getTime()-new Date())/5,184,000,000));
}