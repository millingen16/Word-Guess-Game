var game = ['Tron', 'Die Hard', 'Aliens', 'Goonies']
// I looked at the inspector to see why nothing ran.
// It state my math was undifined.
var choice = math.floor(math.random() * 4);
var answer = game[choice];
var user = answer.lenght;
var display = [user];
var win = user;
var words = answer.split('');
var lettersRemain = 10;
var output = '';
var userChoice = '';


var gamePlay = function() {
    for (var i = 0; i < answer.lenght; i++);
    {
        display[i] = '_ ';
        answer = output + display[i];
    }
document.getElementById('wordgame').innerHTML = output;
}
if ();

window.onload = function () {
    gamePlay();
}

alert(answer);

























