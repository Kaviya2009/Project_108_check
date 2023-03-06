var dog = 0;
var cat = 0;
var pig = 0;
var duck = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o145myJWc/model.json', modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error){
        console.error(error);
    } else{
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("number_of_animal").innerHTML = 'Detected - '+ (results[0].confidence+1);
        document.getElementById("animal").innerHTML = 'Detected voice is- '+ results[0].label;
        document.getElementById("number_of_animal").style.color = "rgb("+random_number_r+","+ random_number_g+","+random_number_r+")";
        document.getElementById("animal").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('dog.gif');
        img1 = document.getElementById('cat.gif');
        img2 = document.getElementById('pig.gif');
        img3 = document.getElementById('duck.gif');

        if(results[0].label == "Barking"){
            img.src = 'dog.gif';
            dog + 1 ;
        } else if(results[0].label == "Meowing"){
            img1.src = 'cat.gif';
            cat + 1 ;
        } else if(results[0].label == "Oinking"){
            img2.src = 'pig.gif';
            pig + 1 ;
        } else {
            img3.src = 'duck.gif';
            duck + 1 ;
        }
}
}
