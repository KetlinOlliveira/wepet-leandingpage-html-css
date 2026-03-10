const linksMenu = document.querySelector('.nav-menu a[href^="#"]');

Array.from(linksMenu).forEach(link => {
    link.addEventListener('click', function(event) {
        //impede o salto brusco
        event.preventDefault();

        //pega o id onde o link aponta (ex: formulario)
        const id = this.getAttribute('href');

        //seleciona o elemento de destino
        const targetSection = document.querySelector(id);

        if(targetSection){

            const headerHeight = document.querySelector('.header').offsetHeight;
            const elementPosition = targetSection.offsetTop;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

    });
});