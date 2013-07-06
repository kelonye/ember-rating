require('ember');

var RatingItemView = Em.View.extend(require('ember-select'), {
  template: Em.Handlebars.compile(''),
  didInsertElement: function() {
    this._super();
    this.$().on('mouseenter', this.mouseEnter.bind(this));
    this.$().on('mouseleave', this.mouseLeave.bind(this));
    return this.$().on('click', this.click.bind(this));
  },
  mouseEnter: function() {
    return this._();
  },
  mouseLeave: function() {
    var rating = this.get('parentView.actualRating');
    this.set('parentView.rating', rating);
  },
  click: function() {
    var rating = this.get('parentView.rating');
    this.set('parentView.actualRating', rating);
    this._();
  },
  _: function() {
    var content = this.get('content');
    var parentViewContent = this.get('parentView.content');
    this.set('parentView.rating', 1 + parentViewContent.indexOf(content));
  }
});

module.exports = Em.CollectionView.extend({
  size: 5,
  rating: 2,
  tagName: 'ul',
  init: function() {
    this._super();
    var rating = this.get('rating');
    this.set('actualRating', rating);
  },
  itemViewClass: RatingItemView,
  classNames: ['component', 'rating'],
  checked: (function() {
    var rating = this.get('rating');
    if (rating === 0) {
      return [];
    } else {
      return (function() {
        _results = [];
        for (var _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this);
    }
  }).property('rating'),
  content: (function() {
    var size, _i, _results;

    size = this.get('size');
    if (size === 0) {
      [];
    } else {

    }
    return (function() {
      _results = [];
      for (var _i = 0; 0 <= size ? _i <= size : _i >= size; 0 <= size ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this);
  }).property('size')
});
