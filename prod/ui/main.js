let itemsInCart = 0;
let total = document.querySelector('#total');
document.querySelector('#productSection p a').addEventListener('click', () => {
    itemsInCart++;
    total.textContent('(' + itemsInCart + ')');
    console.log(itemsInCart);
});
