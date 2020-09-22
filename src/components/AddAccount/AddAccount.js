import React, { Component } from 'react'
import { withRouter } from 'react-router-dom' // HOC iz RRD


class AddAcount extends Component {
    state = {
        newAccount: {
            id: "", name: "", lastname: "", phone: "", email: ""
        }
    }

    changeHandler = (event) => {
        console.log(this.props);
        let id = event.target.id;
        // console.log(id);
        let newAccountCopy = {...this.state.newAccount}; // kopija da ne bi direktno menjali vrednosti u state
        newAccountCopy[id] = event.target.value; // [id] = id, name, lastname....
        this.setState({newAccount:newAccountCopy})
        // console.log(this.state.newAccount); // !!! kasni za jedan usnos, pa mora u CDM
    }

    // componentDidUpdate(){
    //     console.log(this.state.newAccount);
    // }

    addNewAccount = () => { // treba da maenja state u App.js, zato u App.js pravimo metodu za primanje sa imenom addNewAccountToState i saljemo kao props u ovu komponentu
        this.props.addNewAccountToState(this.state.newAccount)
        // console.log(this.props);
        this.props.history.push("/") // preko HOC saljemo na "/"
    }
    
    

    render() {
        return (
            <div className="cointainer">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="display-4 m-4">Add Account</h2>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input type="text" onChange={this.changeHandler} id="id" placeholder="id" className="form-control" /><br />
                                <input type="text" onChange={this.changeHandler} id="name" placeholder="name" className="form-control" /><br />
                                <input type="text" onChange={this.changeHandler} id="lastname" placeholder="lastname" className="form-control" /><br />
                                <input type="text" onChange={this.changeHandler} id="phone" placeholder="phone" className="form-control" /><br />
                                <input type="text" onChange={this.changeHandler} id="email" placeholder="email" className="form-control" /><br />
                                <button onClick={this.addNewAccount} className="btn btn-primary form-control">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddAcount);