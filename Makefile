all: index.js style.css

style.css: style.styl
	stylus $<

index.js: index.coffee
	coffee -bc $<

clean:
	rm -rf index.js style.css

.PHONY: clean