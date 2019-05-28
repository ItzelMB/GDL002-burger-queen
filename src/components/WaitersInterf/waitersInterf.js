import React, { Component } from 'react';
import Client from '../Client/client';
import Menu from '../Menu/menu';
import ShowOrder from '../ShowOrder/showOrder';
import { FirebaseContext } from '../Firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

class waitersInterf extends Component {
  constructor() {
    super()
    this.state = {
      menu: [],
      showOrd: false,
      item: [],
      total: 0
    };

  }

  showItem (event, menu) {
    let getId = event.target.parentNode.getAttribute("id");
    menu.map((itemProperty) => {
      if (itemProperty.id == getId) {
        this.setState({
          menu: [],
          showOrd: true,
          item: this.state.item.concat(itemProperty),
          total: itemProperty.value + this.state.total
        })
      }
    })
  };

  removeItem (event) {
    let arrItemToRemove= [...this.state.item];
    let getIdToRemove = event.target.parentNode.getAttribute("id");
    let getItemPrice = event.target.parentNode.getAttribute("price");
    console.log(getItemPrice)
    arrItemToRemove.splice(getIdToRemove, 1);
    this.setState({
      item : arrItemToRemove,
      total : this.state.total - getItemPrice
    })
    console.log(this.state.item);
  };
/*
  sendOrder (firebase) {
    let ref = firebase.getRefDb.push();
    let key = ref.key();

    let orderList = {
      id: key,
      client : " ",
      status: "processing",
      total: this.state.total,
      items: this.state.item
    }

    firebase.saveOrd(orderList);
  };
*/
  render() {
    return (
      <section className="waitersInterf">

        <section className="waitersNav">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark waitersNav">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <h4>Burger Queen</h4>
                </li>  
                <li className="nav-item">
                  <button type="button" className="btn btn-warning"><Link to={ROUTES.ORDERS}>VER PEDIDOS</Link></button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-warning"><Link to={ROUTES.LOGIN}>INICIO</Link></button>
                </li>
              </ul>
            </div>
          </nav>
        </section>

        <section className="row">
        <section className="col-7">

          <nav >
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">DESAYUNOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">COMIDAS</a>
              </li>
            </ul>
          </nav>

          <div className="tab-content" id="myTabContent" >
            
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              
              <h5>PLATILLOS</h5>
              <FirebaseContext.Consumer>
                {firebase => <Menu firebase={firebase} sec="breakfast" showItem={this.showItem.bind(this)} />}
              </FirebaseContext.Consumer>

              <h5>BEBIDAS</h5>
              <FirebaseContext.Consumer>
                {firebase => <Menu firebase={firebase} sec="drinksMorning" showItem={this.showItem.bind(this)} />}
              </FirebaseContext.Consumer>

            </div>

            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <h5>PLATILLOS</h5>
              <FirebaseContext.Consumer>
                {firebase => <Menu firebase={firebase} sec="dinner" showItem={this.showItem.bind(this)} />}
              </FirebaseContext.Consumer>
              <h5>BEBIDAS</h5>
              <FirebaseContext.Consumer>
                {firebase => <Menu firebase={firebase} sec="drinksAfter" showItem={this.showItem.bind(this)} />}
              </FirebaseContext.Consumer>
            </div>
          </div>
          </section>

          <aside className="col-5">
            <h5>DESCRIPCIÓN DE PEDIDO</h5>
            <Client />
            <section>
              {this.state.showOrd ? <ShowOrder item={this.state.item} total={this.state.total} removeItem={this.removeItem.bind(this)}/> : null}
            </section>
            {/*}
            <FirebaseContext.Consumer>
              {firebase => <button onClick={this.sendOrder()}>ENVIAR PEDIDO</button>}
    </FirebaseContext.Consumer> */}
          </aside>
          </section>
        
      </section>
    )
  }

};

export default waitersInterf;