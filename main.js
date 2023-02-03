noseX = 0
noseY = 0
leftWristX = 0
rightWristX = 0
difference = 0

function preload(){

};

function draw(){
    background("white")
    fill("red")
    stroke("red")
};

function setup(){
canvas = createCanvas(600,600)
canvas.center();
video = createCapture(VIDEO)

poseNetmodel=ml5.poseNet(video, modelLoaded)
poseNetmodel.on('pose', gotPoses)
};

function modelLoaded(){
    console.log("Pose Net Model has been loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX-rightWristX)
    }
}