// const card1=document.querySelector('.card');
// card1.addEventListener('click', function(){this.classList.add('open');});



//odkrywanie kart
var hi = document.querySelectorAll(".card");

[...hi].forEach(function(el) {
    el.addEventListener('click', function(){this.classList.add('open');

    var qw = document.querySelectorAll(".open");

//wykrywa czy para czy bład

    if (qw.length==2) {
            if (qw[0].firstElementChild.className==qw[1].firstElementChild.className){
                console.log('para');



                [...qw].forEach(function(el) {
                el.classList.remove('open');
                el.classList.add('match');
                // el.classList.remove('match');
                // el.classList.remove('error');

                var end=document.querySelectorAll(".match");
                    if (end.length==16){
                        console.log("wygrałeś");
                        document.querySelector('.deck').remove();
                        document.querySelector('.stars').remove();
                        const element=document.createElement('span');
                        element.textContent="wygrałeś \n ilośc ruchów <br> zagraj ponownie";
                        document.querySelector('main').appendChild(element);

                    }


            });

            }
            else {
                console.log('błąd');
                [...qw].forEach(function(el) {
                el.classList.remove('open');
                el.classList.add('error');

                // el.classList.remove('match');
                // el.classList.remove('error');
            });

            }
    }
});
});

//kończenie gry


//obsługa repeat
document.querySelector('.repeat').addEventListener('click',function(){
    [...hi].forEach(function(el) {
    el.classList.remove('open');
    el.classList.remove('match');
    el.classList.remove('error');
});
});

// document.querySelector('.card').firstElementChild.className; --pobiera klasę z i



console.log('wypchaj się');
