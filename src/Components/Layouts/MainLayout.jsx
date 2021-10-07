import React, { Component } from 'react'
import Header from '../_partials/Header'
import Sidebar from '../_partials/Sidebar'
import Footer from '../_partials/Footer'

export default class MainLayout extends Component{
    render(){
        return(
            <>
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                    <Header />
                        <div className="container-fluid">
                        
                        {this.props.children}

                        </div>
                    </div>
                    <Footer />
                </div> 
            </>
        )
    }
}