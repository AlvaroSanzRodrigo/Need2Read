let Library = Backbone.View.extend({

    tagName: 'div',
    attributes: {class: 'library'},

    render: function () {
        let self = this;
        console.log(this.$el.html(''));
        _.each(this.model.toArray(), function (book) {
            let bookView = new BookView({model: book});
            self.$el.append(bookView.render().$el);
        });
        return this;
    }
});