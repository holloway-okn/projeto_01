$('.box__unity').click(function(){
    document.querySelector('.main__bigbox').classList.add('main__bigbox--show');
    document.querySelector('.content').classList.add('blur');
});

function hide() {
    document.querySelector('.main__bigbox').classList.remove('main__bigbox--show');
    document.querySelector('.content').classList.remove('blur');
}

function remove() {
    document.querySelector('.box__unity').classList.add('delete');
}
