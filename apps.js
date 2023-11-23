let video = document.querySelector(".botonVideo");

// video.addEventListener("play", function (){
//     console.log("Di play en el video",this.currentTime);
// }
// )
    // let temporizador = setInterval(function(){
    //     ponerColorBody();
    // }, 2000);
    // setTimeout(function(){
    //     ponerColorBody()
    // }, 3000)
// });

// video.addEventListener("seeking", function (){
//     console.log("Se esta viendo una parte del video",this.currentTime);
// });

video.addEventListener("ended", function (){
    console.log("Se termino el video",this.currentTime);
    alert("se termino el video");


    let decision = confirm("¿Deseas ver de nuevo el video?");
    console.log(decision);
    if (decision == true){
        video.play();
    }else{
window.location = "https://classroom.google.com/c/NjE4ODc2MjE3NTY5";
    };
});

// video.addEventListener("pause", function (){
//     console.log("Di pausa en el video");
// });

// es un metodo 
// this.currentTime

//Temporizadores o timer


// setTimeout(function(){
//     ponerColorBody();
// }, 3000);

// // let temporizador = setInterval(function(){
// //     ponerColorBody();
// // }, 2000);

// function ponerColorBody(){
// let pantalla = document.body;
// pantalla.style.background = pantalla.style.background == "blue" ? "green" : "blue";
// }

// let confirmacion = confirm("¿Quieres continuar?");
// if (confirmacion == true) {
//     alert("Decidiste continuar")
// } else {
//     alert("Cancelaste la acción");
// }
// // ARREGLOS, VECTORES, ARRAYS

// let array = ["uno", "dos", "tres",];

// let array2 =  ["cuatro", "cinco", "seis"];

// let multidimensional = [array, array2];

// multidimensional[posiciondelmultidimensional][posiciondelarray];
// multidimensional 
