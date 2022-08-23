import previewVue from './previewVue.js';

class bookmarkView extends previewVue{
_errorMsg=`No bookmarks yet ,Find it and bookmark it  `
_parentElment=document.querySelector('.bookmarks__list')

addHandlerInit(handler){
   
window.addEventListener('load',handler)
}


}


export default new bookmarkView();