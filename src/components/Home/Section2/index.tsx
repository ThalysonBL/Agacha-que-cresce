import './styles.scss'
import notebook from '../../../assets/notebook.png';
import celular from '../../../assets/PHONE.png';



const Section2 = () =>{
  return(
    <div className="container-section2">
      <div className="black-700"></div><div className="black-900"></div><div className="gray-900"></div>
     <h2>ONDE E QUANDO QUISER!</h2>

      <div className="note-cell">
        <img src={notebook} alt="notebook" />
        <img className="cell" src={celular} alt="celular" />
      </div>
      <p>
      Adquirindo o programa de treinamento <span>Agacha que Cresce 2.0 </span>
      você pode acessar seu app de qualquer lugar e da maneira que você quiser! 
      Além do celular e do computador, também é possível treinar com sua smart tv.
      </p>
    </div>
  )
}

export default Section2;