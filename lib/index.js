var select = require('ember-select');
var compile = Em.Handlebars.compile;

module.exports = Em.Mixin.create(select, {
  
  classNames: ['component-rating'],
  
  template: compile(''),
  
  active: function() {
    return ~~this.get('value') <= ~~this.get('hovered');
  }.property('hovered', 'selected', 'value'),
  
  didInsertElement: function() {
    this._super();
    this.set('hovered', this.get('selected'));
  },
  
  mouseEnter: function(e) {
    this._super(e);
    this.set('hovered', this.get('value'));
  },
  
  mouseLeave: function(e) {
    this._super(e);
    this.set('hovered', this.get('selected'));
  },
  
  click: function(e){
    this._super(e);
    var val = this.get('value');
    this.setProperties({
      hovered: val,
      selected: val
    });
  },

});
