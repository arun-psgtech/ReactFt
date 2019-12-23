import React,{Component} from 'react';


class Filter extends Component{
render(){
    return (<div>
        <input type='text' placeholder='Enter Message' value={this.props.count}/>
    </div>);
    
}
}

export default Filter;