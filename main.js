$(document).ready(function(){
  // Inicializando o slider
  $('.slider-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    adaptiveHeight: true
  });

  // Controle pelos ícones personalizados (dots)
  $('.dotsbox .doticonbox').each(function(index){
    $(this).on('click', function(){
      // Ir para o slide correspondente
      $('.slider-1').slick('slickGoTo', index);

      // Remover a classe 'active' de todos os ícones
      $('.doticonbox').removeClass('active');

      // Adicionar a classe 'active' ao ícone clicado
      $(this).addClass('active');

      // Trocar o nome da cor com base no ícone selecionado
      const colorNames = ['green', 'silver', 'purple']; // Defina os nomes das cores aqui
      $('.div275 span').text(colorNames[index]); // Atualiza o texto do nome da cor
    });
  });

  // Atualizar o ícone ativo e nome da cor após troca automática do slide
  $('.slider-1').on('afterChange', function(event, slick, currentSlide){
    // Remover a classe 'active' de todos os ícones
    $('.doticonbox').removeClass('active');

    // Adicionar a classe 'active' ao ícone correspondente ao slide atual
    $('.doticonbox').eq(currentSlide).addClass('active');

    // Trocar o nome da cor com base no slide atual
    const colorNames = ['green', 'silver', 'purple']; // Nomes das cores
    $('.div275 span').text(colorNames[currentSlide]); // Atualiza o texto do nome da cor
  });
});

/*Slider-02*/

$(document).ready(function () {
  const colorNames = ['green', 'silver', 'purple'];

  // Inicializa o slider
  $('.slider-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    adaptiveHeight: true,
    pauseOnHover: false
  });

  // Clique no dotbox → troca o slide (a lógica de "active" vai acontecer no beforeChange)
  $('.dotbox').each(function (index) {
    $(this).on('click', function () {
      $('.slider-2').slick('slickGoTo', index);
    });
  });

  // Antes da troca de slide → atualiza o dot ativo e o nome da cor
  $('.slider-2').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.dotbox').removeClass('active');
    $('.dotbox').eq(nextSlide).addClass('active');
    $('.div277 span').text(colorNames[nextSlide]);
  });

  // Inicializa dot e nome da cor no primeiro load
  $('.dotbox').removeClass('active');
  $('.dotbox').eq(0).addClass('active');
  $('.div277 span').text(colorNames[0]);
});
