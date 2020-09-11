function myfunc(){

    var i = document.getElementById('username1').value;
    var j = $('#username2').val();
    localStorage.setItem('user1', i)
    localStorage.setItem('user2', j)
    return false;
}




