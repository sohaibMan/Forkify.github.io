import view from "./view";
import icons from 'url:../../img/icons.svg'

class ResultsView extends view{
_errorMsg=`we could not find your query , Please try again with another name `
_parentElment=document.querySelector('.results')

_gernerateMarkup(){
// console.log(el._data);
return this._data.map(this._gernerateMarkupPreview).join(' ');
// image_url: "http://forkify-api.herokuapp.com/images/5566512470_9e98939ab3_z2766.jpg"
// publisher: "The Pioneer Woman"
// title: "Pasta Salad with Tomatoes, Zucchini, and Feta"
// 
/*

preview__link--active




*/
  }
  _gernerateMarkupPreview(el){
  

    return  `
     <li class="preview">
            <a class="preview__link preview__link--active" href="#${el.id}">
              <figure class="preview__fig">
                 <img src="${el.image_url}" alt="${el.title}" />  
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${el.title}</h4>
                <p class="preview__publisher">${el.publisher}</p>
                <div class="preview__user-generated">
                <!--
                  <svg>
                  <use href="${icons}#icon-user"></use>
                  </svg>
                  -->
                  </div>
              </div>
            </a>

          </li>
    `
  }


}

export default new ResultsView();