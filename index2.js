let btn = document.querySelectorAll(".play-button");


let badHabits = new Audio('Bad habits.mp3')
let Feel_it_too = new Audio('Feel it Too.mp3')
let girls_like_you = new Audio('girls like you.mp3')
let i_dont_care = new Audio('I Don_t Care.mp3')
let main_hoon_sath_tere = new Audio('Main Hoon Saath Tere.mp3')
let main_kay_karun = new Audio('Main Kya Karoon.mp3')
let shape_of_you = new Audio('Shape of You.mp3')
let south_of_border = new Audio('South of the Border.mp3')
let Sucker = new Audio('Sucker.mp3')
let thinking_out_loud = new Audio('Thinking Out Loud.mp3')


let songs = [badHabits, Feel_it_too, girls_like_you, i_dont_care, main_hoon_sath_tere, main_kay_karun, shape_of_you, south_of_border, Sucker, thinking_out_loud];
console.log(songs);

function togglePlay(audioElement, btnAccess) {
    
    if (audioElement.paused) {
        for (j = 0; j < songs.length; j++) {
            if (songs[j].paused == false) {
    
                songs[j].pause();
            }
        }
        audioElement.play();
        btnAccess.innerHTML = '<i class="fas fa-pause"></i>'
    }
    else {
        audioElement.pause();
        btnAccess.innerHTML = '<i class="fas fa-play"></i>'
    }
};

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let btn_id = this.id;
        let btn_access = document.querySelector("#" + btn_id)



        console.log(btn_id)
        switch (btn_id) {
            case 'btn1-play': 
                togglePlay(badHabits, btn_access)
                break;
            case 'btn2-play': togglePlay(Feel_it_too, btn_access)
                break;
            case 'btn3-play': togglePlay(girls_like_you, btn_access)
                break;
            case 'btn4-play': togglePlay(i_dont_care, btn_access)
                break;
            case 'btn5-play': togglePlay(main_hoon_sath_tere, btn_access)
                break;
            case 'btn6-play': togglePlay(main_kay_karun, btn_access)
                break;
            case 'btn7-play': togglePlay(shape_of_you, btn_access)
                break;
            case 'btn8-play': togglePlay(south_of_border, btn_access)
                break;
            case 'btn9-play': togglePlay(Sucker, btn_access)
                break;
            case 'btn10-play': togglePlay(thinking_out_loud, btn_access)
                break;
        }


    })
}

