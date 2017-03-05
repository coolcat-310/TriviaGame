/**
 * Created by juancarlosnavarrete on 2/28/17.
 */



var DEBUG = false;
var initialTime = 10;
var questionNumber = 1;
var answer = []

var questions = {
    1:{
        question: "What year was the movie Speed release?",
        response: ['10 Jun 1999', '10 Jun 1997', '10 Jun 1994', '10 Jun 2000'],
    },
    2:{
        question: "Who directed the the orginal Die Hard film?",
        response: ['John McTiernan', 'James Cameron', 'Stanley Kubrick', 'William Wyler'],
    },
    3:{
        question: "Which is not an Actor/Actress in the film The Matrix?",
        response: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Omar Patel'],
    },
    4:{
        question: "Who directed the film Pulp Fiction?",
        response: ['John McTiernan', 'James Cameron', 'Quentin Tarantino', 'John Travolta'],
    },
    5:{
        question: "Fear and Loathing in Las Vegas was released in which of the following year?",
        response: ['22 May 1999', '22 May 1998', '22 May 1994', '22 May 2000'],
    }

};


var stopwatch = {

    time: 10,
    isValid: true,

    reset: function() {
        stopwatch.stop();
        stopwatch.time = 10;
        stopwatch.isValid = true;
        var converted = stopwatch.timeConverter(stopwatch.time);
        $(".display").html(converted);
    },
    start: function() {
        // DONE: Use setInterval to start the count here.
        intervalId = setInterval(stopwatch.count, 1000);
    },
    stop: function() {
        // DONE: Use clearInterval to stop the count here.
        clearInterval(intervalId);
    },
    count: function() {
        stopwatch.timeIsUP();
        if(stopwatch.isValid) {
            // decrement time by 1, remember we cant use "this" here.
            stopwatch.time--;
            var converted = stopwatch.timeConverter(stopwatch.time);
            $(".display").html(converted);
        };
    },
    timeConverter: function(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    },
    timeIsUP: function () {
        //console.log(questionNumber);
        if(this.time === 0){
            this.isValid = false;
            this.stop();
            saveAnswer(questionNumber, 9);
            clearButtons();
        }
    }
};


function displayQuestion(num) {
    if(DEBUG) {
        console.log('comparistion of number: ' + num + ' and the lenght: ' + Object.keys(questions).length);
    }
    if(num <= Object.keys(questions).length) {
        stopwatch.start();
        //console.log(questions[num].question);
        $('.question').html(questions[num].question);
        for (i = 0; i < questions[num].response.length; i++) {
            var temp = questions[num].response[i];
            $("#" +i+"").html(temp);
        }
    }else{
        console.log('there are nomore questions, and get the score');
        stopwatch.stop();
        results();

    }


};
function getAnswer(){
    var answerSheet = alertOne();
    var ans = [];
    for(var i = 0; i< answerSheet.length; i++){
        if(i === 0){
            ans.push(answerSheet[i].Released);
            console.log(ans);
        }else if(i === 1){
            ans.push(answerSheet[i].Director);
        }else if(i === 2){
            ans.push('Omar Patel');
        }else if(i === 3){
            ans.push(answerSheet[i].Director);
        }else if(i === 4){
            ans.push(answerSheet[i].Released);
        }
    }
    return ans;
}

function results(){
    // console.log(answerSheet);
    var count = 0;
    var userAns = getAnswer();
    console.log(userAns[0]);
    $(".myTable").removeClass('hide');
    $(".display, .timeText").addClass('hide');
    $(".response").fadeOut('slow');
    $(".question").html('<p>SCORE</p>');
    for(var i = 0; i< Object.keys(questions).length; i++){
        var index = i + 1;
        var id = "userAns" + index.toString();
        var credit = "answer" + index.toString();
        var ans = questions[index].guess;
        $("#" + id + "").html(questions[index].response[ans]);
        $("#" + credit + "").html(userAns[i]);
        if(questions[index].response[ans] === userAns[i]){
            console.log('they match at i:' + i);
            var points = "point" + index.toString();
            $("#" + points + "").html("1");
            count++;
        }
    }
    $("#score").html(count);
}


getAnswer();

function clearButtons(){
    $(".start").fadeOut('slow');

    //console.log('This is in the clearButtons ' + questionNumber );
    displayQuestion(questionNumber);

};

function saveAnswer(qN, answer){
    //only save is time is valid
   // console.log('questionNumber: ' + qN + " and answer: "+ answer);
    if(stopwatch.isValid) {
        questions[qN].guess = answer;
        questionNumber++;
        stopwatch.reset();
    }else if(qN <= Object.keys(questions).length ){
       // console.log('time ran out');
        questions[qN].guess = answer;
        questionNumber++;
        stopwatch.reset();
    }

    // questionNumber++;
    // stopwatch.reset();
    if(DEBUG){
        console.log('saving answer:' + qN);
        console.log(questions);
    }
};



window.onload = function () {
    $(".start").click(function () {

        if(DEBUG){
            console.log('click');
            console.log(Object.keys(questions).length);
        };
        clearButtons();
        $('#0, #1, #2, #3').removeClass("hide");





    });
        //on click on answer
    $("#0, #1, #2, #3").click(function (e) {

            if(DEBUG){
                //which button was pushed
                console.log(e.target.id);
                console.log(questionNumber);
            };
            saveAnswer(questionNumber, e.target.id);
            //erase first options
            clearButtons();

    })

};





