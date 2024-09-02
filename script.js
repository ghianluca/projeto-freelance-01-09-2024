const scrollingAlert = document.querySelector('.scrolling-alert');
const originalContent = scrollingAlert.innerHTML;
const numberOfDuplicates = 500; // Ajuste o número conforme necessário

scrollingAlert.innerHTML = originalContent.repeat(numberOfDuplicates);