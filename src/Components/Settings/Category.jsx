import React, { Component } from 'react'
import Api from '../Api.js'

export default class Category extends Component {

    state = {
        category : [],
        input:{
            name:'',
            status:1
        },
        process:false,
        error:''
    }

    componentDidMount(){
        this.getCategory()
    }

    getCategory = () =>{
        Api().get('categories').then(res=>{
            this.setState({
                category:res.data,
                process:false
            })
            // console.log(this.state.category)
        }).catch(err=>{
            console.log(err)
        })
    }

    inputHandler = (event)=>{
        this.setState({
            input:{
                ...this.state.input,
                [event.target.name]:event.target.value
            },
            error:''
        })
    }

    submitHandler = (event)=>{
        event.preventDefault();

        this.setState({
            process:true
        })
        Api().post('categories',this.state.input).then(res=>{
            this.setState({
                input:{
                    name:'',
                    status:'1',
                }
            })
            this.getCategory()
        }).catch(err=>{
            this.setState({
                process:false,
                error:'Same Category To be Used!'
            })
            console.log(err)
        })
    }

    render() {
        return (
            <>
                <div className="card mb-4">
                    <div className="card-header">
                        <b>Category</b>
                    </div>
                    <div className="card-body">

                        <div className="col-md-12">
                            <form onSubmit={this.submitHandler}>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <input type="text" name="name" placeholder="Category Name" value={this.state.input.name} className="form-control" onChange={this.inputHandler} />
                                </div>
                                <div className="col-md-2"><button type="submit" className="btn btn-primary">{this.state.process && <i className="fa fa-spinner fa-spin"></i> } Submit</button></div>
                                {this.state.error && <p className="text-danger text-center"> {this.state.error} </p> }
                            </div>
                            </form>
                        </div>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th> SL </th>
                                    <th> Name </th>
                                    <th> Slug </th>
                                    <th> Status </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.category.map((data,i)=>{
                                   return (
                                    <tr key={data.id}>
                                        <td>{i+1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.slug}</td>
                                        <td> {data.status===1?'Active':'Inactive'} </td>
                                        <td></td>
                                    </tr>
                                    )
                                })}

                            </tbody>

                        </table>
                    </div>
                </div>
            </>
        )
    }
}