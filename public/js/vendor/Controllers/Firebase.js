firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        $('.menu-button').css("display", "inline");
        $('.login-view').remove();

        //testing
        /*
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
            let searchLibrary = new Library({model: mylibrary});
            $('.main-page').append(searchLibrary.render().$el);
        })
*/

    } else {
        // No user is signed in.

    }
});

let db = firebase.firestore();

function addBook(book) {
    let bookID = book.googleID;
    let jsonPush = [];
    let jsonToAdd = {
        libraries: {
            myBooks:{
                books: {

                }

            }
        }
    };

    console.log(jsonToAdd['libraries']['myBooks']['books'][bookID].push({
        title: book.get('title'),
        img: book.get('img'),
        description: book.get('description'),
        author: book.get('author'),
        publisher: book.get('publisher'),
        publishedDate: book.get('publishedDate'),
        buyLink: book.get('buyLink'),
    }));

    //db.collection("users").doc(firebase.auth().currentUser.uid.toString()).set({}, {merge: true})
}