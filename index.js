/* jshint node: true */
'use strict';
var path = require('path');
var existsSync = require('exists-sync');
var fastbootTransform = require('fastboot-transform');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-fastboot-fix',


  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
   // this.app.import(app.bowerDirectory + '/slick-carousel/slick/slick.css');

    //this.app.import('vendor/slick/slick.js');
     this.app.import('vendor/isotope/isotope.pkgd.js');
      this.app.import('vendor/bootstrap/bootstrap.js');
          this.app.import('vendor/jscookie/js.cookie.js'); 
    //this.app.import(app.bowerDirectory + '/slick-carousel/slick/slick.js');

   
   // this.app.import(app.bowerDirectory + '/slick-carousel/slick/slick-theme.css');
    //this.app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.ttf', { destDir: 'assets/fonts' });
    //this.app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.svg', { destDir: 'assets/fonts' });
    //this.app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.eot', { destDir: 'assets/fonts' });
   // this.app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.woff', { destDir: 'assets/fonts' });
    //this.app.import(app.bowerDirectory + '/slick-carousel/slick/ajax-loader.gif', { destDir: 'assets' });
  },

  treeForVendor(tree) {
     var trees = [];
 
     if (tree) {
       trees.push(tree);
     }
 
    //var bootstrapDatepickerPath = path.join(this.project.root, this.app.bowerDirectory, 'slick-carousel', 'slick');
   var isotopePkg = path.join(this.project.root, this.app.bowerDirectory, 'isotope', 'dist');
    var bootStrapPath = path.join(this.project.root, this.app.bowerDirectory, 'bootstrap', 'dist','js');
    var jsCookieJsPath = path.join(this.project.root, this.app.bowerDirectory, 'js-cookie', 'src');

     //if (existsSync(bootstrapDatepickerPath)) {
      // var bootstrapTree = fastbootTransform(new Funnel(bootstrapDatepickerPath, {
       //  files: ['slick.js'],
        // destDir: 'slick'
      // }));
 
       //trees.push(bootstrapTree);
     // }
     if (existsSync(isotopePkg)) {
       var isotopePkgTree = fastbootTransform(new Funnel(isotopePkg, {
         files: ['isotope.pkgd.js'],
          destDir: 'isotope'
        }));
 
        trees.push(isotopePkgTree);
       }
         if (existsSync(bootStrapPath)) {
        var bootStrapPathTree = fastbootTransform(new Funnel(bootStrapPath, {
          files: ['bootstrap.js'],
          destDir: 'bootstrap'
        }));
 
        trees.push(bootStrapPathTree);
       }
       if (existsSync(jsCookieJsPath)) {
        var jsCookieJsPathTree = fastbootTransform(new Funnel(jsCookieJsPath, {
         files: ['js.cookie.js'],
          destDir: 'jscookie'
        }));
 
        trees.push(jsCookieJsPathTree);
       }
 
 
     return new MergeTrees(trees);
    }
};
