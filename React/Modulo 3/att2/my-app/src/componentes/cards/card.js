import Cards from './cards';
import img1 from './imagens/cilios.png'
import img2 from './imagens/henna.png'
import img3 from './imagens/laser.png'
import img4 from './imagens/sobrancelha.png'

function Card(){
    return(
        <>
        <div id='cilios'>
        <Cards img={img1} title='Cílios' description='Um olhar volumoso e glamouroso 24 horas por dia ressaltando a sua personalidade de modo único e lhe garantindo muito mais segurança e conforto por você ter a mais absoluta certeza de que estará sempre na sua melhor versão.' price='100,00'/>
        </div>
        <div id='henna'>
        <Cards img={img2} title='Desing com Henna' description='O design deve ser suave, levando equilíbrio aos traços, dando graça e harmonia à face. A utilização da henna é o primeiro passo, pois sua permanência é temporária e sua composição é à base de uma tintura natural.' price='50,00'/>
        </div>
        <div id='laser'>
        <Cards img={img3} title='Depilação com Laser' description='A depilação a laser é um dos procedimentos mais procurados por quem quer se ver livre dos pelos.' price='100,00'/>
        </div>
        <div id='micro'>
        <Cards img={img4} title='Micro' description='Você gostaria de ter uma sobrancelha mais volumosa, sem falhas e com o desenho perfeito? A solução está nas mais modernas técnicas de micropigmentação fio a fio.' price='150,00'/>
        </div>
        </>
    )
}
export default Card;

