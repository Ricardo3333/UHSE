
import '../assets/index.css';
import home from '../assets/todas.png';
import anel from '../assets/imagem_home/anel.png'
import anel_p from '../assets/imagem_home/anel_p.png'
import capa from '../assets/imagem_home/capa.png'
import kit from '../assets/imagem_home/kit.png'
import penis from '../assets/imagem_home/penis.png'
import vagina from '../assets/imagem_home/vagina.png'
import vibra from '../assets/imagem_home/vibra.png'
import mini_vibrador from '../assets/imagem_home/mini_vibrador.png'

import gel from '../assets/imagem_segunda/gel.png'
import kmede from '../assets/imagem_segunda/kmede.png'
import kuloco from '../assets/imagem_segunda/kuloco.png'
import lubri from '../assets/imagem_segunda/lubri.png'
import pimen from '../assets/imagem_segunda/pimen.png'  
import pomada from '../assets/imagem_segunda/pomada.png'
import touro from '../assets/imagem_segunda/touro.png'
import vaca from '../assets/imagem_segunda/vaca.png'


import Carousel from 'react-material-ui-carousel'



function Home() {
    return (

        <>


            


        <div className='mae'>

            <div>

                <img src={home} />

            </div>



            <div className='texto-inicial'>  
            
            <h1>

                    Bem vindo a UHSE!  

            </h1>

                
            <h2>

                Seu Sexy-Shop virtual!
            </h2>

            </div>


            <div className='imagem_inicial'>

                <Carousel className='corrosel'>

                    <div className='products'>

                        <div className='product-single'>


                            <img src={anel} />

                            <div>
                                <h2>  Anel Peniano </h2>
                            </div>
                        </div>


                        <div className='product-single'>

                            <img src={anel_p} />
                            <div>
                                <h2> Anel Vibrador </h2>
                            </div>
                        </div>



                        <div className='product-single'>

                            <img src={capa} />

                            <div>
                                <h2> Capa Penina </h2>
                            </div>


                        </div>

                        <div className='product-single'>
                            <img src={mini_vibrador} />
                            <div>
                                <h2>Mini Vibrador</h2>
                            </div>


                        </div>
                    </div>




                    <div className='products'>

                        <div className='product-single'>

                            <img src={penis} />

                            <div>
                                <h2>Penis de Borracha</h2>
                            </div>
                        </div>
                        <div className='product-single'>

                            <img src={vibra} />
                            <div>
                                <h2>Vibrador</h2>
                            </div>
                        </div>
                        <div className='product-single'>

                            <img src={vagina} />
                            <div>
                                <h2>Vagina de Borracha</h2>
                            </div>
                        </div>
                        <div className='product-single'>
                            <img src={kit} />
                            <div>
                                <h2>Kit Intimo</h2>
                            </div>

                        </div>
                    </div>


                </Carousel>




            </div>



            {/* -------------------------------------------------- */}


            <div className='imagem_segunda'>

                <Carousel className='corrosel'>

                    <div className='products'>

                        <div className='product-single'>


                            <img src={touro} />

                            <div>
                                <h2>  Tesão de Touro </h2>
                            </div>
                        </div>


                        <div className='product-single'>

                            <img src={vaca} />
                            <div>
                                <h2> Tesão de Vaca </h2>
                            </div>
                        </div>



                        <div className='product-single'>

                            <img src={pomada} />

                            <div>
                                <h2> Pomada Senssibilizante</h2>
                            </div>


                        </div>

                        <div className='product-single'>
                            <img src={pimen} />
                            <div>
                                <h2>Gel de Pimenta</h2>
                            </div>


                        </div>
                    </div>




                    <div className='products'>

                        <div className='product-single'>

                            <img src={lubri} />

                            <div>
                                <h2>Lubrificante de Morango</h2>
                            </div>
                        </div>


                        <div className='product-single'>

                            <img src={kuloco} />
                            <div>
                                <h2>Kuloco Gel</h2>
                            </div>
                        </div>


                        <div className='product-single'>

                            <img src={kmede} />
                            <div>
                                <h2>Lubrificante</h2>
                            </div>
                        </div>
                        <div className='product-single'>
                            <img src={gel} />
                            <div>
                                <h2>Gel Íntimo</h2>
                            </div>

                        </div>
                    </div>


                </Carousel>




            </div>


            </div>






        </>


    )
}



export default Home;