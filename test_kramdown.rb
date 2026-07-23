require 'kramdown'
doc = Kramdown::Document.new("Here is $$1.01_2 = 1.25_{10}$$ test.\n\nAnd $$2^{32}$$ distinct.", input: 'GFM')
puts doc.to_html
