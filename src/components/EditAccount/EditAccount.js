import React, { Component } from 'react'
import { withRouter } from 'react-router-dom' // lekcija s02e14


class EditAccount extends Component {
    state = {
        account: {
            id: "",
            name: "",
            lastname: "",
            phone: "",
            email: ""
        }
    }

    componentDidMount() {
        //account ?? => !!! mora HOC
        // console.log(this.props.match.params.id);
        const accountForEdit = this.props.accounts.filter(acc => acc.id == this.props.match.params.id)[0]
        // console.log(accountForEdit);
        this.setState({account:accountForEdit})

    }

    changeAccount = (event) => {
        const copyOfAccount = {...this.state.account}
        copyOfAccount[event.target.id] = event.target.value;
        this.setState({account:copyOfAccount})
    }
    
    editAccount = () => {
        this.props.editAccount(this.state.account);
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="display-4 m-4">Edit Account</h2>
                        <div className="row">
                            <input onChange={this.changeAccount} type="text" id="name" className="form-control" value={this.state.account.name} /><br />
                            <input onChange={this.changeAccount} type="text" id="lastname" className="form-control" value={this.state.account.lastname} /><br />
                            <input onChange={this.changeAccount} type="text" id="phone" className="form-control" value={this.state.account.phone} /><br />
                            <input onChange={this.changeAccount} type="text" id="email" className="form-control" value={this.state.account.email} /><br />
                            <button onClick={this.editAccount} className="form-control btn btn-info">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(EditAccount);