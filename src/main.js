import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const formSearch = document.querySelector('.form-search');
const searchBox = document.querySelector('.search-box');
const galleryImage = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23963114-6d0d5d874ae460d9125bacd21';

loader.style.display = 'none';
formSearch.addEventListener('submit', function (event) {
  event.preventDefault();

  const query = encodeURIComponent(searchBox.value.trim());

  if (query.trim() === '') {
    iziToast.error({
      title: 'Error',
      message: 'Enter search data',
    });
    return;
  }
  
   const clearSearch = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captions: true,
    captionDelay: 250,
  });

 function displayImages(images) {
  galleryImage.innerHTML = '';
   loader.style.display = 'block';
   
  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    loader.style.display = 'none';
    return;
  }
      
  const markup = createMarkup(images);
   galleryImage.innerHTML = markup;
  
   clearSearch.refresh();
   }
  formSearch.reset();
   
 const apiUrl = `${BASE_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
          displayImages(data.hits);
    })
    .catch(error => {
            console.error(error);
    });
   
});


function createMarkup(images) {
  return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width="360"
            />
          </a>
          <div class="info-section">
            <div class="section">
              <h2 class="tittle">Likes</h2>
              <p class="quantity">${likes}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Views</h2>
              <p class="quantity">${views}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Comments</h2>
              <p class="quantity">${comments}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${downloads}</p>
            </div>
          </div>
        </li>`)
    .join('');
}
