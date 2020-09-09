var umbrella
var maxDrops = 100

function setup(){
    umbrella = new Umbrella(width/2, 800, 50)
    for(var i=0; i<maxDrops; i++) {
        drops.push(new Drops(random(0, 400), random(0, 400)));
    }
}

function draw(){
   umbrella.display();
   drops.display(); 
}   

