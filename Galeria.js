class Galeria{
    constructor(src, contenedor) {
        this.src = src;
        this.contenedor = contenedor;
        this.currentIndex = 0;
        this.buttonL = document.createElement('button');
        this.buttonL.dataset.index = "0";
        this.buttonL.innerHTML =
            '<svg width="70px" height="80px" viewBox="0 0 50 80">\n' +
            '                <polyline fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round"\n' +
            '                          stroke-linejoin="round" points="\n' +
            '\t                        45.63,75.8 0.375,38.087 45.63,0.375 "/>\n' +
            '            </svg>\n'
        this.buttonR = document.createElement('button');
        this.buttonL.dataset.index = "1";
        this.buttonR.innerHTML = '' +
            '            <svg width="70px" height="80px" viewBox="0 0 50 80">\n' +
            '                <polyline fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round"\n' +
            '                          stroke-linejoin="round" points="\n' +
            '\t                           0.375,0.375 45.63,38.087 0.375,75.8 "/>\n' +
            '            </svg>'
        this.images = [];
        for(let i=0; i<this.src.length; i++){
            const imagen = document.createElement('img');
            imagen.src = src[i];
            this.images.push(imagen);
        }
        this.current = this.images[0];
        this.contenedor.appendChild(this.buttonL)
        this.contenedor.appendChild(this.current)
        this.contenedor.appendChild(this.buttonR)
        this.nextImage = this.nextImage.bind(this);
        this.buttonR.addEventListener('click', this.nextImage);
        this.preImage = this.preImage.bind(this);
        this.buttonL.addEventListener('click', this.preImage);
    }

    nextImage(){
        this.currentIndex ++;
        if (this.currentIndex === this.images.length){
            this.currentIndex = 0
        }
        this.current = this.images[this.currentIndex];
        this.contenedor.childNodes[2].replaceWith(this.current);
    }

    preImage(){
        this.currentIndex --;
        if (this.currentIndex < 0){
            this.currentIndex = this.images.length-1;
        }
        this.current = this.images[this.currentIndex];
        this.contenedor.childNodes[2].replaceWith(this.current);
    }

}

const REGALOS_ENLACES = [
    'assets/imgs/Imagen1.png',
    'assets/imgs/Imagen2.png',
    'assets/imgs/Imagen3.png',
    'assets/imgs/Imagen4.png',
    'assets/imgs/Imagen5.png'
];

const cont = document.querySelector('#datos')
const galeria = new Galeria(REGALOS_ENLACES, cont)