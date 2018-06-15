// function loaded(){

var word = [

    { location: "tahiti", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-bora-bora.jpg", song: "1.mp3" },
    { location: "mexico", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-riviera-maya.jpg", song: "2.mp3" },
    { location: "maldives", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-maldives.jpg", song: "3.mp3" },
    { location: "aitutaki", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-aitutaki.jpg", song: "4.mp3" },
    { location: "hawaii", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-kauai.jpg", song: "5.mp3" },
    { location: "fiji", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-mamanuca-islands.jpg", song: "1.mp3" },
    { location: "caribbean", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-st-barts.jpg", song: "2.mp3"},
    { location: "bahamas", img: "https://www.planetware.com/photos-large/SEY/the-bahamas-tropical-vacation-abacos.jpg", song: "3.mp3" },
    { location: "belize", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-ambergris-caye.jpg", song: "4.mp3" },
    { location: "indonesia", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-bali.jpg", song: "6.mp3" },
    { location: "australia", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-four-mile-beach.jpg", song: "1.mp3" },
    { location: "thailand", img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-phi-phi-island.jpg", song: "2.mp3" }

];

var currentWord = [];
var randomWord;
var initArray = [];
var current = document.getElementById("current");

var guesses = document.getElementById("guesses");
var left = document.getElementById("left");

var demo = document.getElementById("demo");

var guessesArray = [];

var bg = document.getElementById("bg");


//initialize
function initialize() {

    initArray = [];
    random = Math.floor(Math.random() * (word.length));

    randomWord = word[random].location;
    console.log(randomWord);

    currentWord = randomWord.split("");
    //console.log(currentWord);

    for (i = 0; i < currentWord.length; i++) {
        initArray.push("_ ");
    }
    current.innerHTML = initArray.join(" ");

    guesses.innerHTML = "";



    left.innerHTML = 5;
    guessesArray = [];
}

initialize();


//Key Pressed Function
document.onkeyup = function (event) {

    var lastKeyPressed = event.key;

    //exclude non-letter char
    if (lastKeyPressed.length > 1) {
        return;
    }

    console.log(lastKeyPressed);


    //test if keypressed is in current word array
    for (i = 0; i < currentWord.length; i++) {
        if (lastKeyPressed === currentWord[i]) {
            initArray[i] = currentWord[i];
            current.innerHTML = initArray.join(" ");
        }
        if (initArray.indexOf(lastKeyPressed) !== -1) {
            check = false;
        }
        else {
            check = true;
        }
    }

    console.log(check);

    //test if keypressed is in guessedArray
    if (check && (guessesArray.indexOf(lastKeyPressed) === -1)) {
        left.innerHTML--;
        guessesArray.push(lastKeyPressed);
    }
    console.log(initArray.toString());


    guesses.innerHTML = guessesArray.join(", ");

    //win
    if (initArray.toString() == currentWord.toString()) {

        document.getElementById("wins").innerHTML++;

        bg.style.backgroundImage = "url(\'" + word[random].img + "\')";

        demo.textContent = word[random].location + " looks nice!";
        console.log(word[random].location);
        // demo.style.visibility = "visible";

        document.getElementById("sound").src = "assets/audio/" + word[random].song;
        console.log("assets/audio/" + word[random].song);

        //setTimeout(initialize, 1500);
        initialize();

    }

    //lose
    if (left.innerHTML === "0") {
        initialize();
    }

}

    /// document.getElementById("myImg").src = "hackanm.gif";
    //document.body.style.backgroundImage = "url('img_tree.png')";

