import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const OrderStatus = () => (
    <div>
        <section className=" row statusNav">
            <h3 className="col-8">PEDIDOS</h3>
            <Link to={ROUTES.WAITERS}>SEGUIR ORDENANDO</Link>
        </section>

        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Estátus</th>
                    <th scope="col">Marcar entregado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>12:50</td>
                    <td>Entregado</td>
                    <td><input type="checkbox" ></input></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>12:59</td>
                    <td>Listo para servir</td>
                    <td><input type="checkbox"></input></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>13:15</td>
                    <td>En preparación</td>
                    <td><input type="checkbox"></input></td>
                </tr>
            </tbody>
        </table>
    </div>


);

export default OrderStatus;