let cont = 0;
let contImg = 0;
let tempo = 1000;
let = contador;


function start() {
	contador = setInterval(() => {carr();}, tempo);
    // alert('tá contando');
}

function carr(){
    cont++;
    if(cont <= 5){
        contImg = 1;
        verImg();
    }else if(cont <= 10){
        contImg = 2;
        verImg();
    }else if(cont <= 15){
        contImg = 3;
        verImg();
    }else if(cont <= 20){
        contImg = 4;
        verImg();
    }else if(cont > 20){
        restart();            
    }
}

function restart(){
    cont = 0;
    carr();
}

function verImg(){
    if(contImg == 1){
        opacity();
        document.getElementById('s1-1').style.width = '100%';
    }else if(contImg == 2){
        opacity();
        document.getElementById('s1-2').style.width = '100%';
    }else if(contImg == 3){
        opacity();
        document.getElementById('s1-3').style.width = '100%';
    }else if(contImg == 4){
        opacity();
        document.getElementById('s1-4').style.width = '100%';
    }
}

function opacity(){
    document.getElementById('s1-1').style.width = '0%';
    document.getElementById('s1-2').style.width = '0%';
    document.getElementById('s1-3').style.width = '0%';
    document.getElementById('s1-4').style.width = '0%';
}