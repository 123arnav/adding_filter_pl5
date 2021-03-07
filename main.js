tint_color="";

function filter_img(){
    tint_color=document.getElementById("choose_filter").value;
}
function preload(){

}
function setup(){
canvas=createCanvas(800,600);
canvas.center();
video=createCapture(VIDEO)
video.hide()
}
function draw(){
image(video,0,0,800,600);
tint(tint_color);

}
function take_snapshot(){
    save("myselfie.png");
}
