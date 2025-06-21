//tooltip dos ícones da seção sobre
function mostrarTooltip(e){
  const elementoIcone = e.target;
  const elementoDescricao = elementoIcone.nextElementSibling;
  if (elementoDescricao){
    elementoDescricao.classList.add('visivel');
  }

};

function esconderTooltip(e){
  const elementoIcone = e.target;
  const elementoDescricao = elementoIcone.nextElementSibling;
  if (elementoDescricao){
    elementoDescricao.classList.remove('visivel');
  }  
}

document.querySelectorAll( '.tooltip-sobre' ).forEach((element)=>{
  element.addEventListener('mouseenter', mostrarTooltip);
  element.addEventListener('mouseleave', esconderTooltip);
});

//abas do cardápio
function selecionarAbaCardapio(e){
  document.querySelectorAll( '.menu-cardapio ul li' ).forEach((element)=>{
    if (element.classList.contains('ativo')){
      element.classList.remove('ativo');
    }    
  });

  e.target.classList.add('ativo');

  // listar os itens  

  const containerCardapio = document.querySelector('.itens-cardapio');
  const categoria = e.target.dataset.categoria;
  const itensCategoria = cardapio.filter( (item)=>{
    if (item.categoria === categoria) return true;
  });  

  let cards = '';
  for (let i = 0; i<= itensCategoria.length - 1; i++){
    let card = '<div class="card-item-cardapio">' +
                 '<img src="'+ itensCategoria[i].imagem +'">' +                                
                   '<div class="card-item-info">' +
                     '<h3>'+ itensCategoria[i].nome +'</h3>'+
                     '<span class="descricao-item">'+ itensCategoria[i].descricao+ '</span>'+                                
                     '<span class="valor-item">'+ itensCategoria[i].valor.toLocaleString('pt-BR', { 
                                                    style: 'currency', 
                                                    currency: 'BRL' 
                                                  }) +'</span>' +
                     '<button class="btn">Mais informações</button>'+
                   '</div>' +                            
                '</div>';

    cards += card;              
  };

  containerCardapio.innerHTML = cards;

  
}

document.querySelectorAll('.menu-cardapio ul li').forEach((element)=>{
  element.addEventListener('click', selecionarAbaCardapio)
});


//SLIDER DA ÁREA DE EVENTOS
function trocarSlider(e){
  const index = e.target.dataset.index;
  console.log(index)

  const larguraSlider = document.querySelector('.slider-item').scrollWidth;
  document.querySelector( '.slider-area' ).style.left = '-' + ((index - 1) * larguraSlider) + 'px';
}

document.querySelectorAll('.slider-controle').forEach((element)=>{
  element.addEventListener('click', trocarSlider)
});