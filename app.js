function start_game(){
    //randam cards
    const cards=["diamond", "paper-plane-o", "anchor", "bolt", "cube", "leaf", "bicycle", "bomb", "diamond", "paper-plane-o", "anchor", "bolt", "cube", "leaf", "bicycle", "bomb"];
    cards.sort(function(a, b){return 0.5 - Math.random()});

    let deck="";
    for (let i=0; i<=15; i++){
        deck+=`<li class="card">
            <i class="fa fa-${cards[i]}"></i>
        </li>`
    };//for loop

    const panel="<span class=\"stars\"></span><!--stars --><span class=\"moves\"></span> moves<span class=\"repeat\"><i class=\"fa fa-repeat repeat\"></i></span>";

    let moves=0;

document.querySelector('.deck').innerHTML=deck;//fill the deck
document.querySelector('.panel').innerHTML=panel;//fill the panel
document.querySelector('.stars').innerHTML='<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>';//fill the stars
document.querySelector('.moves').innerHTML=moves;//fill the moves

//cards openning
var cards2 = document.querySelectorAll(".card");
[...cards2].forEach(function(el) {
    el.addEventListener('click', function(){this.classList.add('open');

//matching or error
var open = document.querySelectorAll(".open");

    if (open.length==2) {
        moves+=1;
        document.querySelector('.moves').innerHTML=moves;//update moves

            //update stars
            if (moves==12){
                document.querySelector(".stars").innerHTML='<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>';
            }
            if (moves==18){
                document.querySelector(".stars").innerHTML='<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
            }
            if (moves==24){
                document.querySelector(".stars").innerHTML='<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
            }

            //if matching
            if (open[0].firstElementChild.className==open[1].firstElementChild.className){
                [...open].forEach(function(el) {
                el.classList.remove('open');
                el.classList.add('match');

            //ending the game
            var end=document.querySelectorAll(".match");
            if (end.length==16){
                setTimeout(function(){
                document.querySelector('.deck').remove();
                document.querySelector('.panel').innerHTML="";
                const element=document.createElement('div');
                element.setAttribute("class", "game_end")
                const text=`<div class="icon"><i class="fa fa-check-circle-o" aria-hidden="true"></i></div>
                            <div class="con">Congratulations! You've won!</div>
                            <div class="moves_score">${moves} moves were needed!</div>
                            <button class="button">Play again</button>`;
                element.innerHTML=text;
                document.querySelector('main').appendChild(element);

                //EventListener for button
                document.querySelector('.button').addEventListener('click',function(){
                console.log("działa");
                document.querySelector('.game_end').remove();
                const elementDeck=document.createElement('div');
                elementDeck.setAttribute("class", "deck");
                document.querySelector('main').appendChild(elementDeck);
                start_game();
                });//addEventListener click button
                }, 1000);//setTime


            }//if end.length
            });

            }
            //if error
            else {
                [...open].forEach(function(el) {
                el.classList.remove('open');
                el.classList.add('error');

                // el.classList.remove('match');
                setTimeout(function(){el.classList.remove('error')}, 1000);
            });//forEach

            }//else
    }//if open.length==2
    });//addEventListener click card
});//cards2 forEach

//repeat button
document.querySelector('.repeat').addEventListener('click', function(){
start_game();
});//addListener repeat
}//start game

//start the game
start_game();
