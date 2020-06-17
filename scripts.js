window.addEventListener('load', function (){
	new Glider(document.querySelector('.slider__lista'),{
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: '.slider__indicadores',
    arrows: {
       prev: '.slider__anterio',
       next: '.slider__siguiente'

        }  

	});	
});