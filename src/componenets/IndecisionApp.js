import React from 'react';
import AddOptions from './AddOption.js';
import Action from './Action.js';
import Header from './Header.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';




export default class IndecisionApp extends React.Component{
state ={
  options: [],
  selectedOption: undefined
}
handleClearSelectedOptions =()=>{
  this.setState(()=>({selectedOption:undefined}));
}

handleDeleteOptions=()=>{ 
  this.setState(()=>({options:[]}));
 }

 handleDeleteOption=(optionToRemove)=> {
  this.setState((prevState) => ({
    options: prevState.options.filter((option) => optionToRemove !== option)
  }));
}

handlePick=()=>{
  const randomNum = Math.floor(Math.random() * this.state.options.length);
  const option =this.state.options[randomNum];
  this.setState(()=>({selectedOption: option}));
}

handleAddOption=(option)=>{
  if(!option){
    return 'Boş değer giremezsin';
  }else if(this.state.options.indexOf(option)>-1){
    return 'Daha önce listeye eklenmiş';
  }

  this.setState((prevState)=>({
    options: prevState.options.concat([option])
  }));


}
    constructor(props){
      super(props);
      this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
      this.handlePick=this.handlePick.bind(this);
      this.handleAddOption=this.handleAddOption.bind(this);
      this.handleDeleteOption=this.handleDeleteOption.bind(this);
      this.state ={
        options: []
      };
    }
    componentDidMount(){
  
  try{
    const json=localStorage.getItem('options');
    const options=JSON.parse(json);
    
    if(options){
      this.setState(()=>({options}));
    }
  }catch(e){
    //bişey yapmaa
  
  
  }
  
    
    }
    componentDidUpdate(prevProps,prevState){
      if(prevState.options.length!==this.state.options.length){
        const json= JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
      }
      console.log('saving data');
    }
    
    render() {
      const title='Ne yapsam?';
      const subtitle='Birşeyler yapmalıyım';
      
      return(
        <div>
          <Header title={title} subtitle={subtitle}/>
            <div className="container">
              <Action 
                hasOptions={this.state.options.length>0} 
                handlePick={this.handlePick}
              />

                <div className="widget">
                  <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                  />
                  <AddOptions 
                    handleAddOption={this.handleAddOption}
                  />
                  <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOptions={this.handleClearSelectedOptions}
                  />
                </div>
            </div>
        </div>
      );
  
    }
  }
  
  
