// const card1=document.querySelector('.card');
// card1.addEventListener('click', function(){this.classList.add('open');});
var moves=0;

function start_game(){
//randamowanie elementów
const cards=["diamond", "paper-plane-o", "anchor", "bolt", "cube", "leaf", "bicycle", "bomb", "diamond", "paper-plane-o", "anchor", "bolt", "cube", "leaf", "bicycle", "bomb"];
cards.sort(function(a, b){return 0.5 - Math.random()});
console.log(cards);

//randamowanie kard
let deck="";
for (let i=0; i<=15; i++){
    deck+=`<li class="card">
        <i class="fa fa-${cards[i]}"></i>
    </li>`
};

moves=0;

document.querySelector('.deck').innerHTML=deck;
document.querySelector('.stars').innerHTML='<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>';
document.querySelector('.moves').innerHTML=moves;
}//start game

start_game();

//odkrywanie kart
var hi = document.querySelectorAll(".card");

[...hi].forEach(function(el) {
    el.addEventListener('click', function(){this.classList.add('open');

    var qw = document.querySelectorAll(".open");

//wykrywa czy para czy bład

    if (qw.length==2) {
        moves+=1;
        console.log(moves);
        document.querySelector('.moves').innerHTML=moves;

        //dodawanie gwiazdek
            if (moves==12){
                document.querySelector(".stars").innerHTML='<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>';
            }
            if (moves==18){
                document.querySelector(".stars").innerHTML='<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
            }
            if (moves==24){
                document.querySelector(".stars").innerHTML='<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
            }


            if (qw[0].firstElementChild.className==qw[1].firstElementChild.className){
                console.log('para');

                [...qw].forEach(function(el) {
                el.classList.remove('open');
                el.classList.add('match');
                // el.classList.remove('match');
                // el.classList.remove('error');

                var end=document.querySelectorAll(".match");
                    if (end.length==1){
                        console.log("wygrałeś");
                        setTimeout(function(){
                            document.querySelector('.deck').remove();
                            document.querySelector('.panel').remove();
                            const element=document.createElement('div');
                            element.setAttribute("class", "game_end")
                            const text=`<div class="icon"><i class="fa fa-check-circle-o" aria-hidden="true"></i></div>
                                        <div class="con">Congratulations! You've won!</div>
                                        <div class="moves_score">${moves} moves were needed!</div>
                                        <button class="button">Play again</button>`;
                            element.innerHTML=text;
                            document.querySelector('main').appendChild(element);}, 1000);//setTime


                    }


            });

            }
            else {
                console.log('błąd');
                [...qw].forEach(function(el) {
                el.classList.remove('open');
                el.classList.add('error');

                // el.classList.remove('match');
                setTimeout(function(){el.classList.remove('error')}, 1000);
            });

            }
    }
});
});

//kończenie gry

//obsługa button - tu może brakowa deck albo jakoś tak
// document.querySelector('.button').addEventListener('click',function(){
// start_game();
// });

//obsługa repeat
document.querySelector('.repeat').addEventListener('click',function(){
start_game();
});



// document.querySelector('.card').firstElementChild.className; --pobiera klasę z i



console.log('wypchaj się');
