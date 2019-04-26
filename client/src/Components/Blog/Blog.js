import React, { Component } from 'react';
import Form from '../Form/Form'

class Blog extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 offset-lg-3">
                        <h1 className="text-center">Blog al desnudo</h1>
                    </div>
                    <Form/>
                </div>
            </div>
         );
    }
}
 
export default Blog;