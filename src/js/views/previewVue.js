import view from "./view";
import icons from 'url:../../img/icons.svg'

export default class previewVue extends view{


_gernerateMarkup(){
// console.log(el._data);
return this._data.map(this._gernerateMarkupPreview).join(' ');


  }

_gernerateMarkupPreview(el){
  const id=window.location.hash.slice(1);
  // console.log("🚀 ~ file: resultsView.js ~ line 26 ~ ResultsView ~ _gernerateMarkupPreview ~ id", id)

    return  `
     <li class="preview">
            <a class="preview__link ${id===el.id?'preview__link--active':''}" href="#${el.id}">
              <figure class="preview__fig">
                 <img src="${el.image_url}" alt="${el.title}"/>  
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${el.title}</h4>
                <p class="preview__publisher">${el.publisher}</p>
            
              </div>
              <div class="preview__user-generated ${el.key?'':'hidden'}">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
            </a>

          </li>
    `
  }


}

