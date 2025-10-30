/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
}); */



const titleClickHandler = function(event){
  console.log(event);

  /* remove class 'active' from all article links  */

  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}











/* sciaga
const nazwaList = document.querySelector('.klasa');

const items = nazwaList.querySelectorAll('lista np');

const dowolnaNazwa = function() {
    console.log(this);
    const clickedElement = this;

    clickedElement.classList.add('klasa bez kropki')

    const time = clickedElement.getAttribute("atrybut");
    console.log(time);

};
for(const item of items) {

    item.addEventListener('click', dowolnaNazwa)
}  
    
*/