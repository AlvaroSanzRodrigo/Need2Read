let Menu = Backbone.View.extend({
    template: _.template($('#menu_view').html()),

    attributes: {class: 'sticky-top'},


    render: function () {
        this.$el.html(this.template);
        return this;
    },

    events: {
        'click .logout': 'logOut',
        'click .search-button': 'search',
    },

    search: function() {
        let mylibrary = new BookCollection();
        let searchTerms = $('.search-text').val().split(' ').join('+');
        console.log(searchTerms);
        $('.library').remove();
        $.get('https://www.googleapis.com/books/v1/volumes?q=' + searchTerms).then(function (data) {
            data.items.forEach(function (item) {
                console.log(item.volumeInfo.imageLinks.thumbnail);
                console.log(item.volumeInfo.title);
                console.log(item.volumeInfo.description);
                console.log(item.volumeInfo.authors);
                mylibrary.add(
                    new Book({
                        googleID: item.id,
                        img: item.volumeInfo.imageLinks.thumbnail,
                        title: item.volumeInfo.title,
                        description: item.volumeInfo.description,
                        author: item.volumeInfo.authors,
                    })
                );
            });

        }).then(function () {
            let searchLibrary = new Library({model: mylibrary});
            $('.main-page').append(searchLibrary.render().$el);
        })

    },

    logOut: function () {
        firebase.auth().signOut()
            .then(function() {
                $('.collapse').collapse();
                $('.menu-button').css("display", "none");
                 $('.main-page').html('');
                start();
                // Sign-out successful.
            })
            .catch(function(error) {
                // An error happened
            });
    }

    //events
});

