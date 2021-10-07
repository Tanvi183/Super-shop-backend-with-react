import React, { Component } from 'react'

export default class Sidebar extends Component {

    state = {
        toggle:''
    }

    toggleChange = ()=>{
        if(this.state.toggle==''){
            this.setState({
                toggle:'toggled'
            })
        }else{
            this.setState({
                toggle:''
            })
        }
    }

    render() {
        return (
            <>
                <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion "+this.state.toggle} id="accordionSidebar">
                    
                    {/* Sidebar - Brand */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>

                    {/* Divider */}
                    <hr className="sidebar-divider my-0" />

                    {/* Nav Item - Dashboard */}
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                    </li>

                    {/* Divider */}
                    <hr className="sidebar-divider" />

                    {/* Nav Item - Pages Collapse Menu */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog" />
                        <span>Components</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item" href="buttons.html">Buttons</a>
                            <a className="collapse-item" href="cards.html">Cards</a>
                        </div>
                        </div>
                    </li>

                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={this.toggleChange}></button>
                    </div>

                </ul>    
            </>
        )
    }
}