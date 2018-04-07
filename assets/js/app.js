$(document).on("ready", function () {

    var config = {
        apiKey: "AIzaSyCoMz1y-KDjBZOy91LlGUcELkkTaKsfz8Y",
        authDomain: "train-schedule-7bac0.firebaseapp.com",
        databaseURL: "https://train-schedule-7bac0.firebaseio.com",
        projectId: "train-schedule-7bac0",
        storageBucket: "train-schedule-7bac0.appspot.com",
        messagingSenderId: "555804970957"
    };
    firebase.initializeApp(config);

    var database = firebase.database.ref();

    var tName ;
    var tDest ;
    var tTime ;
    var tFreq ;
    var nextArriv ;
    var minAway ;

    function addRow() {
        var tableRow = $("<tr>");
        var tableData = $("<td>");

        tableRow.append(tableData);
        $("#results").append(tableRow);
    }

    $("#submit").on("click", function() {
        tName = $("#tName").val();
        tDest = $("#destination").val();
        tTime = $("#time").val();
        tFreq = $("#frequency").val();

        database.ref().push({
            tName: tName,
            tDest: tDest,
            tTime: tTime,
            tFreq: tFreq
        });
    });

});