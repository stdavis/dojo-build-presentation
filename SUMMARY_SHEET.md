##Demystifying the Dojo Build System: Summary Sheet

####[Presentation Slides](https://docs.google.com/presentation/d/1wOYGBwW5VSAo5M8G-sAVuAFh4gVSxQTC1xsPy9XKJPM/edit?usp=sharing)  
Scott Davis - [Utah AGRC](http://gis.utah.gov)  
[@ScottAGRC](https://twitter.com/scottagrc)

#### Transform 
The optimization that the DBS performs on your source files.

#### Tags 
Controls which transform is applied to your source files.

#### Resources 
Your source files.

#### Profile Object
Controls entire build system. Overlapping properties with Dojo Loader config. Use your app config first then fill in gaps with a `*.profile.js` file.

#### Layer
A single file consisting of multiple AMD modules concatenated together.

### Resources
- [Example code from presentation](https://github.com/stdavis/dojo-build-presentation/)
- [Scott's Landmark Blog Post ;)](http://geospatialscott.blogspot.com/2013/09/the-esri-api-for-javascriptdojo-build.html)
- [Colin Snover's dojo boilerplate](https://github.com/csnover/dojo-boilerplate/)
- [Dojo Build reference page](http://dojotoolkit.org/reference-guide/1.9/build/buildSystem.html)
- [Dojo Tutorial](http://dojotoolkit.org/documentation/tutorials/1.9/build/)
- [SitePen Blog Post](http://www.sitepen.com/blog/2012/06/11/dgrid-and-dojo-nano-build/)
