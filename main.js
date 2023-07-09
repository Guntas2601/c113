function preload(){
}

function setup(){
canvas=createCanvas(1465,735);
canvas.position(5,5);
video=createCapture(VIDEO);
video.hide()

}
function draw(){
fill ("red")

    rect(1400, 20, 55, 55, 20, 15, 10, 5);
    fill("blue")
    rect(30, 20, 55, 55, 20, 15, 10, 5);
    fill("green")
    rect(30, 650, 55, 55, 20, 15, 10, 5);
    fill("yellow")
    rect(1400, 650, 55, 55, 20, 15, 10, 5);
    fill("pink")
   rect(30, 75, 1430, 5);
   fill("pink")
   rect(30, 650, 1430, 5);
   fill("pink")
    rect(30, 75, 5, 580);
    fill("pink")
    rect(1455, 75, 5, 580);
    image (video,40,100,1400,540);



}
function take_snapshot(){

    save("birthday.png")
    
    }
