import './styles.scss'   
import imgIsadora from '../../../assets/MODELO.png';

export const HomeInitial = () => {
    return(
        <div className="container">
            <div className="content">
                <div className="content-metodo">
                    <h1><span>BIT</span> TRAINERS
                    </h1>
                        <h2>AGACHA QUE 
                            <p>CRESCE</p>
                            <span>2.0</span>
                        </h2>
                </div>
                    <div className="text-content">
                        <p>
                            CONQUISTE AS <span className="space">PERNAS</span> E O <span>BUMBUM</span> DOS SONHOS!
                        </p>
                        
                    </div>
                    <a href="https://www.instagram.com/thalysonbrito_/">QUERO TREINAR AGORA</a>
                    

                    
                    
                    
            </div>
                <img src={imgIsadora} alt="Personal Isadora"/>
        </div>
    )
}

