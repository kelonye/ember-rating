var select = require('ember-select');
var compile = Em.Handlebars.compile;

module.exports = Em.Mixin.create(select, {
  classNames: ['component-rating'],
  template: compile(''),
  active: (function() {
    var content = this.get('content');
    var selected = this.get('controller.selected');
    return ~~content <= ~~selected;
  }).property('controller.selected'),
  didInsertElement: function() {
    this._super();
    this.click();
  },
  mouseEnter: function(e) {
    var selected = this.get('content');
    this.set('controller.selected', selected);
  },
  mouseLeave: function(e) {
    var selected = this.get('controller._selected');
    console.log(selected);
    this.set('controller.selected', selected);
  },
  click: function(e){
    this._super(e);
    var selected = this.get('content');
    this.set('controller._selected', selected);
  }
});
