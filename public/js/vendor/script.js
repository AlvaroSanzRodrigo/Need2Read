$(document).ready(function () {
    start();
});

function start() {
    let login = new Login();
    let menu = new Menu();
    let mainPage = $('.main-page');
    mainPage.append(menu.render().$el);
    mainPage.append(login.render().$el);
    $('.menu-button').css("display", "none");
}

