import React from 'react';
import Client from '../Client/client.js';

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
        <img src= {require ('../../img/sandwich.png')} alt="sandwich" className="menuIcons"/>
        <p>sándwich</p>
        <p>$25.00</p>

        <h3>BEBIDAS</h3>
        <img src= {require ('../../img/coffe.png')} alt="sandwich" className="menuIcons"/>
        <p>sándwich</p>
        <p>$25.00</p>

        <h3>INGREDIENTES EXTRAS</h3>
        <img src= {require ('../../img/cheese.png')} alt="sandwich" className="menuIcons"/>
        <p>sándwich</p>
        <p>$25.00</p>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <h3>PLATILLOS</h3>
          <img src= {require ('../../img/hamburger.png')} alt="sandwich" className="menuIcons"/>
          <p>sándwich</p>
          <p>$25.00</p>

          <h3>BEBIDAS</h3>
          <img src= {require ('../../img/water.png')} alt="sandwich" className="menuIcons"/>
          <p>sándwich</p>
          <p>$25.00</p>
      </div>
    </div>

    <aside>
      <p>Pedidos</p>
    </aside>

  </section>

);

export default waitersInterf;