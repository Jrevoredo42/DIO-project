//function carrosel(){
    $('.owl-carousel').owlCarousel({
    loop:false, //loop de repetição no carousel
    margin:10, //margem entre um album e outro
    nav:false, // botao de navegação entre a lista de albuns acima das bolinhas
    responsive:{ //responsividade do carousel
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//};