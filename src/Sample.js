import React from 'react';

class Sample extends React.Component {
    constructor() {
        super();
        this.state = {'data':''};

    }

    getFetchData=()=>{
        fetch('http://localhost:4000/data')
        .then(
            response=> {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
        
              // Examine the text in the response
              response.json().then(function(data) {
                  this.setState({'data':data});
                console.log(data);
              });
            }
          )
          .catch(err => {
            console.log('Fetch Error :-S', err);
          });

        
    }


    render(){
        return (<div>
            <input id="one" type="text" readOnly={true} value={this.state.data}/>
            <input id="trigger" value="trigger" type="button" onClick={this.getFetchData}/>
        </div>);
    }
}

export default Sample;