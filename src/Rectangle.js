import React,{Component} from 'react';


class Rectangle extends Component{


    showValue = (event,value)=>{
        
        if(event['currentTarget'].id.value===value){
            alert(value);
        }
        event.stopPropagation();
    };


    render(){
        return (<div id='Outer' style={{height: '100vh',
            width: '100%',
            backgroundColor: 'cornflowerblue',
            alignContent: 'center'}}  onClick={(e)=>this.showValue(e,'Outer')}    >outer
        <div id='Middle' style={{height: '50%',
    width: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '15%',
    marginLeft: '18%'
    
    
    
    }}  onClick={(e)=>this.showValue(e,'Middle')}    >Middle
        <div id='Inner'  style={{height: '25%',
    width: '25%',
    backgroundColor: 'green',
    marginTop: '16%',
    marginLeft: '16%'
    
    
    }}   onClick={(e)=>this.showValue(e,'Inner')}>Inner</div>
        </div>
        </div>);
    }
}

export default Rectangle;