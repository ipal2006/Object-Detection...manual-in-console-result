img="";
status="";
function preload()
{
   img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(650,450);
    canvas.center();
    dectector_of_object = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "kya bat hai?Maai so rah hu.Bad mai karunga detect..Bye"
}

function modelLoaded()
{
    console.log("Model Is Loaded");
    status=true;
    dectector_of_object.detect(img,gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(results);
    }
    
}
function draw()
{
    image(img,0,0,650,450);
    fill("#0a0885");
    stroke("#0a0885");
    noFill();
    rect(30,64,430,375);
    text("Dog",60,80);

    fill("#0a0885");
    stroke("#0a0885");
    noFill();
    rect(300,75,275,350);
    text("Cat",330,100);
}