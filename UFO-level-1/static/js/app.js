//Part 1
//define tbody and view the data
var tbody = d3.select("tbody");
console.log(data)

//loop thru the data one row at a time and append to the tr element
//use object.entries to log each value on the data.js file
//use d3 to append the table with td element for each
//add value to table
data.forEach(function(ufodata) {
    console.log(ufodata);
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});

//Part two
// Define data "14-Intro-To-JavaScript/3/Activities/08-Ins_Forms/ and 14-Intro-To-JavaScript/3/Activities/09-Par_Form_Filter/Solved/app.js"
// var sightings = data;
// console.log(data)
//select the filter button,form and assign the event handlers
//<input class="form-control" id="datetime" type="text" placeholder="1/11/2011">
var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

//add the "Complete" function to the form
function runEnter(){
    // stop the broswer from refreshing
    d3.event.preventDefault();
    tbody.html("");
    // select the input and retrieve the user value 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    //log to verify value is working
    console.log(inputValue);
    //console.log(tbody);
    //Capture the filtered data set
    var filterSightings = data.filter(tdata => tdata.datetime === inputValue);
    //console log the result
    console.log(filterSightings);

    // select the th element
   // var resultsTable = d3.select("table table-striped");
    //Loop on filtered data and populate the table
    filterSightings.forEach((filterSightings) => {
        var row = tbody.append("tr");
        Object.entries(filterSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    })     
};
