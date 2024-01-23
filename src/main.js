import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formSearch = document.querySelector('.form-search');
const searchBox = document.querySelector('.search-box');
const galleryImage = document.querySelector('.gallery');

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23963114-6d0d5d874ae460d9125bacd21';

formSearch.addEventListener('submit', function (event) {
  event.preventDefault();

  const query = encodeURIComponent(searchBox.value.trim());

  if (query.trim() === '') {
    iziToast.error({
      title: 'Error',
      message: 'Nothing found',
    });
    return;
  }

    showLoader();
    

  const apiUrl = `${BASE_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayImages(data.hits);
    })
    .catch(error => {
      console.error(error);

      
      hideLoader();
    });
});

function displayImages(images) {
  galleryImage.innerHTML = '';

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
    
  
  const markup = createMarkup(images);
  galleryList.innerHTML = markup;

  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  lightbox.refresh();
}

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
          <div class="imfo-section">
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

function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    // loader.style.display = 'block';
    loader.classList.add('visible');
  }
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    // loader.style.display = '';
    loader.classList.remove('visible');
  }
}