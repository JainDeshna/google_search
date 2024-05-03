const searchInput = document.getElementById('search-input');
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value;
 window.location.href = `https://www.google.com/search?q=${query}`;
});