![](https://dl.dropbox.com/u/30162278/ember-rating.png) 
 
Usage
--------

See [demo](http://kelonye.github.com/#/pages/rating)

javascript

```
App.ApplicationController = Em.Controller.extend({
  rating: 3
});
App.RatingView = require("rating").extend({
  size: 6,
});
```

handlebars

```
{{view App.RatingView ratingBinding="rating"}}
```

License
------------

MIT
