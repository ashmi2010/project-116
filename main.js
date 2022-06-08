noseX = 0;
noseY = 0;


function preload(){
    moustache_image = loadImage('https://i.postimg.cc/bvnnL1Yn/png-clipart-moustache-moustache-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(moustache_image, noseX, noseY, 30, 30);
}

function take_Snapshot(){
    save("pic.png")
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y
        console.log("nose x: "+results[0].pose.nose.x);
        console.log("nose y: "+results[0].pose.nose.y);
    }
}