let Login = Backbone.View.extend({
    template: _.template($('#login_view').html()),

    render: function () {
        this.$el.html(this.template);
        return this;
    },

    events: {
        'click .btn-login': 'logIn',
        'click .btn-go-register': 'goToRegister'
    },

    goToRegister: function () {
        $('.login-view').remove();
        let register = new Register();
        $('.main-page').append(register.render().$el)
    },

    logIn: function () {
        firebase.auth().signInWithEmailAndPassword($('.login-email').val(), $('.login-password').val()).catch(function(error) {
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
    }

    //events
});

