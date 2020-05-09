
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
        this.state={
            visibility:false
        };

    }

    handleToggleVisibility(){
        this.setState((prevState) =>{
            return{
                visibility : !prevState.visibility
          };
        });
    }


    render(){
        return(
            <div>
            <h1>Visible Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' :'Show details'}</button>
            {
                this.state.visibility &&(
                    <div>
                        <p>Hey. these are some details</p>
                    </div>
                )
            }
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));






/*console.log('app is running');

const appRoot = document.getElementById('app');
let visibility =false;
const toggleVisibility =() => {
  visibility=!visibility;
  visible();
}

const visible=()=>{
    const template= (
        <div>
        <h1>Visible Toggle</h1>
        <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' :'Show details'}
        </button>
        {
            visibility &&(
                <div>
                    <p>Hey. these are some details</p>
                </div>
            )
        }
      
        </div>
    );
ReactDOM.render(template,appRoot);
}
visible();
*/