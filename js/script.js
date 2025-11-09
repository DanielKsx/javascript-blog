 const opts = {
  tagSizes: {
    count: 5,
    classPrefix: 'tag-size-',
  },
};

const select = {
  all: {
    articles: '.post',
    linksTo: {
      tags: 'a[href^="#tag-"]',
      authors: 'a[href^="#author-"]',
    },
  },
  article: {
    title: '.post-title',
    tags: '.post-tags .list',
    author: '[data-author]',
  },
  listOf: {
    titles: '.titles',
    tags: '.tags.list',
    authors: '.list.authors',
  },
};

const titleClickHandler = function(event){
  event.preventDefault();

  const clickedElement = this;


/* [DONE] remove class 'active' from all article links  */

 const activeLinks = document.querySelectorAll(select.listOf.titles + ' a.active');

    for(let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
/* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active');


/* [DONE] remove class 'active' from all articles */

 const activeArticles = document.querySelectorAll(select.all.articles + '.active');

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

  function generateTitleLinks(customSelector = ''){
/* [DONE] remove contents of titleList */

  const titleList = document.querySelector(select.listOf.titles);
     titleList.innerHTML = '';

/* [DONE] find all articles */

  const articles = document.querySelectorAll(select.all.articles + customSelector);

    for(let article of articles) {

    /* [DONE] get the article id */

      const articleId = article.getAttribute('id');


    /*[DONE] find the title element */

      const articleTitle = article.querySelector(select.article.title).innerHTML;


    /* [DONE]create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';


    /* [DONE] insert link into titleList */

      titleList.insertAdjacentHTML('beforeend', linkHTML);
    }
      const links = document.querySelectorAll(select.listOf.titles + ' a');

    for(let link of links){
     link.addEventListener('click', titleClickHandler);
}
    /* [DONE] Automatically open the first matching article*/
    const firstLink = document.querySelector(select.listOf.titles + ' a');
    if (firstLink) firstLink.click();
  }

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
  const activeTagLinks = document.querySelectorAll(select.all.linksTo.tags + '.active');

  /*[DONE] START LOOP: for each active tag link */
  for(let activeTagLink of activeTagLinks){
    /*[DONE] remove class active */
    activeTagLink.classList.remove('active');

  /* [DONE]END LOOP: for each active tag link */
  }
  /*[DONE] find all tag links with "href" attribute equal to the "href" constant */
  const allTagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /*[DONE] START LOOP: for each found tag link */
  for(let allTagLink of allTagLinks){
    /* add class active */
    allTagLink.classList.add('active');
  /*[DONE] END LOOP: for each found tag link */
  }

  /*[DONE] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /*[DONE] find all links to tags */
  const tagLinks = document.querySelectorAll(select.all.linksTo.tags);
  /*[DONE] START LOOP: for each link */
  for(let tagLink of tagLinks){
    /*[DONE] add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
  /*[DONE] END LOOP: for each link */
  }
}

function generateAuthors(){
  /* [NEW] create a new variable allAuthors with an empty object */
  let allAuthors = {};

  /* find all articles */
  const articles = document.querySelectorAll(select.all.articles);

  /* START LOOP: for every article: */
  for(let article of articles){

    /* get author from data-author attribute */
    const author = article.getAttribute('data-author');

    /* generate HTML of the author link */
    const linkHTML = '<p class="post-author"><a href="#author-' + author + '">' + author + '</a></p>';
    const titleEl = article.querySelector(select.article.title);
    titleEl.insertAdjacentHTML('afterend', linkHTML);

  /* [NEW] count authors */
  if(!allAuthors[author]) {
    allAuthors[author] = 1;
  } else {
    allAuthors[author]++;
  }
  /* END LOOP: for every article: */
}
/* [NEW] find list of authors in right column */
  const authorList = document.querySelector(select.listOf.authors);

  /* [NEW] create variable for all author links HTML code */
  let allAuthorsHTML = '';

  /* [NEW] START LOOP: for each author in allAuthors: */
  for (let author in allAuthors) {
    allAuthorsHTML += '<li><a href="#author-' + author + '"><span>' + author + '</span></a> (' + allAuthors[author] + ')</li>';
  }

  /* [NEW] add HTML from allAuthorsHTML to authorList */
  authorList.innerHTML = allAuthorsHTML;
}

function authorClickHandler(event){

  /*[DONE] prevent default action for this link */
  event.preventDefault();

  /* [DONE] make new constant "clickedElement" and give it the value of "this" */
  const clickedElement = this;


  /* [DONE] make new constant "href" and read the attribute "href" from the clicked element */
  const href = clickedElement.getAttribute('href');


  /* [DONE] make new constant "author" and extract author name from href */
  const author = href.replace('#author-', '');


  /* [DONE] find all active links to authors */
  const activeAuthors = document.querySelectorAll(select.all.linksTo.authors + '.active');

  /* [DONE] START LOOP: for each active author link: remove class 'active' */
  for(let activeAuthor of activeAuthors){
    activeAuthor.classList.remove('active');
  /* END LOOP */
  }
  /*[DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /*[DONE] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors(){
  /* [DONE]find all links to authors */
  const authorLinks = document.querySelectorAll(select.all.linksTo.authors);

  /* [DONE] START LOOP: for each link */
  for(let authorLink of authorLinks){
    /* [DONE]add event listener to link calling authorClickHandler */
    authorLink.addEventListener('click', authorClickHandler);

  /* END LOOP */
  }
}

function calculateTagsParams(tags){
  const params ={ max: 0, min: 9999999 };

  for(let tag in tags){
    if(tags[tag] > params.max) {
      params.max = tags[tag];
    }
    if(tags[tag] < params.min) {
      params.min = tags[tag];
    }
  }
  return params;
}

function calculateTagClass(count , params){
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (opts.tagSizes.count - 1) + 1);

  return opts.tagSizes.classPrefix + classNumber;
}


function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  /*[DONE] find all articles */
  const articles = document.querySelectorAll(select.all.articles);

  /* [DONE] START LOOP: for every article: */
  for(let article of articles){
    /*[DONE] find tags wrapper */
    const wrapperTags = article.querySelector(select.article.tags);

    /* [DONE] make html variable with empty string */
    let html = '';
    /*[DONE] get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    /*[DONE] split tags into array */
    const articleTagsArray =  articleTags.split(' ');

    /*[DONE] START LOOP: for each tag */
    for(let tag of articleTagsArray){

      /*[DONE] generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';

      /*[DONE] add generated code to html variable */
      html += linkHTML;

      /*[DONE] [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]){
        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }

    /* END LOOP: for each tag */
    }
    /*[DONE] insert HTML of all the links into the tags wrapper */
  wrapperTags.innerHTML = html;

  /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(select.listOf.tags);

  /* [NEW] create variable for all links HTML code */
  const tagsParams = calculateTagsParams(allTags);
  let allTagsHTML = '';

/* [NEW] START LOOP: for each tag in allTags: */
for(let tag in allTags){
  /* [NEW] generate code of a link and add it to allTagsHTML */
  allTagsHTML += '<li><a class="' + calculateTagClass(allTags[tag], tagsParams) + '" href="#tag-' + tag + '"><span>' + tag + '</span></a> (' + allTags[tag] + ')</li> ';
}
/* [NEW] END LOOP: for each tag in allTags: */

/*[NEW] add HTML from allTagsHTML to tagList */
tagList.innerHTML = allTagsHTML;
}

generateTitleLinks();
generateTags();
addClickListenersToTags();
generateAuthors();
addClickListenersToAuthors();
