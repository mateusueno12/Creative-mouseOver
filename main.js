let banner = document.querySelector('.banner');

banner.onmousemove = function(e) {
    // Calcula a posição do mouse em relação ao elemento banner
    let x = e.pageX - banner.offsetLeft;
    let y = e.pageY - banner.offsetTop;

    // Atualiza as variáveis CSS com as coordenadas
    banner.style.setProperty('--x', x + 'px');
    banner.style.setProperty('--y', y + 'px');
};
