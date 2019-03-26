let BookView = Backbone.View.extend({

    model: new Book(),

    template: _.template($('#book_view').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
});

