function ePaisagem(x,y){
    if (x>y){
        return "A imagem está em modo paisagem";
    } else if (y>x){
        return "A imagem está em modo normal";
    } else {
        return "A imagem está em modo retrato";
    }
}
console.log(ePaisagem(1080,1920));