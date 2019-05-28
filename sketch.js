var dagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag","Vrijdag","Zaterdag","Zondag"]
var dag;
var widthG;
var widthA;
var mijnData;
var bg;
var font;
var kleur;
var lengteAppel, lengteSinasappel, lengteBanaan, lengteBeans, lengteGroente, lengteGoaLFruit, lengteGoalGroente;
var mouseX;
var mouseY;
var afstandX = 75;
var afstandY = 97;
var tekstbehaald;

function setup(){
    createCanvas(1200, 951);
    background(225);
    font = loadFont('font/Inconsolata-Regular.ttf');loadJSON("https://api.myjson.com/bins/7077q", getData);
    dag = 0;
    mouseX, mouseY = 0;
}

function draw(){
    textFont(font);
    if(mijnData){
        fill(100);
        noStroke();
        textSize(22);
        text(mijnData.user.firstName + " " + mijnData.user.lastName, 75, 40);
        fill(50,80,180);
        text(dagen[dag], 320, 40);
        fill(100);
        text("Fruit", 75, 80);
        text("Groente", 75, 295);
        
        lengteGoaLFruit = 0;
        for(i = 0; i < mijnData.results[dag].goals.length; i++){
            if(mijnData.results[dag].goals[i].category ==
          "fruit"){
                lengteGoaLFruit = mijnData.results[dag].goals[i].quantity
            }
        }
        
        if(lengteGoaLFruit != 0){
        fill(50);
        strokeWeight(3);
        stroke(25);
        rect(75, 97, 75 * lengteGoaLFruit, 45, 40);
        }
        else{
            textSize(18);
            text("Er is geen doel", 75, 120);
        }
        
        lengteAppel = 0; 
        lengteSinasappel = 0; 
        lengteBanaan = 0;
        breedte = 0;
        
        for(i = 0; i < mijnData.results[dag].activity.length; i++){
        
            if(mijnData.results[dag].activity[i].category == "fruit"){
                if(mijnData.results[dag].activity[i].type == "orange"){
                    lengteSinasappel = lengteSinasappel + mijnData.results[dag].activity[i].quantity;
                }  
                
                else if(mijnData.results[dag].activity[i].type == "apple"){
                    lengteAppel = lengteAppel + mijnData.results[dag].activity[i].quantity;
                }
                
                else if(mijnData.results[dag].activity[i].type == "banana"){
                    lengteBanaan = lengteBanaan + mijnData.results[dag].activity[i].quantity;
                }
            }
        }
        
        if(lengteBanaan != 0){
            fill(255, 230, 25);
            stroke(230, 195,20);
            rect(78, 100, 73.5 * (lengteBanaan + lengteSinasappel + lengteAppel), 39, 40);
        }
        
        if(lengteAppel != 0){
            fill(50, 255, 130);
            stroke(30, 220,100);
            rect(78, 100, 73.5 * (lengteAppel  + lengteSinasappel), 39 , 40);
        }
        
        if(lengteSinasappel != 0){
            fill(255,170,20);
            strokeWeight(3);
            stroke(255, 130,10);
            rect(78,100, 73.5 * lengteSinasappel, 39, 40);
        }
        
        if(lengteSinasappel == 0 && lengteAppel == 0 && lengteBanaan == 0){
            textSize(18);
            noStroke();
            fill(100);
            text("Er zijn geen activiteiten", 75, 165);
        }
        
        lengteGoalGroente = 0;
        for(i = 0; i < mijnData.results[dag].goals.length; i++){
            if(mijnData.results[dag].goals[i].category ==
          "vegetables"){
                lengteGoalGroente = mijnData.results[dag].goals[i].quantity
             }
        }
        console.log("groente " +lengteGoalGroente);
        if(lengteGoalGroente != 0){
            
            fill(50);
            strokeWeight(3);
            stroke(25);
            rect(75, 312, 1.5 * lengteGoalGroente, 45, 40);
        }
        else{
            textSize(18);
            fill(100);
            text("Er is geen doel",75, 335 );
        }
        
        lengteBeans = 0;
        lengteGroente = 0;
        for(i = 0; i < mijnData.results[dag].activity.length; i++){
            if(mijnData.results[dag].activity[i].category == "vegetables"){
                if(mijnData.results[dag].activity[i].description == "50 grams beans"){
                    lengteBeans = lengteBeans + mijnData.results[dag].activity[i].quantity;
                 }
                
                else {
                    lengteGroente = lengteGroente + mijnData.results[dag].activity[i].quantity;
                }
             }
        }
            if(lengteGroente != 0){
                fill(200, 30, 225);
                strokeWeight(3);
                stroke(160, 20,200);
                rect(78, 315,lengteBeans + lengteGroente, 39, 40);
            }
        
            if(lengteBeans != 0){
                fill(20, 230, 225);
                strokeWeight(3);
                stroke(10, 195,200);
                rect(78, 315, 1.5 *(lengteBeans), 39, 40);
            }
            
            if(lengteBeans == 0 && lengteGroente == 0){
                textSize(18);
                fill(100);
                noStroke();
                text("Er zijn geen activiteiten", 75, 381);
            }
        
        fill(80);
        textSize(46);
        noStroke();
        if(dag > 0){
            text("<", 35, 240);
        }
        if(dag < 6){
            text(">", 580, 240);
        }
    }

}

function mousePressed(){
    background(225);
    if(mouseX >= afstandX && mouseX <= afstandX+ 600 && mouseY >= 97 && mouseY <=afstandY+45){
        fill(100);
        textSize(18);
        noStroke();
        var afstand = 0;
        
        if(lengteSinasappel != 0){
            text("Hoeveelheid in aantal", 75, 185);
            text("Sinasappel: "+ lengteSinasappel, 95, 205);
            fill(255,170,20);
            strokeWeight(2);
            stroke(255, 130,10);
            ellipse(80, 200, 10,10);
            afstand += 20;
        }
        
        if(lengteAppel != 0){
            noStroke();
            fill(100);
            text("Appel: "+ lengteAppel,95, 205 + afstand);
            fill(50, 255, 130);
            strokeWeight(2);
            stroke(30, 220,100);
            ellipse(80, 200 + afstand, 10,10);
            afstand += 20;
        }
        
        if(lengteBanaan != 0){
            noStroke();
            fill(100);
            text("Banaan: "+ lengteBanaan, 95, 205 + afstand);
            fill(255, 230, 25);
            strokeWeight(2);
            stroke(230, 195,20);
            ellipse(80, 200 + afstand, 10,10);
            afstand += 20;
        }
        
        if(lengteGoaLFruit != 0){
            noStroke();
            fill(100);
            if(lengteGoaLFruit > lengteBanaan + lengteAppel + lengteSinasappel){
                fill(200, 80,80);
                tekstbehaald = "Doel nog niet bereikt"
            }
            else{
                fill(80,200,80);
                tekstbehaald = "Doel bereikt"
            }
            text("Doel: "+ lengteGoaLFruit + " / " + tekstbehaald, 95, 205 + afstand);
            fill(50);
            strokeWeight(2);
            stroke(25);
            ellipse(80, 200 + afstand, 10,10);
        }
    }
    
    if(mouseX >= afstandX && mouseX <= afstandX+ 600 && mouseY >= 312 && mouseY <=afstandY+ 260){
        var afstand = 0;
        noStroke();
        fill(100);
        textSize(18);
        
        if(lengteBeans != 0){
            text("Hoeveelheid in gram", 75, 405);
            text("Bonen: "+ lengteBeans, 95, 430);
            fill(20, 230, 225);
            strokeWeight(3);
            stroke(10, 195,200);
            ellipse(80, 425, 10,10);
            afstand += 20;
        }
        
        if(lengteGroente != 0){
            noStroke();
            fill(100);
            text("groente: "+ lengteGroente, 95, 430+ afstand);
            fill(200, 30, 225);
            strokeWeight(3);
            stroke(160, 20,200);
            ellipse(80, 425 + afstand, 10,10);
            afstand += 20;
        }
        
        if(lengteGoalGroente != 0){
            noStroke();
            fill(100);
            if(lengteGoalGroente > lengteBeans + lengteGroente){
                fill(200, 80,80);
                tekstbehaald = "Doel nog niet bereikt"
            }
            else{
                fill(80,200,80);
                tekstbehaald = "Doel bereikt"
            }
            text("Doel: "+ lengteGoalGroente + " / " + tekstbehaald, 95, 430 + afstand);
            fill(50);
            strokeWeight(2);
            stroke(25);
            ellipse(80, 425 + afstand, 10,10);
        }
    }
    //pijltje naar links
    if(mouseX >= 33 && mouseX <= 83 && mouseY >= 192 && mouseY <= 238 && dag > 0){
          dag--;
      }
    //pijltje naar rechts
    if(mouseX >= 578 && mouseX <= 618 && mouseY >= 192 && mouseY <= 238 && dag < 6){
          dag++;
      }
}

function getData(data) {
  mijnData = data;
}
