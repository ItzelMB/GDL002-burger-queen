import React from 'react';
import Client from '../Client/client';
import MenuMorning from '../Menu/menu';
import MenuDinner from '../MenuDinner/menuDinner';
import MenuDrinksDin from '../MenuDrinksDin/menuDrinksDin';
import MenuDrinksMorning from '../MenuDrinksMorning/menuDrinksMorning';
import { FirebaseContext } from '../Firebase';

const waitersInterf = () => (
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

    <Client />

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
          {firebase => <MenuMorning firebase={firebase} />}
        </FirebaseContext.Consumer>
        <h3>BEBIDAS</h3>
        <FirebaseContext.Consumer>
          {firebase => <MenuDrinksMorning firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>

      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <h3>PLATILLOS</h3>
        <FirebaseContext.Consumer>
          {firebase => <MenuDinner firebase={firebase} />}
        </FirebaseContext.Consumer>
        <h3>BEBIDAS</h3>
        <FirebaseContext.Consumer>
          {firebase => <MenuDrinksDin firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>
    </div>

    <aside>
      <p>Pedidos</p>
    </aside>

  </section>

);

export default waitersInterf;