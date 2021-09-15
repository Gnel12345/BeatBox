

const winmusic = new Audio('audio/rap.mp3');
const rapbeat = new Audio('audio/rap_beat.mp3');
const rapmix = new Audio('audio/rap_beat_remix.mp3');
const techno = new Audio('audio/techno_mix.mp3');
const tech = new Audio('audio/techno.mp3');
const techTrance = new Audio("audio/techno_trance.mp3");
const pian = new Audio("audio/metallica.mp3");
const pianglass = new Audio("/audio/bon_jovi.mp3");
const pianSolo = new Audio("/audio/jailbreak_acdc.mp3");

window.addEventListener("keydown",checkKeyPress,false);


var current;



function checkKeyPress (key){
winmusic.currentTime = 0;


    if(key.keyCode ==65){
        
        setTimeout(function(){
            //if(winmusic == current){
            winmusic.play();
            rapbeat.pause();
            rapmix.pause();
            techno.pause();
            tech.pause();
            techTrance.pause();
            pian.pause();
            pianglass.pause();
            pianSolo.pause();
        
            setTimeout(function(){
                winmusic.pause();
                winmusic.currentTime = 0;
            }, 1000);
        }, 1000);
        var a = document.querySelector(".a");
        a.style.backgroundColor ="red";
        setTimeout(function(){
            a.style.backgroundColor="black";
        }, 1000)
   // }
        
    }

    if(key.keyCode ==83){
        setTimeout(function(){
            rapbeat.play();
            winmusic.pause();
            rapmix.pause();
            techno.pause();
            tech.pause();
            techTrance.pause();
            pian.pause();
            pianglass.pause();
            pianSolo.pause();
        
            setTimeout(function(){
                rapbeat.pause();
                rapbeat.currentTime = 0;
            }, 1000);
        }, 1000);

        var s = document.querySelector(".s");
        s.style.backgroundColor ="purple";
        setTimeout(function(){
            s.style.backgroundColor="black";
        }, 1000)
    
    }
    if(key.keyCode ==68){
        setTimeout(function(){
            rapmix.play();
            rapbeat.pause();
            winmusic.pause();
            techno.pause();
            tech.pause();
            techTrance.pause();
            pian.pause();
            pianglass.pause();
            pianSolo.pause();
        
            setTimeout(function(){
                rapmix.pause();
                rapmix.currentTime = 0;
            }, 1000);
        }, 1000);
        var d = document.querySelector(".d");
        d.style.backgroundColor ="pink";
        setTimeout(function(){
            d.style.backgroundColor="black";
        }, 1000)
    
    }
    if(key.keyCode ==70){
        setTimeout(function(){
            techno.play();
            rapbeat.pause();
            rapmix.pause();
            winmusic.pause();
            tech.pause();
            techTrance.pause();
            pian.pause();
            pianglass.pause();
            pianSolo.pause();
        
            setTimeout(function(){
                techno.pause();
                techno.currentTime = 0;
            }, 1000);
        }, 1000);
        var f = document.querySelector(".f");
        f.style.backgroundColor ="blue";
        setTimeout(function(){
            f.style.backgroundColor="black";
        }, 1000)
    
    }
    if(key.keyCode ==71){
        setTimeout(function(){
            tech.play();
            rapbeat.pause();
            rapmix.pause();
            techno.pause();
            winmusic.pause();
            techTrance.pause();
            pian.pause();
            pianglass.pause();
            pianSolo.pause();
        
            setTimeout(function(){
                tech.pause();
                tech.currentTime = 0;
            }, 1000);
        }, 1000);
        var g = document.querySelector(".g");
        g.style.backgroundColor ="blue";
        setTimeout(function(){
            g.style.backgroundColor="black";
        }, 1000)
    
    }

    if(key.keyCode ==72){
        setTimeout(function(){
            techTrance.play();
            rapbeat.pause();
            rapmix.pause();
            techno.pause();
            tech.pause();
            winmusic.pause();
            pian.pause();
            pianglass.pause();
            pianSolo.pause();
        
            setTimeout(function(){
                techTrance.pause();
                techTrance.currentTime = 0;
            }, 1000);
        }, 1000);
        var h = document.querySelector(".h");
        h.style.backgroundColor ="white";
        setTimeout(function(){
            h.style.backgroundColor="black";
        }, 1000)
    }

    if(key.keyCode ==74){
        pian.play();
        rapbeat.pause();
            rapmix.pause();
            techno.pause();
            tech.pause();
            techTrance.pause();
            winmusic.pause();
            pianglass.pause();
            pianSolo.pause();

        var j= document.querySelector(".j");
        j.style.backgroundColor ="pink";
        setTimeout(function(){
            j.style.backgroundColor="black";
        }, 1000)
    
    }

    if(key.keyCode ==75){
        pianglass.play();
        var k = document.querySelector(".k");
        k.style.backgroundColor ="blue";
        setTimeout(function(){
            k.style.backgroundColor="black";
        }, 1000)
    
    }

    if(key.keyCode ==76){
        pianSolo.play();
    
    }
    var l = document.querySelector(".l");
        l.style.backgroundColor ="pink";
        setTimeout(function(){
            l.style.backgroundColor="black";
        }, 1000)



}

const functionA = () =>{
    setTimeout(function(){
        winmusic.play();
       
        rapbeat.pause();
        rapmix.pause();
        techno.pause();
        tech.pause();
        techTrance.pause();
        pian.pause();
        pianglass.pause();
        pianSolo.pause();
        setTimeout(function(){
            winmusic.pause();
            winmusic.currentTime = 0;
        }, 1000);
    }, 1000);
    var a = document.querySelector(".a");
    a.style.backgroundColor ="red";
    setTimeout(function(){
        a.style.backgroundColor="black";
    }, 1000)
    
}

const functionS=()=>{
setTimeout(function(){
    rapbeat.play();
   
    winmusic.pause();
    rapmix.pause();
    techno.pause();
    tech.pause();
    techTrance.pause();
    pian.pause();
    pianglass.pause();
    pianSolo.pause();
    setTimeout(function(){
        rapbeat.pause();
        rapbeat.currentTime = 0;
    }, 1000);
}, 1000);

var s = document.querySelector(".s");
s.style.backgroundColor ="purple";
setTimeout(function(){
    s.style.backgroundColor="black";
}, 1000)
}

const functionD=()=>{
setTimeout(function(){
    rapmix.play();
   
    rapbeat.pause();
    winmusic.pause();
    techno.pause();
    tech.pause();
    techTrance.pause();
    pian.pause();
    pianglass.pause();
    pianSolo.pause();
    setTimeout(function(){
        rapmix.pause();
        rapmix.currentTime = 0;
    }, 1000);
}, 1000);
var d = document.querySelector(".d");
d.style.backgroundColor ="pink";
setTimeout(function(){
    d.style.backgroundColor="black";
}, 1000)
}

const functionF=()=>{
    setTimeout(function(){
        techno.play();
        
        rapbeat.pause();
        rapmix.pause();
        winmusic.pause();
        tech.pause();
        techTrance.pause();
        pian.pause();
        pianglass.pause();
        pianSolo.pause();
        setTimeout(function(){
            techno.pause();
            techno.currentTime = 0;
        }, 1000);
    }, 1000);
    var f = document.querySelector(".f");
    f.style.backgroundColor ="blue";
    setTimeout(function(){
        f.style.backgroundColor="black";
    }, 1000)
}

const functionG=()=>{
    setTimeout(function(){
        tech.play();
        
        rapbeat.pause();
        rapmix.pause();
        techno.pause();
        winmusic.pause();
        techTrance.pause();
        pian.pause();
        pianglass.pause();
        pianSolo.pause();
        setTimeout(function(){
            tech.pause();
            tech.currentTime = 0;
        }, 1000);
    }, 1000);
    var g = document.querySelector(".g");
    g.style.backgroundColor ="blue";
    setTimeout(function(){
        g.style.backgroundColor="black";
    }, 1000)


}

const functionH=()=>{
    setTimeout(function(){
        techTrance.play();
        
        rapbeat.pause();
        rapmix.pause();
        techno.pause();
        tech.pause();
        winmusic.pause();
        pian.pause();
        pianglass.pause();
        pianSolo.pause();
        setTimeout(function(){
            techTrance.pause();
            techTrance.currentTime = 0;
        }, 1000);
    }, 1000);
    var h = document.querySelector(".h");
    h.style.backgroundColor ="white";
    setTimeout(function(){
        h.style.backgroundColor="black";
    }, 1000)
}

const functionJ=()=>{
    pian.play();
    
    rapbeat.pause();
    rapmix.pause();
    techno.pause();
    tech.pause();
    techTrance.pause();
    winmusic.pause();
    pianglass.pause();
    pianSolo.pause();
    var j= document.querySelector(".j");
    j.style.backgroundColor ="pink";
    setTimeout(function(){
        j.style.backgroundColor="black";
    }, 1000)

}

const functionK=()=>{

    pianglass.play();
    var k = document.querySelector(".k");
    k.style.backgroundColor ="blue";
    setTimeout(function(){
        k.style.backgroundColor="black";
    }, 1000)

}

const functionL=()=>{

    pianSolo.play();
    var k = document.querySelector(".l");
    k.style.backgroundColor ="purple";
    setTimeout(function(){
        k.style.backgroundColor="black";
    }, 1000)

}

//$document.addEventListener('keydown', function(event) {
   // if(event.keyCode == 65) {
     //   alert('Left was pressed');
   // }
//});


        


