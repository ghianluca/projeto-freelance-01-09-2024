const scrollingAlert = document.querySelector('.scrolling-alert');
const originalContent = scrollingAlert.innerHTML;
const numberOfDuplicates = 500;

scrollingAlert.innerHTML = originalContent.repeat(numberOfDuplicates);