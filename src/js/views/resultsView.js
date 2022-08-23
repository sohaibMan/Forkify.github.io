import previewVue from './previewVue.js';

class ResultsView extends previewVue{
_errorMsg=`we could not find your query , Please try again with another name `
_parentElment=document.querySelector('.results')

}

export default new ResultsView();