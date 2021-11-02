objects = [];
status = "";
video = "";

function preload(){
    video = createVideo('vdeo.mp4');
}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting Objects";
}

function modelLoaded(){
console.log("model Loaded")
status = true;
video.loop();
video.speed(1);
video.volume(0);
}
    
