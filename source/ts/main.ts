let itemsInCart:number = 0;
let total:HTMLDivElement = document.querySelector('#total');
let $buttons:any = $('#productSection p a')

$buttons.on('click', () => {
    itemsInCart++;
    total.textContent = '(' + itemsInCart + ')';
    console.log(itemsInCart);
});

