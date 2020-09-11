var player1 = localStorage.getItem('user1');
var player2 = localStorage.getItem('user2');

var playersTurn = 'blue'

if (playersTurn=='blue'){
    $('#turns').html('Player ' + player1 + " it is your turn!")
} else {
    $('#turns').html('Player ' + player2 + " it is your turn!")
}


function switchturns(){
    if (playersTurn == 'red'){
        playersTurn = 'blue'
    } else {
        playersTurn = 'red'
    }
    if (playersTurn=='blue'){
        $('#turns').html('Player ' + player1 + " it is your turn!")
    } else {
        $('#turns').html('Player ' + player2 + " it is your turn!")
    }
}


var row1 = $(".row0")
var col1 = $('.col0')

for (let j = 0; j < row1.length; j++){
    row1.eq(j).on('click', function(){
        for (let i = col1.length; i >= 0; i--){
            var col = $('.col'+j)
            if (col.eq(i).css('background-color') == "rgb(128, 128, 128)"){
                col.eq(i).css('background-color', playersTurn)
                switchturns()
                findFoursVertically()
                findFoursHorizontally()
                break;
            }
        }
    })
}


function findFoursVertically(){

    for (let l = 0; l < col1.length+1; l++){
        let blues = 0
        let reds = 0

        let colCheck = $('.col'+l)
        for (var c = 0; c < colCheck.length+1; c++){
            if (colCheck.eq(c).css('background-color') == 'rgb(0, 0, 255)'){
                blues += 1
                reds = 0
            } else if (colCheck.eq(c).css('background-color') == 'rgb(255, 0, 0)'){
                reds += 1
                blues = 0
            }
            if (blues >= 4){
                alert(player1 + " you're the winner!")
            } else if (reds >= 4){
                alert(player2 + " you're the winner!")
            }
        }
    }
}


function findFoursHorizontally(){

    for (let l = 0; l < col1.length + 1; l++){
        let blues = 0
        let reds = 0

        let rowCheck = $('.row'+l)
        for (let c = 0; c < rowCheck.length+1; c++){
            if (rowCheck.eq(c).css('background-color') == 'rgb(0, 0, 255)'){
                blues += 1
                reds = 0
            } else if (rowCheck.eq(c).css('background-color') == 'rgb(255, 0, 0)'){
                reds += 1
                blues = 0
            } else if (rowCheck.eq(c).css('background-color') == "rgb(128, 128, 128)"){
                reds = 0
                blues = 0
            }

            if (blues >= 4){
                alert('Blue wins!')
            } else if (reds >= 4){
                alert('Red wins!')
            }
        }
    }
}