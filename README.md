dyn-url
=======

A proof of concept implementation of dynamic page generation with Node.js and Express

Requirements
------------

- node.js
- bower.js


Try it out
----------

```bash
$ git clone https://github.com/orbitbot/dyn-url
$ cd dyn-url
$ npm install
$ bower install
$ node app.js
```

Notes
-----

- the main font is [League Gothic](https://www.theleagueofmoveabletype.com/league-gothic), while Tinet is used in the logo (retrieved from [Font Squirrel](http://www.fontsquirrel.com/fonts/Tinet))
- there's a miniscule chance of a collision when generating a room url, since there's no check in place for this in the code. Handle this if you're using this as a blueprint and/or changing the random url generation scheme to something else, the case is omitted here for brevity

Licence
=======

The MIT License (MIT)

Copyright (c) 2014 Patrik Johnson -- http://github.com/orbitbot

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
