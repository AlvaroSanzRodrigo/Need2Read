$(document).ready(function () {
    let login = new Login();
    $('.main-page').append(login.render().$el);
    $.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter').then(function (data) {
        console.log(data)
    })
});

