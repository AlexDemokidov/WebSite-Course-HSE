window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.pictures__services__text')
    const pictures = document.querySelectorAll('.picture')
    const picturesBlocks = document.querySelectorAll('.pictures__two')
    var n=0;
    var m=0;
    buttons[0].classList.add('button--push')
    const calculate = document.querySelector('.calculate')

    // Изображения
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            if (i!=n){
            buttons[i].classList.add('button--push')
            buttons[n].classList.remove('button--push')
            if (i==0){
                showAll();
            }
            if (i==1){
                hideAll();
                pictures[0].classList.remove('hide');
                pictures[5].classList.add('pictures__one__img')
                pictures[5].classList.remove('pictures__two__img')
                pictures[5].classList.remove('hide');
            }
            if (i==2){
                hideAll();
                pictures[3].classList.remove('hide');
            }
            if (i==3){
                hideAll();
                picturesBlocks[0].classList.add('pictures__two')
                pictures[1].classList.remove('hide');
                pictures[2].classList.remove('hide');
                pictures[4].classList.remove('hide');
                pictures[4].classList.add('pictures__one__img')
                pictures[4].classList.remove('pictures__two__img')
            }
            n=i
            }
        })
    }
    // Подсчет стоимости
    const button = document.querySelector('.button_calculate')
    button.addEventListener('click', (event) => {
        const selectors = document.querySelectorAll('.form__field')
        const checkbox = document.querySelector('input[type=checkbox]')
        const calculate = document.querySelector('.calculate')
        if (selectors[0].value!="notSelected" & selectors[1].value!="notSelected" & checkbox.checked){
            button.classList.add('button--push')
            calculate.classList.remove('hide')
        }
    })
    // Вопрос-ответ
    const answers = document.querySelectorAll('.answer__container')
    const answersText = document.querySelectorAll('.answer__container__text')
    const answersImg = document.querySelectorAll('.answer__field__img')
    flag=true;
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', (event) =>{
            if (i==m){
                answersText[m].classList.toggle('hide')
                if (flag){
                    answersImg[m].style.transform = 'rotate(45deg)'
                    flag=false;
                } else {
                    answersImg[m].style.transform = 'rotate(90deg)'
                    flag=true;
                }
            } else {
                answersText[m].classList.add('hide')
                answersImg[m].style.transform = 'rotate(90deg)'
                answersText[i].classList.remove('hide')
                answersImg[i].style.transform = 'rotate(45deg)'
                m=i
                flag=false;
            }
        })
    }

    function hideAll(){
        pictures[0].classList.add('hide');
        pictures[1].classList.add('hide');
        pictures[2].classList.add('hide');
        pictures[3].classList.add('hide');
        pictures[4].classList.add('hide');
        pictures[5].classList.add('hide');
        picturesBlocks[0].classList.remove('pictures__two')
        picturesBlocks[1].classList.remove('pictures__two')
    }
    function showAll(){
        pictures[0].classList.remove('hide');
        pictures[1].classList.remove('hide');
        pictures[1].classList.remove('pictures__one__img');
        pictures[2].classList.remove('pictures__one__img');
        pictures[4].classList.remove('pictures__one__img');
        pictures[5].classList.remove('pictures__one__img');
        pictures[1].classList.add('pictures__two__img');
        pictures[2].classList.add('pictures__two__img');
        pictures[4].classList.add('pictures__two__img');
        pictures[5].classList.add('pictures__two__img');
        pictures[2].classList.remove('hide');
        pictures[3].classList.remove('hide');
        pictures[4].classList.remove('hide');
        pictures[5].classList.remove('hide');
        picturesBlocks[0].classList.add('pictures__two')
        picturesBlocks[1].classList.add('pictures__two')
    }
      
      
})

