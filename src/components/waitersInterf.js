import React from 'react';

const waitersInterf = () => (
    <section>

        <section className="waitersNav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Usuario<span class="sr-only">(current)</span></a>
                        </li>
                        <a className="navbar-brand" href="#">Burger Queen Minerva</a>
                        <li className="nav-item">
                            <a className="nav-link" href="#">VER PEDIDOS</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </section>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">A</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">B</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">C</div>
</div>




        

        <aside>
            <p>Pedidos</p>
        </aside>

    </section>

);

export default waitersInterf;