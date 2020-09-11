function addRedirect(){
    var button = $('#init-btn')
    button.on('click', function() {
        myfunc();
        window.location.href = "./game.html"
    })
}


function myfunc(){

    var i = document.getElementById('username1').value;
    var j = $('#username2').val();
    localStorage.setItem('user1', i)
    localStorage.setItem('user2', j)
    return false;
}

addRedirect()

