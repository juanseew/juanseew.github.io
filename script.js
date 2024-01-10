let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

function showPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page, index) => {
    page.style.display = index + 1 === pageNumber ? 'block' : 'none';
  });
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showPage(currentPage);
});
