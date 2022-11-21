import Cards from './cards';
import img1 from './imagens/cilios.png'
import img2 from './imagens/henna.png'
import img3 from './imagens/laser.png'
import img4 from './imagens/sobrancelha.png'

function Card(){
    return(
        <>
        <Cards img={img1} title='Cílios' description='Um olhar volumoso e glamouroso 24 horas por dia ressaltando a sua personalidade de modo único e lhe garantindo muito mais segurança e conforto por você ter a mais absoluta certeza de que estará sempre na sua melhor versão.' price='100,00'/>
        <Cards img={img2} title='Desing com Henna' description='Um realce especial para o seu olhar com sobrancelhas sem falhas e delineadas, unindo as técnicas de design de sobrancelha com aplicação de henna' price='50,00'/>
        <Cards img={img3} title='Depilação com Laser' description='A depilação a laser é um dos procedimentos mais procurados por quem quer se ver livre dos pelos' price='100,00'/>
        <Cards img={img4} title='Micro' description='Você gostaria de ter uma sobrancelha mais volumosa, sem falhas e com o desenho perfeito? A solução está nas mais modernas técnicas de micropigmentação fio a fio.' price='150,00'/>
        </>
    )
}
export default Card;

