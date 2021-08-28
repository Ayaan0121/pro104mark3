//web.set fun
Webcam.set({
    width:550,
    hight:350,
    image_format:'png',
    png_quality:90
});

//Taking div id of shpwing camera 
camera=document.getElementById("camera");

//to attach camera
Webcam.attach('#camera');

//fun take snapshot
function take_snapshot() {  
   Webcam.snap(function(data_uri){ 
 
   document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
   });
}

//printin ml5 version
console.log("ml5 version:", ml5.version);

//link model
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/T_w2T-I0H/model.json' , modelLoaded);

//fun modelLoaded
function modelLoaded() {
    console.log('moodel loaded!');
}