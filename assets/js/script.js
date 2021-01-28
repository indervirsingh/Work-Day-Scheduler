var containerDiv = $(".container");


// Gets current time as: YYYY-MM-DD T HH:MM:
var now = moment().format();


var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let maxRows = hours.length;


// FUNCTIONS

var generateRow = function (rowNumber) {

    // Create div, add the classes "rows" and row number for later styling use
    var rowDiv = $("<div>");
    rowDiv.addClass("rows");
    rowDiv.addClass(rowNumber.toString());

    // Add that row to the container, so it shows up on the html
    containerDiv.append(rowDiv);
};

var generateHourColumn = function (rowNumber) {

    // This div is where to append
    var rowClassName = "." + rowNumber.toString();
    var row = $(rowClassName);

    // Create div, add classes to it, then add the hour to the text
    var hourDiv = $("<div>");
    hourDiv.addClass("hour");
    hourDiv.addClass(rowNumber.toString());

    // This will be the hour which directly correlates to a specific column
    var hour = hours[rowNumber];

    hourDiv.text(hour);

    // Add that column to the row
    row.append(hourDiv);


};

var generateTextAreaColumn = function (rowNumber) {

    // This div is where to append
    var rowClassName = "." + rowNumber.toString();
    var row = $(rowClassName);

    // Create div
    var textArea = $("<textarea>");
    textArea.addClass("text");
    textArea.addClass(rowNumber.toString());

    // Add to the page
    row.append(textArea);
}

var generateSaveButton = function (rowNumber) {

    // This div is where to append
    var rowClassName = "." + rowNumber.toString();
    var row = $(rowClassName);

    // Create the button, add classes, and add text
    var saveButton = $("<button>");
    saveButton.addClass("saveButton");
    saveButton.addClass(rowNumber.toString());
    saveButton.text("SAVE");

    // Add to the container div
    row.append(saveButton);
};


// This loop will generate the rows (hours)
for (let rows = 0; rows < maxRows; rows++) {
    let currentHour = rows;
    generateRow(rows);
    // This will generate the column (hour - textArea - saveButton)
    for (let columns = 0; columns < 3; columns++) {

        switch (columns) {
            case 0:
                // create the hour
                generateHourColumn(currentHour);
                break;
            case 1:
                // create text area
                generateTextAreaColumn(rows);
                break;
            case 2:
                // create save button
                generateSaveButton(rows);
                break;
        };

    };


};