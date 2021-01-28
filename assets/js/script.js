var containerDiv = $(".container");
var currentDayText = document.getElementById("currentDay");

/* VARIABLES */

    // Gets current time as: YYYY-MM-DD T HH:MM:
    var now = moment().format();


    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    let maxRows = hours.length;


// ----------------------------------------------------------------------------------

/* FUNCTIONS */

    var generateRow = function (rowNumber) {

        // Create div, add the classes "rows" and row number as an ID
        var rowDiv = $("<div>");
        rowDiv.addClass("rows");
        rowDiv.attr("id", rowNumber.toString());
        rowDiv.addClass(rowNumber.toString());

        checkCalendarTimes(rowDiv, rowNumber);
        // Add that row to the container, so it shows up on the html
        containerDiv.append(rowDiv);
    };

    var checkCalendarTimes = function (rowDiv, rowNumber) {

        // Get the current hour
        var currentHour = moment().hour();

        // This will be the hourRow to compare to, but only the digits, EX: 9AM -> 9
        var hourRow = parseInt(hours[rowNumber].replace(/\D/g, ""));

        // Converts to military time
        if (hourRow < 9) {
            hourRow += 12;
        };

        // This will make the past hours gray/red/green depending on time
        if (currentHour > hourRow) {
            rowDiv.addClass("past");
        }
        else if (currentHour == hourRow) {
            rowDiv.addClass("present");
        }
        else {
            rowDiv.addClass("future");
        };
    };

    var generateHourColumn = function (rowNumber) {

        // This div is where to append
        var rowID = "." + rowNumber.toString();
        var row = $(rowID);

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
        var rowID = "#" + rowNumber.toString();
        var row = $(rowID);

        // Create div
        var textArea = $("<textarea>");
        textArea.addClass("text");
        textArea.addClass(rowNumber.toString());

        // Add to the page
        row.append(textArea);
    }

    var generateSaveButton = function (rowNumber) {

        // This div is where to append
        var rowID = "#" + rowNumber.toString();
        var row = $(rowID);

        // Create the button, add classes, and add text
        var saveButton = $("<button>");
        saveButton.addClass("saveButton");
        saveButton.addClass(rowNumber.toString());
        saveButton.text("SAVE");

        // Add to the container div
        row.append(saveButton);
    };

    var generateCurrentDay = function () {

        // Use moment.js to get the current day
        var currentDay = moment().format("dddd, MMMM Do");
        currentDayText.innerHTML = currentDay;
    };

// ----------------------------------------------------------------------------------

/* ALL OTHER CODE */

    // Generate the day on the header
    generateCurrentDay();
    // This loop will generate the rows (hours)
    for (let rows = 0; rows < maxRows; rows++) {

        let currentHour = rows;

        // Create the row div
        generateRow(rows);

        // Each column will be appended to the corresponding row div

        // Create hour column
        generateHourColumn(currentHour);
        // Create text area
        generateTextAreaColumn(rows);
        // Create save button
        generateSaveButton(rows);

    };

    // Save the user data

// ----------------------------------------------------------------------------------

