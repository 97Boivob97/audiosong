
var len = document.querySelectorAll(".myButton").length;
for( var i=0; i<len;i++){
    var a = document.querySelectorAll(".myButton")[i];
    a.addEventListener("click",function(){
    var text = this.innerHTML;
    audioPlay(text);
    //playAnimation(text);

}
);

};

function audioPlay(text){
    switch(text){
        case "Play One Love":
            var audio = new Audio('One Love.mp3');
            audio.play();
            break;
        case "Play Pehle Bhi Main":
            var audio = new Audio('Pehle Bhi Main.mp3');
            audio.play();
            break;
        case "Play Choo Lo":
            var audio = new Audio('Choo Lo.mp3');
            audio.play();
            break;
        case "Play Kodom":
            var audio = new Audio('Kodom.mp3');
            audio.play();
            break;
         
    };
};
