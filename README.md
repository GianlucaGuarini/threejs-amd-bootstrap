### Why

If your answer to the following question is always __yes__ you are in the right place:

- Do you love [threejs](http://threejs.org/) ? (.. if you are here of course you do!)
- Do you want to build your first threejs application having a clean and well structured scaffold? 
- Are you confused by all the amazing threejs examples build all single html files?

This project provides you all the javascript code needed to start coding any threejs application and it includes also a simple "out of the box" [grunt](http://gruntjs.com/) script to build it making the app ready to be directly uploaded to the live server.

### Project Dependency

#### Build and setup

- Make sure to have [nodejs](http://nodejs.org/) installed on your machine
- [bower](http://bower.io/) is used to manage all the third party client dependencies
- The [grunt-cli](https://github.com/gruntjs/grunt-cli) is only needed to build the project

#### Libraries included

- [threejs](http://threejs.org/) [core dependency]
- [lodash](http://lodash.com/) A utility library delivering consistency, customization, performance, & extras. [core dependency]
- [requirejs](http://requirejs.org/) [development dependency]
- [requirejs-text](https://github.com/requirejs/text) An AMD loader plugin for loading text resources, used in this case to load custom shaders files [development dependency]
- [almond](https://github.com/jrburke/almond) A minimal AMD API implementation for use after optimized builds[production dependency]

### Installation

Use your terminal to browse to the project folder and run the following command to install all the dev dependencies:

```

$ npm install && bower install

```

### How to build

Run the command `$ grunt` using your terminal from the project folder to create the ``dist`` folder where you will find all the files needed for the production environment

### LICENSE

```

The MIT License (MIT)

Copyright (c) 2013 Gianluca Guarini

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

```

