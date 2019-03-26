firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        $('.login-view').remove();
        

    } else {
        // No user is signed in.
        alert('nay')
    }
});