



function drawButtons(){
  console.log('hello');
  var ctx = document.getElementById('my_canvas').getContext('2d');

  var pinkToggle = true;

  var img = new Image();
  img.src = '4.Ghosts.jpg';


  img.onload = function () {
    ctx.drawImage(img, 0, 0, 1059, 800, 0, 0, 1059, 800);

    var imgToConvert = ctx.getImageData(0, 0, 1059, 800);
    var resetImg = ctx.getImageData(0, 0, 1059, 800);
    console.log(imgToConvert);

    var imgData = imgToConvert.data;
    var resetData = resetImg.data;
    var counter = 0;   

    var width = 4236;
    var height = 800

    var invert = function() {
      for (var i = 0; i < imgData.length; i += 4) {
      imgData[i]     = 255 - imgData[i];     // red
      imgData[i + 1] = 255 - imgData[i + 1]; // green
      imgData[i + 2] = 255 - imgData[i + 2]; // blue
    }
      ctx.putImageData(imgToConvert, 0, 0);
      console.log("invert")
    };

  var pinkify = function(){
    for (var i = 0; i < imgData.length; i += 4) {
        imgData[i]     = 255 - imgData[i];     // red
        imgData[i + 1] = 255 - imgData[i + 1]; // green
        imgData[i + 2] = 255 - imgData[i + 2]; // blue
        imgData[i + 4] = 50;
      }
      ctx.putImageData(imgToConvert, 0, 0);

    }

    var highlighter = function(){
      for (var i = 0; i < imgData.length; i += 4) {
       imgData[i]     = 225 - imgData[i];     // red
       imgData[i + 1] = 225 - imgData[i + 1]; // green
       imgData[i + 2] = imgData[i + 2]; // blue
       imgData[i + 4] = 100;
     }
     ctx.putImageData(imgToConvert, 0, 0);
   }

   var snow = function(){
    var backwards = 0;
    var forwards = 0;
    for(var i = 0; i < imgData.length; i += 1059){
      for(var x=0; x<20; x++){
        imgData[i + forwards + x] = 255;
      }
      forwards += 20;
    }

    ctx.putImageData(imgToConvert, 0, 0)    

  }

  var sand = function(){
    for (var i = 0; i < imgData.length; i += 4) {
      //console.log("BEFORE", imgData[i])
      imgData[i] = 255 - Math.random() * imgData[i];
      //console.log("AFTER", imgData[i])
      // imgData[i + 1] = resetData[i +1] - (Math.random() * (255 - 153) + 100);
      // imgData[i + 2] = resetData[i + 2] - Math.random() * 204;
      imgData[i+1] = 255 - Math.random() * imgData[i+1];
      imgData[i+2] = 255 - Math.random() * imgData[i+2];
    }
    ctx.putImageData(imgToConvert, 0, 0);

    console.log("experiment")
  }

  //Math.random() * (Max - Min) + Min
  //resetData[i]  === num btwn 0-255

  var coogi = function(){
    var backwards = 0;
    var forwards = 0;
    for(var i = 0; i < imgData.length; i += width){
      for(var x=0; x<60; x+=4){
        imgData[i + forwards + x] = 255 - imgData[i + forwards + x];
        imgData[i + forwards + x + 1] = 255 - imgData[i + forwards + x + 1];
        imgData[i + forwards + x + 2] = 255 - imgData[i + forwards + x + 2];
      }
      forwards += 40;
    }

    for(var i = imgData.length; i > 0; i -= width){
      for(var x=0; x<60; x+=4){
        imgData[i + backwards + x] = 255 - imgData[i + backwards + x];
        imgData[i + backwards + x + 1] = 255 - imgData[i + backwards + x + 1];
        imgData[i + backwards + x + 2] = 255 - imgData[i + backwards + x + 2];
      }
      backwards += 40;
    }


    for(var i = 0; i < imgData.length; i += (width/12-1)){
      for(var x=0; x<200; x+=4){
        //console.log('hi')
        imgData[i + x] = 255 - imgData[i + x];
        imgData[i + x + 1] = 255 - imgData[i + x + 1];
        imgData[i + x + 2] = 255 - imgData[i + x + 2];
      }
    }


    ctx.putImageData(imgToConvert, 0, 0)  

  }

  var stripes = function(){

    for(var i = imgData.length; i > 0; i -= (width/3 -1)){
      for(var x=0; x<width; x+=32){
        //console.log('hi')
        imgData[i + x] = 255 - imgData[i + x];
        imgData[i + x + 1] = 255 - imgData[i + x + 1];
        imgData[i + x + 2] = 255 - imgData[i + x + 2];
      }
    }
    console.log("in F")

    ctx.putImageData(imgToConvert, 0, 0)  

  }

  var g = function(){
    for (var i = 0; i < imgData.length; i += 4) {
      imgData[i] = Math.random() * 255 + Math.random() * resetData[i];
      imgData[i+1] = Math.random() * 255 + Math.random() * resetData[i+1];
      imgData[i+2] = Math.random() * 255 - Math.random() * resetData[i+2];
    }
    ctx.putImageData(imgToConvert, 0, 0);

  }


  var lisaFrank = function(){

    for(var i = 0; i < imgData.length; i += width ){
      for(var x=0; x<width; x+=4){
        imgData[i + x] = 204 - imgData[i + x];
        imgData[i + x + 1] = imgData[i + x + 1];
        imgData[i + x + 2] = 204 - imgData[i + x + 2];
      }
    }

    ctx.putImageData(imgToConvert, 0, 0)  

  }


var autoplay;
var on = true;

  var static = function(){
  
  if(on){
    autoplay = setInterval(g, 200)
    on = false;
    } else{
      clearInterval(autoplay)
      reset();
      on = true;
    }
   
  }


  var invert = function() {
      for (var i = 0; i < imgData.length; i += 4) {
      imgData[i]     = 255 - imgData[i];     // red
      imgData[i + 1] = 255 - imgData[i + 1]; // green
      imgData[i + 2] = 255 - imgData[i + 2]; // blue
    }
    ctx.putImageData(imgToConvert, 0, 0);
  };



  var reset = function() {

    for (var i = 0; i < imgData.length; i += 4) {
      imgData[i] = resetData[i];
      imgData[i + 1] = resetData[i + 1];    
      imgData[i + 2] = resetData[i + 2];
      imgData[i + 4] = resetData[i + 4];
    }
    
    ctx.putImageData(resetImg, 0, 0);
    clearInterval(autoplay);

  };

  var invertbtn = document.getElementById('pinkify');
  console.log(invertbtn)
  invertbtn.addEventListener('click', pinkify);

  var btn = document.getElementById('highlighter');
  btn.addEventListener('click', highlighter);

  var btn = document.getElementById('snow');
  btn.addEventListener('click', snow) 

  var btn = document.getElementById('sand');
  btn.addEventListener('click', sand) 

  var btn = document.getElementById('coogi');
  btn.addEventListener('click', coogi)

  var btn = document.getElementById('stripes');
  btn.addEventListener('click', stripes)


  var btn = document.getElementById('Lisa Frank');
  btn.addEventListener('click', lisaFrank)

  var btn = document.getElementById('static');
  btn.addEventListener('click', static)

  var invertbtn = document.getElementById('invert');
  invertbtn.addEventListener('click', invert);

  var btn = document.getElementById('reset');
  btn.addEventListener('click', reset)  


  };

}


  window.onload = drawButtons;
