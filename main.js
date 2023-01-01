function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2v7VyvPj1/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
 
  dog = 0;
  cat = 0;
  cow = 0;
  lion = 0;

function gotResults(error, results)
{
    if (error)
    {
        console.error(error)
    }
    else
    {
        console.log(results);
        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("no of times").innerHTML = 'Detected - ' ;  
        
        document.getElementById("result_label").innerHTML = 'Detected voice is of - ' + results[0].label;
        
        document.getElementById("result_label").style.color = "rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("no of times").style.color = "rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('start.png');
        
        if (results[0].label == "barking")
        {
            img.src = 'bark.gif';   
        } 

        else if (results[0].label == "meowing")
        {
            img.src = 'meow.gif';
        }   

        else if (results[0].label == "mooing")
        {
            img.src = 'cute-cow.gif';
        }  

        else
        {
            img.src = 'lion.gif';
        }
    }
}