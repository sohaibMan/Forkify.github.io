import icons from 'url:../../img/icons.svg'

export default class view{
    // parnet class

    _data;
render(data){
  if(!data || Array.isArray(data) &&  data.length===0)return this.renderError();
this._data=data;
this._claer()
this._parentElment.insertAdjacentHTML('afterbegin',this._gernerateMarkup());
}
update(data){

if(!data || Array.isArray(data) &&  data.length===0)return this.renderError();
this._data=data;
const newMarkup=this._gernerateMarkup();
const newDom=document.createRange().createContextualFragment(newMarkup);
const newElments=Array.from(newDom.querySelectorAll('*'))
const currnetElments=Array.from(this._parentElment.querySelectorAll('*'))

newElments.forEach((newEl,i)=>{

const curEl=currnetElments[i];
// comparing nodes
// console.log(newEl.isEqualNode(curEl))
//replace elemnt that have text only ;

if(!newEl.isEqualNode(curEl)  && newEl.firstChild?.nodeValue.trim() !== `` ){
  // console.log(newEl.firstChild.nodeValue);
// curEl.textContent=newEl.textContent;
// console.log(curEl,newEl);
}
// update attribues from current to new
if(!newEl.isEqualNode(curEl)){

Array.from(newEl.attributes).forEach(atrr=>curEl.setAttribute(atrr.name,atrr.value))
//set the attribute of the cur element to the attributes of the new elments 
}

 



})



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