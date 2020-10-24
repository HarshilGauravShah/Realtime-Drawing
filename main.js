function setup()
{
    video=createCapture(VIDEO);
    video.size(500,550)

    canvas=createCanvas(400,400);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function draw()
{
    document.getElementById("SquareSize").innerHTML = "Width and Height of square is" + difference + "pixel";
    background('#969a97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);

}

function modelLoaded()
{
    console.log('Posenet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseY + "noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX-rightwristX);

        console.log("leftwristX is " + leftwristX + "and RightwristX is " + rightwristX + " difference is          " + difference)
    }
}
