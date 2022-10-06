var video = "video"
var fifi = "s por que si";
var unos_sabritones = "ricos";
var una_coquita = "rica";
var input = "value";
var perro = input;
var satanatus = "status";
var seicientos_secentaYseis = true;
var APE_FLU = [];
var O2_mas_H2 = "HO2";
var ENSERIO = "11 VARIABLES!!!!!!";
var ONCE = "VARIABLES QUE VARIAN";
function setup (){
    canvas = createCanvas(700,700);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video,0,0,680,680);
console.log("listo =)")
if (satanatus == seicientos_secentaYseis ){
    fifi.detect(video,gotResult);
    for(i = 0; i < APE_FLU;i++){
        document.getElementById("un_ginomo_estaba_caminado").innerHTML  = "estado : PERRON";
        O2_mas_H2 = floor(APE_FLU[i].confidence*1000);
        text(APE_FLU[i].label + " " + O2_mas_H2 + "%" + "dividelo por 10" + "osea quitale el cero del final", APE_FLU[i].x + 15,APE_FLU[i].y + 15);
        stroke("black");
        rect(APE_FLU[i].x,APE_FLU[i].y,APE_FLU[i].width,APE_FLU[i].height);
       if(APE_FLU[i].label == input){
            video.stop(true);
            fifi.detect(gotResult)
            document.getElementById("sapu").innerHTML = input + "icee detectado";
            ENSERIO = window.speechSynthesis;
            ONCE = new SpeechSynthesisUtterance(perro + "encontrado");
            ENSERIO.speak(ONCE);

    }
    else{
        document.getElementById("sapu").innerHTML = input + "icee mo detectado =(";
    }
    }
}
else{
    console.log("chale.. no sirvio =(");
}
}
function start(){
  fifi = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("un_ginomo_estaba_caminando").innerHTML = "esperate a que el coco se coma sus sabritones...." + "<br> ....listo";
    input = document.getElementById("y_percebeu_o_sapu_moreuuuuu");

}
function modelLoaded(){
    console.log("perro sarandeado.."+"<br>..gato sarandeado")
    satanatus = seicientos_secentaYseis;

}
function gotResult(error,results){
    if(error){
        console.log("valio quequis"+error);
    }
    else{
        console.log("=/bueno.."+results+"si sirvio?.");
        APE_FLU = results;
    }

}