import view from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends view {
  _parentElment = document.querySelector('.pagination');
  _gernerateMarkup() {
    //SECNARIONS
   

    // _data contains modle.state.search objes

    // search

    // results
    // resultsPerPage
    const numPages =Math.ceil(this._data.results.length / this._data.resultsPerPage);
    // console.log("🚀 ~ file: paginationView.js ~ line 17 ~ PaginationView ~ _gernerateMarkup ~ numPages", numPages)
const currentPage=this._data.page;
// console.log("🚀 ~ file: paginationView.js ~ line 19 ~ PaginationView ~ _gernerateMarkup ~ currentPage", currentPage)
     //PAGE 1 and there are other pages
     if(currentPage === 1 && numPages>1)
     return `   
     <button data-goto=" ${currentPage+1}" class="btn--inline pagination__btn--next">
     <span>Page  ${currentPage+1}</span>
     <svg class="search__icon">
       <use href="${icons}#icon-arrow-right"></use>
     </svg>
   </button> 
    `
    
       //other page
     if(currentPage<numPages)
       return `
       <button data-goto=" ${currentPage-1}" class="btn--inline pagination__btn--prev">
       <svg class="search__icon">
         <use href="${icons}#icon-arrow-left"></use>
       </svg>
       <span>Page ${currentPage-1}</span>
     </button>

     <button data-goto=" ${currentPage+1}" class="btn--inline pagination__btn--next">
     <span>Page  ${currentPage+1}</span>
     <svg class="search__icon">
       <use href="${icons}#icon-arrow-right"></use>
     </svg>
   </button> 
      `

     // last page
     if(currentPage ===numPages && numPages>1)
     return `
     <button data-goto=" ${currentPage-1}" class="btn--inline pagination__btn--prev">
     <svg class="search__icon">
       <use href="${icons}#icon-arrow-left"></use>
     </svg>
     <span>Page ${currentPage-1}</span>
   </button>
    `
     //PAGE 1 and threre  are  not other pages
     return ``;
  



  }
  addHandlerClick(handler){

this._parentElment.addEventListener('click',function(e){

const btn =e.target.closest('.btn--inline');
if(!btn) return;
const goToPage=+btn.dataset.goto;
// console.log("🚀 ~ file: paginationView.js ~ line 72 ~ PaginationView ~ this._parentElment.addEventListener ~ goToPage", goToPage)
// console.log("🚀 ~ file: paginationView.js ~ line 71 ~ PaginationView ~ this._parentElment.addEventListener ~ btn", btn)
handler(goToPage);
})

  }

}
export default new PaginationView();
