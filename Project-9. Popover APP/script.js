const popover_btn_element = document.getElementById('popover_btn');
const popover_element = document.getElementById('popover');
const close_btn_element = document.querySelector('.close_btn');

popover_btn_element.addEventListener('click', () => {
    popover_element.style.display = 'block';
});

close_btn_element.addEventListener('click', () => {
    popover_element.style.display = 'none';
});