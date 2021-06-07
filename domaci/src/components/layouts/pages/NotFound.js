import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

class NotFound extends Component{
    render(){
        return(
            <ComponentNotFound className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Greška!</h1>
                            <h2>404 - stranica ne postoji</h2>
                            <div className="error-details">
                                Izvinjavamo se, tražena stranica nije pronađena. Došlo je do greške!
                            </div>
                            <br></br>
                            <div className="error-actions">
                                <Link className="btn btn-outline-primary btn-lg" to="/">
                                    Vrati se na početnu
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponentNotFound>
        );
    }
}

export default NotFound;

const ComponentNotFound = styled.div`
    .error-template {
        padding: 40px 15px;
        text-align: center;
    }

    .error-actionss {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .btn {
        margin-right: 10px;
    }

`;

