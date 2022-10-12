const mainHeader = document.querySelector('.main-header');
const header = document.querySelector('header');

if(mainHeader && header) {
    const headerHeight = header.getBoundingClientRect().height;
    mainHeader.style.paddingTop = headerHeight + 'px';
}