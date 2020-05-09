import React from 'react';


const Action =(props)=>(
    
      <div>
            <button 
                  className="big-button"
                  onClick={props.handlePick}
                  disabled={!props.hasOptions}
                  >
                  Bugün ne yapsam?
                  
       </button>
      
      </div>
   
);

export default Action;