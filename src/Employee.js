import React,{Component} from 'react';
import Filter from './Filter';

class Employee extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
           count : 0
        }
        
     };
     onClickButton=(i)=>{
         alert('alert'+i);
        //  this.setState({count:i});
        // console.log('Entered');
        // console.log(this.state.count);
        // this.setState({count:this.state.count+1});
     };
    render(){
        return(
            <div>
        <ul>{Array.from(Array(10), (e, i) => {
    const value=`button${i}`;
return (<li key={i}><button id={value} type='button' className='foo'
onClick={()=>this.onClickButton(i)}>{i}</button>
</li>)
  })}</ul>

  <input type='text' id='testbox' value={this.state.count}></input>

        </div>);
    }
}

export default Employee;