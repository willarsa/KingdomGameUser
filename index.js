function loadPage(tab){
    var pages = document.getElementsByClassName('page');

    for(let i = 0; i < pages.length; i++){
        if(pages[i].id == tab.name){
            pages[i].classList.remove('hidden');
        }
        else{
            pages[i].classList.add('hidden');
        }
    }
}