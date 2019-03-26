let Book = Backbone.Model.extend({
    defaults: {
        title: 'undefined title',
        img: 'undefined image',
        description: 'undefined description',
        author: 'undefined authors',
        publisher: 'undefined publisher',
        publishedDate: 'undefined published date',
        categories: ['undefined', 'categories'],
        buyLink: 'undefined buy link'
    }
});