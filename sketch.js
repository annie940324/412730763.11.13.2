function setup() {
  createCanvas(windowWidth, windowHeight);  //宣告一個
  background("#fad4c0");
}
var w=100
var s_w=50
function draw() {
  stroke(255) //線條為白色
  noFill() //不充滿顏色
  rectMode(CENTER) //設定方框的中心點為座標點
  
  for(var y =50;y<=width;y=y+w){  //當x軸的值(x)已經超過視窗寬度(width)
    for(var x=50;x<=width+50;x=x+w){ 
    stroke("#507dbc")
    strokeWeight(4)
    ellipse(x,y,w+mouseX/20)
    stroke("#accbe1")
    strokeWeight(2)
    rect(x,y,w+mouseX/2)
    stroke("#ffc9b9")
    strokeWeight(4)
    ellipse(x+50,100,s_w+mouseX/20)
  }

}
}