$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyCoMz1y-KDjBZOy91LlGUcELkkTaKsfz8Y",
        authDomain: "train-schedule-7bac0.firebaseapp.com",
        databaseURL: "https://train-schedule-7bac0.firebaseio.com",
        projectId: "train-schedule-7bac0",
        storageBucket: "train-schedule-7bac0.appspot.com",
        messagingSenderId: "555804970957"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var tName = "";
    var tDest = "";
    var tTime = "";
    var tFreq = "";
    var nextArriv = "";
    var minAway = "";

    function addRow(name, dest, freq, time) {
        var tableRow = $("<tr>");

        var addTrain = $("<td>").text(name);
        var addDest = $("<td>").text(dest);
        var addTime = $("<td>").text(time);
        var addFreq = $("<td>").text(freq);
        
        tableRow.append(addTrain);
        tableRow.append(addDest);
        tableRow.append(addFreq);
        tableRow.append(addTime);

        $("#results").append(tableRow);
    }

    $("#submit").on("click", function (event) {
        event.preventDefault();
        tName = $("#tName").val().trim();
        tDest = $("#destination").val().trim();
        tTime = $("#time").val().trim();
        tFreq = $("#frequency").val().trim();

        database.ref().push({
            tName: tName,
            tDest: tDest,
            tTime: tTime,
            tFreq: tFreq
        });
    });

    database.ref().on("child_added", function(childSnapshot) {
        var dtName = childSnapshot.val().tName;
        var dtDest = childSnapshot.val().tDest;
        var dtTime = childSnapshot.val().tTime;
        var dtFreq = childSnapshot.val().tFreq;

        addRow(dtName, dtDest, dtFreq);

    });

});