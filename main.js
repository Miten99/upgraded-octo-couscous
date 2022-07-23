function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectdetecter = ml5.objectdetecter('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value
}

function modelloaded(){
    console.log("Model Loaded")
    status = true
}

function draw(){
    image(video,0,0,380,380)
}