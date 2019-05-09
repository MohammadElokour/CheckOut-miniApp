class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
  
  handleEvent (event) {
    
  };
  
  render() {
    return (
      <div>
        <div id='main'>
          <h1 id='hd'>Proceed to CheckOut</h1>
          <button id='btn' onClick={this.handleEvent}>CheckOut</button>
        </div>
        <div className='forms'>   
            <F1/>     
        </div>
        <div>   
            <F2/>
        </div>
        <div className='forms'> 
            <F3/>
        </div>
      </div>
    )
  }
}



class F1 extends React.Component {
  render () {
    return (
      <div className='box'>
        <form id='form1'> 
          Name: 
            <br />
            <input className='ip' type = "text" name = "Name"/>
            <br />
         
          Email:
            <br /> 
            <input className='ip' type = "text" name = "Email"/>
            <br />

          Password:
            <br />
            <input className='ip' type = "password" name = "Password"/>
            <br />

          <button>Next</button> 
        </form>
      </div>
    )
  }

}

class F2 extends React.Component {
  render () {
    return (
    <div className='box'>  
      <form id= 'form2'>
        Shiping Address:
        <br/>
        Line 1: 
          <br />
          <input className='ip' type = "text" name = "Line 1"/>
          <br />
        Line 2:
          <br />    
          <input className='ip' type = "text" name = "Line 2"/>
          <br />
        City:
          <br />
          <input className='ip' type = "text" name = "City"/>
          <br /> 
        State:
          <br />
          <input className='ip' type = "text" name = "State"/>
          <br />
        Zip Code:
          <br />
          <input className='ip' type = "number" name = "Zip Code"/>
          <br /> 
        <button>Next</button> 
      </form>
    </div>    
    )
  }

}

class F3 extends React.Component {
  render () {
    return (
      <div className='box'>
        <form id='form3'> 
          Credit Card Number:
            <br />
            <input className='ip' type='number' name="credit-number" placeholder="1111-1111-1111-1111" />
            <br />
         
          Expiry Date:
            <br /> 
            <input className='ip' type='month' name="Expiry Date" />
            <br />

          CVC:
            <br />
            <input className='ip' type='number' name="CVC" placeholder="1111" />
            <br />
        
          Billing Zip Code:
            <br />
            <input className='ip' type='number' name="Billing Zip Code"/>
            <br />

          <button>Purchace</button> 
        </form>
      </div>
    )
  }

}



ReactDOM.render(<App />, document.getElementById('app'));
