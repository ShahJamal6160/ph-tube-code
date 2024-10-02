//1 fetch, load and show categories on html

//create loadCategories-arrow function

const loadCategories = () => {
    // console.log('create categories')
    //fetch
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displyaCategories(data.categories))
    .catch((error => console.log(error)));
}


// {category_id: '1001', category: 'Music'}
// category: "Music"

//create DisplyaCategories
const displyaCategories = (categories) => {
    // console.log(data)
    const categoryContainer = document.getElementById('categories')
    categories.forEach((item) =>{
       const button = document.createElement('button')
       button.classList = 'btn';
       button.innerText = item.category;
       categoryContainer.append(button);
    })

}


loadCategories()

