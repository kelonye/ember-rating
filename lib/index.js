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
    // this.$().on('mouseenter', this.mouseEnter.bind(this));
    // this.$().on('mouseleave', this.mouseLeave.bind(this));
    this.$().on('click', this.click.bind(this));
  }//,
  // mouseEnter: function() {
  //   var selected = this.get('controller.selected');
  //   this.set('controller._selected', selected);
  //   this.click();
  // },
  // mouseLeave: function() {
  //   var selected = this.get('controller._selected');
  //   this.set('controller.selected', selected);
  // }
});
