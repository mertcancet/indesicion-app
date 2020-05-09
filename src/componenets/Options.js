import React from 'react';
import Option from './Option.js';

const Options =(props)=>(
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Yapıcaklarınız</h3>
      <button 
      className="button button--link"
      onClick={props.handleDeleteOptions}
      >
        Hepsini Kaldır
        
      </button>
    </div>

  
  {props.options.length===0 && <p className="widget__message">Listeye bişeyler ekleyerek başlayabilirsin</p>}
  {
    props.options.map((option,index) =>(
      <Option
        key={option}
        optionText={option} 
        count={index+1}
        handleDeleteOption={props.handleDeleteOption}
       />
  
   ))
  }
  </div>


  );

  export default Options;