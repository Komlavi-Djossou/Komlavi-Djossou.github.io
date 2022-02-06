// Week 3 - FIZZ BUZZ -- NOT a part of the class. Just something fun that could show up on a job interview questionaire
// Gary James
// All Sections
// 11 unread reply.33 replies.
// Loop from 0 to 100
// on a new line print
// FIZZ if the loop index is divisible by 3
// BUZZ if the loop index is divisible by 5
// FIZZ BUZZ if the loop index is divisible by both 3 and 5
// just the number if none of the above match



function fizzBuzz() {
    let output = "";
    for (let i = 1; i <= 100; i++) {

        if ((i % 3 == 0) && (i % 5 == 0)) output += "FizzBuzz";
        else if (i % 3 == 0) output += "Fizz";
        else if (i % 5 == 0) output += "Buzz";
        else output += i;
        output += "<br>";
    }    
    document.getElementById("fizzy").innerHTML = output;
}