function loadImage(event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function() {
    var image = new Image();
    image.src = reader.result;
    image.onload = function() {
      displayImage(image);
    };
  };
  reader.readAsDataURL(input.files[0]);
}

function displayImage(image) {
  var svg = document.getElementById("image-frame");
  var svgImage = svg.getElementById("image");
  svgImage.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", image.src);
  changeFrame();
}

function changeFrame() {
  var svg = document.getElementById("image-frame");
  var frameType = document.querySelector('input[name="frame-type"]:checked').value;
  for (var i = 1; i <= 5; i++) {
    var frame = svg.getElementById("frame-" + i);
    if (i == frameType) {
      frame.style.display = "block";
    } else {
      frame.style.display = "none";
    }
  }
  var svgImage = svg.getElementById("image");
  svgImage.setAttribute("preserveAspectRatio", "none");
  var frameWidth = svg.getElementById("frame-" + frameType).getAttribute("width");
  var frameHeight = svg.getElementById("frame-" + frameType).getAttribute("height");
  svgImage.setAttribute("width", frameWidth);
  svgImage.setAttribute("height", frameHeight);
  var imageWidth = svgImage.getBBox().width;
  var imageHeight = svgImage.getBBox().height;
  var frameAspectRatio = frameWidth / frameHeight;
  var imageAspectRatio = imageWidth / imageHeight;
  var scale;
  if (imageAspectRatio > frameAspectRatio) {
    scale = frameWidth / imageWidth;
  } else {
    scale = frameHeight / imageHeight;
  }
  svgImage.setAttribute("transform", "scale(" + scale + ")");
}


