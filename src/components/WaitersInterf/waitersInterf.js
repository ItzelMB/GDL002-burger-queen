import React, { Component } from 'react';
import Client from '../Client/client';
import Menu from '../Menu/menu';
import ShowOrder from '../ShowOrder/showOrder';
import { FirebaseContext } from '../Firebase';

class waitersInterf extends Component {
  constructor() {
    super()
    this.state = {
      menu: [],
      showOrd: false,
      item: []
    };

  }

  showItem(e, menu) {
    //console.log(e.target.parent.getAttribute("id"));
    let getId = e.target.parentNode.getAttribute("id");
    menu.map((menuBreakfast) => {
      if (menuBreakfast.id == getId) {
        this.setState({
          menu: [],
          showOrd: true,
          item: this.state.item.concat(menuBreakfast)
        })
      }
    })
  };


  render() {
    return (
      <section>
        <section className="waitersNav">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark waitersNav">

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Usuario<span className="sr-only">(current)</span></a>
                </li>
                <a className="navbar-brand" href="#">Burger Queen Minerva</a>
                <li className="nav-item">
                  <a className="nav-link" href="#">VER PEDIDOS</a>
                </li>
              </ul>
            </div>

          </nav>
        </section>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">DESAYUNOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">COMIDAS</a>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">

          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h3>PLATILLOS</h3>
            <FirebaseContext.Consumer>
              {firebase => <Menu firebase={firebase} sec="breakfast" showItem={this.showItem.bind(this)} />}
            </FirebaseContext.Consumer>
            <h3>BEBIDAS</h3>
            <FirebaseContext.Consumer>
              {firebase => <Menu firebase={firebase} sec="drinksMorning" showItem={this.showItem.bind(this)} />}
            </FirebaseContext.Consumer>
          </div>

          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <h3>PLATILLOS</h3>
            <FirebaseContext.Consumer>
              {firebase => <Menu firebase={firebase} sec="dinner" showItem={this.showItem.bind(this)} />}
            </FirebaseContext.Consumer>
            <h3>BEBIDAS</h3>
            <FirebaseContext.Consumer>
              {firebase => <Menu firebase={firebase} sec="drinksAfter" showItem={this.showItem.bind(this)} />}
            </FirebaseContext.Consumer>
          </div>
        </div>

        <aside>
          <h3>DESCRIPCIÓN DE PEDIDO</h3>
          <Client />

          <section>
            {this.state.showOrd ? <ShowOrder item={this.state.item} /> : null}
          </section>

          <section>
            <p>TOTAL</p>

          </section>
        </aside>

      </section>
    )
  }

};

export default waitersInterf;