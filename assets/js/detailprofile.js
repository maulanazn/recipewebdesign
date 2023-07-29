let recipesButton = document.querySelector('.user-creation-interest .recipe-button');
let bookmarkButton = document.querySelector('.user-creation-interest .bookmark-button')
let likeButton = document.querySelector('.user-creation-interest .like-button')
let recipeContent = document.querySelector('.recipe-content');
let bookmarkContent = document.querySelector('.recipe-bookmark');
let likedContent = document.querySelector('.recipe-like');

bookmarkContent.classList.add('recipe-bookmark-disappeared');
likedContent.classList.add('recipe-like-disappeared');

recipesButton.addEventListener('click', getClicked => {
    if (getClicked) {
        bookmarkButton.style.opacity = 0.3;
        likeButton.style.opacity = 0.3;    
        recipeContent.classList.remove('recipe-content-disappeared')
    }

    recipesButton.style.opacity = 1;
    bookmarkContent.classList.add('recipe-bookmark-disappeared');
    likedContent.classList.add('recipe-like-disappeared');
})

bookmarkButton.addEventListener('click', getClicked => {
    if (getClicked) {
        recipesButton.style.opacity = 0.3;
        likeButton.style.opacity = 0.3;
        bookmarkContent.classList.remove('recipe-bookmark-disappeared');
    }
    
    bookmarkButton.style.opacity = 1;
    recipeContent.classList.add('recipe-content-disappeared');
    likedContent.classList.add('recipe-like-disappeared');
})

likeButton.addEventListener('click', getClicked => {
    if (getClicked) {
        recipesButton.style.opacity = 0.3;
        bookmarkButton.style.opacity = 0.3;
        likedContent.classList.remove('recipe-like-disappeared');
    }
    
    likeButton.style.opacity = 1;
    recipeContent.classList.add('recipe-content-disappeared');
    bookmarkContent.classList.add('recipe-bookmark-disappeared');
})