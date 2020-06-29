class Inimigo extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, alturaSprite, larguraSprite, velocidade){
    super(matriz, imagem, x, variacaoY, largura, altura, alturaSprite, larguraSprite)
    this.velocidade = velocidade;
    this.x = width;
   }
  
    move() {
 this.x = this.x - this.velocidade
    
 } 
    aparece() {
      this.x = width;
    }
}