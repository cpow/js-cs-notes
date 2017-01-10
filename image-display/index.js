// This is an example of a hadmade image slideshow viewer-thing
// used circular doubly linked-list to make it customizable
// (user can add images into the structure as they please)
// whole structure is loaded on window load. makes going next & previous super
// simple.
(function(){
  'use strict';

  var IMAGES = [
    'IMG_0330.jpg',
    'IMG_0366.jpg',
    'IMG_0873.jpg',
    'IMG_1108.jpg',
    'IMG_1588.jpg',
    'house-front.png',
  ];

  var List = function(){
    this._root = null;
    this.currentImage = null;
  };

  List.prototype.add = function(url){
    if (this._root === null){
      this._root = new Object({
        url: url,
        nextImage: null,
        previousImage: null,
      });

      this._root.nextImage = this._root;
      this._root.previousImage = this._root;
      return this._root;
    }

    var currentRoot = this._root;

    (function walkNodes(node){
      if (node.nextImage === currentRoot){
        var newNode = new Object({
          url: url,
          nextImage: currentRoot,
          previousImage: node,
        });

        node.nextImage = newNode;
        currentRoot.previousImage = newNode;
      } else {
        walkNodes(node.nextImage);
      }
    })(this._root);
  };


  var list = new List();

  IMAGES.forEach(function(url){
    list.add(url);
  });

  window.onload = function(){
    var element = document.getElementById("current-image");
    var nextButton = document.getElementById("next-btn");
    var prevButton = document.getElementById("prev-btn");

    var currentNode = list._root;
    element.src = currentNode.url;

    nextButton.addEventListener('click', function(){
      currentNode = currentNode.nextImage;
      element.src = currentNode.url;
    });

    prevButton.addEventListener('click', function(){
      currentNode = currentNode.previousImage;
      element.src = currentNode.url;
    });
  };
})();
