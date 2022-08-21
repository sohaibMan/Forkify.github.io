import icons from 'url:../../img/icons.svg'

export default class view{
    // parnet class

    _data;
render(data){
this._data=data;
this._claer()
this._parentElment.insertAdjacentHTML('afterbegin',this._gernerateMarkup());

}
renderSpiner()
{
    this._claer();

  const markup=` 
  <div class='spinner'>
  <svg>
  <use href="${icons}#icon-loader"></use>
  </svg>
  </div> 

`
this._parentElment.insertAdjacentElement('beforeend',markup.toDomElement());
// console.log(markup);

// parentEl.insertAdjacentHMTM
// parentEl.innerHTML=+markup;
}
_claer(){
    this._parentElment.innerHTML='';
}
renderError(message=`${this._errorMsg}`){

  this._claer();

  const markup=` 
  <div class="error">
  <div>
    <svg>
      <use href="${icons}#icon-alert-triangle"></use>
    </svg>
  </div>
  <p>${message}</p>
</div> 
`

this._parentElment.insertAdjacentElement('beforeend',markup.toDomElement());
}
renderMessage(message=`${this._simpleMsg}`){

  this._claer();

  const markup=` 
<div class="message">
<div>
  <svg>
    <use href="${icons}#icon-smile"></use>
  </svg>
</div>
<p>${message}</p>
</div>

`

this._parentElment.insertAdjacentElement('beforeend',markup.toDomElement());
}


    

}