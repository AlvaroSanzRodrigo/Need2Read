let BookView = Backbone.View.extend({

    model: new Book(),

    template: _.template($('#book_view').html()),

    events: {
        'click .add-button': 'add',
    },

    add: function() {
      addBook(this.model);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
});

