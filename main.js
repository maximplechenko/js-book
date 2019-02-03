$(document).ready(function () {
  'use strict';

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  const tool = new Tool();

  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(new Point(200, 200));
  text.justification = 'center';
  text.fillColor = 'red';
  text.fontSize = 20;
  text.content = 'hello world';

  tool.onMouseDown = function(event) {
    let c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
  }
 
  

  paper.view.draw();
});
