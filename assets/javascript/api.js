/**
 * Created by juancarlosnavarrete on 3/4/17.
 */
// var answerSheet = [];
// var movies = ['Speed', 'Die Hard', 'The Matrix', 'Pulp Fiction', 'Fear and Loathing in Las Vegas'];
//
//
// $(document).ready(function() {
//
//     // Preventing the submit button from trying to submit the form
//     // We're optionally using a form so the user may hit Enter to search instead of clicking the button
//
//     for(i = 0; i< movies.length; i++) {
//         // Here we grab the text from the input box
//         var movie = movies[i];
//
//         // Here we construct our URL
//         var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";
//
//         // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
//         // and display it in the div with an id of movie-view
//
//         // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE
//
//         // =================================================================
//
//         // CODE GOES HERE
//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).done(function (response) {
//
//             // Create CODE HERE to Log the queryURL
//             //console.log(queryURL);
//             // Create CODE HERE to log the resulting object
//             //console.log(response);
//             // Create CODE HERE to transfer content to HTML
//             console.log(response.Released);
//
//             answerSheet.push(response);
//             console.log(answerSheet);
//         });
//     }
//
//
// });
//
// function alertOne(){
//
//     return answerSheet;
// }