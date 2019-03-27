let Register = Backbone.View.extend({
    template: _.template($('#register_view').html()),

    render: function () {
        this.$el.html(this.template);
        return this;
    },

    events: {
        'click .btn-register': 'register',
        'click .btn-go-login': 'goToLogin'
    },

    //events
    goToLogin: function () {
        $('.register-view').remove();
        let login = new Login();
        $('.main-page').append(login.render().$el)
    },

    register: function () {
        let email = $('.register-email').val();
        let password = $('.register-password').val();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
        }).then(function () {
            alert('hola');

            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
            });
        });

    }

});
