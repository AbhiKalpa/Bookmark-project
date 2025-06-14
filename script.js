alert("this is bookmark created bye me")
document.getElementById('bookmark-form').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
  e.preventDefault();

  const name = document.getElementById('siteName').value;
  const url = document.getElementById('siteURL').value;

  if (!name || !url) {
    alert("Please fill out both fields!");
    return;
  }

  const bookmark = {
    name,
    url
  };

  let bookmarks = localStorage.getItem('bookmarks')
    ? JSON.parse(localStorage.getItem('bookmarks'))
    : [];

  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  document.getElementById('bookmark-form').reset();
  showBookmarks();
}

function showBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  const bookmarksList = document.getElementById('bookmarksList');

  bookmarksList.innerHTML = '';

  bookmarks.forEach((bookmark, index) => {
    bookmarksList.innerHTML += `
      <div>
        <h3>${bookmark.name}</h3>
        <a href="${bookmark.url}" target="_blank">Visit</a>
      </div>
      <hr>
    `;
  });
}

// Load bookmarks on page load
document.addEventListener('DOMContentLoaded', showBookmarks);


