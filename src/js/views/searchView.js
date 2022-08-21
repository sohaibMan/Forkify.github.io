
 class SearchView{
_parentEl=document.querySelector('.search');

getQuery(){
    // console.log(this._parentEl.querySelector('.search__field').value);
    const query= this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
}
addHandlerSearch(handler){
    this._parentEl.addEventListener('submit',function(e){
        e.preventDefault();
        handler()
    })

}
_clearInput(){
    this._parentEl.querySelector('.search__field').value='';
}


}
export default new SearchView() ;