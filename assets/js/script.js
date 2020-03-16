function appear(){
    document.querySelector('.main__bigbox').classList.add('main__bigbox--show');
    document.querySelector('.content').classList.add('blur');
}

function hide(){
    document.querySelector('.main__bigbox').classList.remove('main__bigbox--show');
    document.querySelector('.content').classList.remove('blur');
}
