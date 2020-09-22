// npm install bootstrap react-router-dom --save // save znaci da ga sacuva unutar packge.json
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';//lekcija s02e14
import AccountsTable from './components/AccountsTable/AccountsTable';
import AddAcount from './components/AddAccount/AddAccount';
import EditAccount from './components/EditAccount/EditAccount';
import EditTable from './components/EditTable/EditTable';
import Header from './components/Header/Header';



class App extends Component {
    state = {
        accounts: [
            { id: 1, name: "Nikola", lastname: "Savic", phone: "11-11-11", email: "nikola@nanofaktura.com" },
            { id: 2, name: "Neda", lastname: "Cvetkovic", phone: "22-22-22", email: "neda@nanofaktura.com" }
        ]
    }

    addNewAccountToState = (acc) => { // prima novi account iz addNewAccount metode iz AddAccoount
        // console.log(acc);
        this.setState({
            accounts: [...this.state.accounts, acc]
        })
    }

    deleteAccount = (id) => { // !!! mora ovde da se pravi a ne u Account jer ovde zelimo da izbrisemo nesto iz State-a
        // console.log(id);
        const accountsCopy = [...this.state.accounts];
        const newCopyAccounts = accountsCopy.filter(account => account.id !== id); //treba da vrati svaki id koji nije ovaj sto smo poslali (kliknuli)
        this.setState({ accounts: newCopyAccounts })
    }

    editAccount = (acc) => {
        // console.log(acc);
        const copyAccounts = [...this.state.accounts];
        let accountPossition=copyAccounts.map(account=>account.id).indexOf(acc.id);
        // console.log(accountPossition);
        copyAccounts[accountPossition] = acc;
        this.setState({accounts:copyAccounts})
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route path="/" exact>
                    <AccountsTable accounts={this.state.accounts} />
                </Route>
                <Route path="/add">
                    <AddAcount addNewAccountToState={this.addNewAccountToState} />
                </Route>

                <Switch>
                    
                    <Route path="/edit/:id">
                        <EditAccount accounts={this.state.accounts} editAccount={this.editAccount} />
                    </Route>
                    <Route path="/edit">
                        <EditTable accounts={this.state.accounts} deleteAccount={this.deleteAccount} />
                    </Route>
                </Switch>

            </BrowserRouter>
        );
    }
}

export default App;