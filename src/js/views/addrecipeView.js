import { mark } from 'regenerator-runtime';
import view from './view';

class addRecipeView extends view {
  _parentElment = document.querySelector('.upload');//form
  _winodw = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnwOpen = document.querySelector('.nav__btn--add-recipe');
  _btnwClose = document.querySelector('.btn--close-modal');
  _simpleMsg ='Recipe was succefffully uploded '
  constructor() {
    super();

    this._addHandelShowWindow();
    this._addHandelHideWindowWindow();

  }

_addHandelShowWindow(){

this._btnwOpen.addEventListener('click',this.togglerWindow.bind(this))
  }

addHandelUpload(handler){
  
    this._parentElment.addEventListener('submit',function(e){
    
    
      e.preventDefault();
    const dataArr=[...new FormData(this)]
    const data=Object.fromEntries(dataArr);
    handler(data);
// console.log(this._parentElment);

  // _addHandelHideWindowWindow().bind(this);
  })


 
  }

_addHandelHideWindowWindow(){
this._btnwClose.addEventListener('click',this.togglerWindow.bind(this))
this._overlay.addEventListener('click',this.togglerWindow.bind(this))
  }
  togglerWindow(){
    this._overlay.classList.toggle('hidden')
    this._winodw.classList.toggle('hidden')
}



}
export default new addRecipeView();
