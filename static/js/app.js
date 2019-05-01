// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

// Iterate through each table record
tableData.forEach((entry) => {

    // Append one table row
    var row = tbody.append("tr");
  
    // append one cell for the student and one cell for the grade
    row.append("td").text(entry.datetime);
    row.append("td").text(entry.city);
    row.append("td").text(entry.state);
    row.append("td").text(entry.country);
    row.append("td").text(entry.shape);
    row.append("td").text(entry.durationMinutes);
    row.append("td").text(entry.comments);
  });


function filter_table () {

    // Get Date from input box
    var filter_date = d3.select("#datetime").property('value').trim();
    tbody.selectAll("tr").each( function() {
        var row = d3.select(this);
        var dt = row.select("td").text().trim();
        // hide or display row
        if ( dt == filter_date || filter_date == '' ) {
            row.style('display','');
        } else {
            row.style('display','none');
        }
    });
}


d3.select("#filter-btn").on("click",filter_table);
d3.select("form").on('submit', function () {
    return false;
});
