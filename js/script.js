
const titleClickHandler = function(event){
  event.preventDefault();

  const clickedElement = this;


/* [DONE] remove class 'active' from all article links  */

 const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
/* [DONE] add class 'active' to the clicked link */

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

  function generateTitleLinks(customSelector = ''){
/* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
     titleList.innerHTML = '';

/* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);

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

      /* [DONE] add generated code to html variable */
      html +=linkHTML;

    /* [DONE] END LOOP: for each tag */
    }

    /* [DONE] insert HTML of all the links into the tags wrapper */
    wrapperTags.insertAdjacentHTML('beforeend', html);

  /* [DONE]END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event){
  /*[DONE] prevent default action for this event */
  event.preventDefault();

  /*[DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /*[DONE] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /*[DONE] find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for(let activeTagLink of activeTagLinks){
    /* remove class active */
    activeTagLink.classList.remove('active');

  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const allTagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */
  for(let allTagLink of allTagLinks){
    /* add class active */
    allTagLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
  /* START LOOP: for each link */
  for(let tagLink of tagLinks){
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();
