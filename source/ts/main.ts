let itemsInCart:number = 0;
let total:any = document.querySelector('#total');
document.querySelector('#productSection p a').addEventListener('click', () => {
    itemsInCart++;
    total.textContent('(' + itemsInCart + ')');
    console.log(itemsInCart);
});