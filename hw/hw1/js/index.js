const sad_mouth = "M 150 225 Q 225 130 300 225";
const happy_mouth = "M 150 200 Q 225 300 300 200";

function emotion_change() 
{
    var emotions_label = document.getElementById("emotions_label");
    var mouth = document.getElementById("mouth");

    switch(emotions_label.innerText)
    {
        case 'Happy':
            emotions_label.innerText = 'Sad';
            mouth.setAttribute('d', sad_mouth);
            break;
        case 'Sad':
            emotions_label.innerText = 'Happy';
            mouth.setAttribute('d', happy_mouth);
            break;
    }
}