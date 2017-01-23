function draw(){
  console.log('hello');
  var ctx = document.getElementById('my_canvas').getContext('2d');

  var pinkToggle = true;

  var img = new Image();
  img.src = '4.Ghosts.jpg';


  img.onload = function () {
    ctx.drawImage(img, 0, 0, 1059, 800, 0, 0, 1059, 800);

    var imgToConvert = ctx.getImageData(0, 0, 1059, 800);
    var resetImg = ctx.getImageData(0, 0, 1059, 800);

    var imgData = imgToConvert.data;
    var resetData = resetImg.data;
    var counter = 0;   

    var invert = function() {
      for (var i = 0; i < imgData.length; i += 4) {
      imgData[i]     = 255 - imgData[i];     // red
      imgData[i + 1] = 255 - imgData[i + 1]; // green
      imgData[i + 2] = 255 - imgData[i + 2]; // blue
    }
    ctx.putImageData(imgToConvert, 0, 0);
    console.log("invert")
  };

  var pinkblue = function(){

    // if(pinkToggle){
      for (var i = 0; i < imgData.length; i += 4) {
        imgData[i]     = 255 - imgData[i];     // red
        imgData[i + 1] = 255 - imgData[i + 1]; // green
        imgData[i + 2] = 255 - imgData[i + 2]; // blue
        imgData[i + 4] = 50;
      }
      ctx.putImageData(imgToConvert, 0, 0);
    //   console.log("initial pinkify", imgToConvert, "imgData", imgData)
    //   pinkToggle = false;
    // } else {
    //     for (var i = 0; i < imgData.length; i += 4) {
    //       imgData[i]     = 255 - imgData[i];     // red
    //       imgData[i + 1] = 255 - imgData[i + 1]; // green
    //       imgData[i + 2] = 255 - imgData[i + 2]; // blue
    //       imgData[i + 4] = 255;
    //     }
    //   ctx.putImageData(imgToConvert, 0, 0);
    //   console.log("pinkify reset", imgToConvert, "imgData", imgData)
    //   pinkToggle = true;
    // }


 
  }

  // var blueify = function(){
  //   for (var i = 0; i < imgData.length; i += 4) {
  //      imgData[i]     = 225 - imgData[i];     // red
  //      imgData[i + 1] = 225 - imgData[i + 1]; // green
  //      imgData[i + 2] = imgData[i + 2]; // blue
  //     imgData[i + 4] = 100;
  //   }
  //   ctx.putImageData(imgToConvert, 0, 0);
  // }

  var greenify = function(){
    for (var i = 0; i < imgData.length; i += 4) {
      imgData[i] = 255;
      imgData[i + 1] = 255;
      imgData[i + 2] = 255;
    }
    ctx.putImageData(imgToConvert, 0, 0);

  }

  // var experiment = function(){
  //   for (var i = 0; i < imgData.length; i += 4) {
  //       //imgData[i] = Math.random() * 204 - imgData[i];
  //       imgData[i + 1] = resetData[i +1] - (Math.random() * (255 - 153) + 100);
  //       //imgData[i + 2] = Math.random() * 204 - imgData[i + 2];
  //   }
  //   ctx.putImageData(imgToConvert, 0, 0);

  //   console.log("experiment")
  // }

  var experiment = function(){
    setInterval(function () {
      for (var i = 0; i < imgData.length; i += 4) {
        imgData[i] = Math.random() * 204 - imgData[i];
        imgData[i + 1] = resetData[i +1] - (Math.random() * (255 - 153) + 100);
        imgData[i + 2] = Math.random() * 204 - imgData[i + 2];
      }
            }, 1000);

  }

  var reset = function() {

    console.log("BEFORE: imgData", imgData, "resetData", resetData)
  
    for (var i = 0; i < imgData.length; i += 4) {
      imgData[i] = resetData[i];
      imgData[i + 1] = resetData[i + 1];    
      imgData[i + 2] = resetData[i + 2];
      imgData[i + 4] = resetData[i + 4];
    }
    console.log("AFTER: imgData", imgData, "resetData", resetData)
    
    ctx.putImageData(resetImg, 0, 0);

  };

  var invertbtn = document.getElementById('invert');
  console.log(invertbtn)
  invertbtn.addEventListener('click', invert);

  var btn = document.getElementById('pinkblue');
  btn.addEventListener('click', pinkblue);

  // var btn = document.getElementById('blueify');
  // btn.addEventListener('click', blueify) 

  var btn = document.getElementById('play');
  btn.addEventListener('click', experiment) 

  var btn = document.getElementById('reset');
  btn.addEventListener('click', reset)  


};

}




  // var grayscalebtn = document.getElementById('grayscalebtn');
  // grayscalebtn.addEventListener('click', grayscale);

  window.onload = draw;
