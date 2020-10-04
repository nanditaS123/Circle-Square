const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    var circle_options ={
        restitution: 1.0
    }

    circle = Bodies.circle(100,200,40, circle_options);
    World.add(world,circle);

    var square_options ={
        restitution: 1.0
    }

    square = Bodies.rectangle(300,200,50,50, square_options);
    World.add(world,square);

    var edge_options ={
        isStatic: true
    }

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);


    edge1 = Bodies.rectangle(200,5,400,10, edge_options);
    World.add(world,edge1);

    edge2 = Bodies.rectangle(5,200,10,400, edge_options);
    World.add(world,edge2);

    edge3 = Bodies.rectangle(395,200,10,400, edge_options);
    World.add(world,edge3);



    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(circle.position.x, circle.position.y, 40);

    rectMode(CENTER);
    rect(square.position.x, square.position.y, 50,50);

    rect(edge1.position.x, edge1.position.y, 400,10);
    rect(edge2.position.x, edge2.position.y, 10,400);
    rect(edge3.position.x, edge3.position.y, 10,400);

}