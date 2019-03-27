let Menu = Backbone.View.extend({
    template: _.template($('#menu_view').html()),

    render: function () {
        this.$el.html(this.template);
        return this;
    },

    events: {
        'click .logout': 'logOut',
    },



    logOut: function () {
        firebase.auth().signOut()
            .then(function() {
                $('.collapse').css("display", "none");
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

