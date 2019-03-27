firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        $('.menu-button').css("display", "inline");
        $('.login-view').remove();
        //testing
        let mylibrary = new BookCollection();
        $.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter').then(function (data) {
            console.log(data);
            data.items.forEach(function (item) {
                console.log(item);
                mylibrary.add(
                    new Book({
                        img: item.volumeInfo.imageLinks.thumbnail,
                        title: item.volumeInfo.title,
                        description: item.volumeInfo.description,
                        author: item.volumeInfo.authors[0],
                    })
                );
            });
        }).then(function () {
            mylibrary.each(function (book) {
                let bookView = new BookView({model: book});
                $('.main-page').append(bookView.render().$el);
            })
        })


    } else {
        // No user is signed in.

    }
});