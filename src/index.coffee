require 'ember'

RatingItemView = Em.View.extend require('ember-select'),

  template: Em.Handlebars.compile ''

  didInsertElement: ->
    @_super()
    @$().on 'mouseenter', @mouseEnter.bind @
    @$().on 'mouseleave', @mouseLeave.bind @
    @$().on 'click', @click.bind @

  mouseEnter: ->
    @_()

  mouseLeave: ->
    rating = @get 'parentView.actualRating'
    @set 'parentView.rating', rating

  click: ->
    rating = @get 'parentView.rating'
    @set 'parentView.actualRating', rating
    @_()

  _: ->
    content = @get 'content'
    parentViewContent = @get 'parentView.content'
    @set 'parentView.rating', (1 + parentViewContent.indexOf content)
    
module.exports = Em.CollectionView.extend
  
  size: 5
  rating: 2
  
  tagName: 'ul'

  init: ->
    @_super()
    rating = @get 'rating'
    @set 'actualRating', rating
  
  itemViewClass: RatingItemView

  classNames: [
    'component'
    'rating'
  ]

  checked: (->
    rating = @get 'rating'
    if rating is 0
      []
    else
      [0..rating - 1 ]
  ).property 'rating'

  content: (->
    size = @get 'size'
    if size is 0
      []
    else
    [0..size ]
  ).property 'size'
