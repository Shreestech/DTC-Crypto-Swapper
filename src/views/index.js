import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { STATUS_PENDING, UNLOCK_REDIRECT } from 'consts'
import LoadWallet from 'components/Wallet/LoadWallet'
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { clearLocalStorage, loadAddressFromLocalStorage } from 'wallet/utils'
import Home from 'components/Wallet/Home'
import Export from 'components/Wallet/Export'
import Transfer from 'components/Wallet/Transfer'
import SignData from 'components/Wallet/SignData'
import TransactionModal from 'components/Wallet/TransactionsTable/TransactionModal'
import ReceiveFunds from 'components/Wallet/ReceiveFunds'
import LogoutModal from 'components/Wallet/LogoutModal'
import { LOGOUT } from 'actions'
import AccountInfo from 'components/Wallet/AccountInfo'
import Verify from 'components/Wallet/Verify'
import ClaimLegacy from 'components/Wallet/ClaimLegacy'
import Logo from 'assets/dt-logo.png'

require('./index.scss')

@connect(state => ({
    wallet: state.wallet,
}))
export default class Wallet extends Component {
    state = {
        hasWallet: null,
        logout: false,
    }

    componentDidMount () {
        const hasWallet = !!loadAddressFromLocalStorage()

        if (hasWallet === false) {
            sessionStorage.setItem(UNLOCK_REDIRECT, this.props.location.pathname + this.props.location.search)
        }

        this.setState({
            hasWallet: hasWallet,
        })
    }

    openLogout = (e) => {
        e && e.preventDefault()

        this.setState({
            logout: true,
        })
    }

    closeLogout = () => {
        this.setState({
            logout: false,
        })
    }

    doLogout = () => {
        clearLocalStorage()
        this.props.dispatch({ type: LOGOUT })
        this.props.history.push('/unlockwallet')
    }

    render () {
        if (this.state.hasWallet === null) {
            return null
        }

        if (this.state.hasWallet === false) {
            return <Redirect to="/unlockwallet"/>
        }

        if (this.props.wallet.status === STATUS_PENDING) {
            return <LoadWallet/>
        }

        return (
            <Fragment>
                <nav className="navbar fixed-top navbar-dark bg-primary navbar-expand raised">
                    <div className="container">
                        <Link className="navbar-brand font-weight-bold" to="/wallet">
                            <img alt="Logo" src={Logo}/>
                        </Link>
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/wallet">WALLET</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/wallet/export">EXPORT</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.openLogout}>LOG OUT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/wallet" exact component={Home}/>
                    <Route path="/wallet/address/:address" component={AccountInfo}/>
                    <Route path="/wallet/transfer" exact component={Transfer}/>
                    <Route path="/wallet/sign" exact component={SignData}/>
                    <Route path="/wallet/receive" exact component={ReceiveFunds}/>
                    <Route path="/wallet/export" exact component={Export}/>
                    <Route path="/wallet/verify/:challenge" exact component={Verify}/>
                    <Route path="/wallet/claimlegacy/:amount?/:nonce?/:signature?" exact component={ClaimLegacy}/>
                </Switch>
                <TransactionModal/>
                <LogoutModal open={this.state.logout} onClose={this.closeLogout} onLogout={this.doLogout}/>
            </Fragment>
        )
    }
}
