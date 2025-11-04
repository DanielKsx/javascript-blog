
const titleClickHandler = function(event){
  event.preventDefault();

  const clickedElement = this;


/* [DONE] remove class 'active' from all article links  */

 const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
/* [IN PROGRESS] add class 'active' to the clicked link */

    clickedElement.classList.add('active');


/* [DONE] remove class 'active' from all articles */

 const activeArticles = document.querySelectorAll('.post.active');

    for(let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

/* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');


/* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);


/* [DONE]add class 'active' to the correct article */

  targetArticle.classList.add('active');
};
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks(){

/* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
     titleList.innerHTML = '';

/* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector);


    for(let article of articles) {

    /* [DONE] get the article id */

      const articleId = article.getAttribute('id');


    /*[DONE] find the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;


    /* create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';


    /* insert link into titleList */

      titleList.insertAdjacentHTML('beforeend', linkHTML);
    }
      const links = document.querySelectorAll('.titles a');

    for(let link of links){
     link.addEventListener('click', titleClickHandler);
}
  }
generateTitleLinks();

function generateTags(){
  /* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* [DONE] START LOOP: for every article: */

  for(let article of articles) {

    /* [DONE] find tags wrapper */

    const wrapperTags = article.querySelector(optArticleTagsSelector);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE]get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    /* [DONE]split tags into array */

    const articleTagsArray = articleTags.split(' ');

    /* [DONE]START LOOP: for each tag */

    for(let tag of articleTagsArray) {

      /* [DONE]generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log('linkHTML:', linkHTML)

      /* [DONE] add generated code to html variable */
      html +=linkHTML;

    /* [DONE] END LOOP: for each tag */
    }

    /* [DONE] insert HTML of all the links into the tags wrapper */
    wrapperTags.insertAdjacentHTML('beforeend', html);
    console.log('dodano link:', wrapperTags)
  /* [DONE]END LOOP: for every article: */
  }
}

generateTags();


