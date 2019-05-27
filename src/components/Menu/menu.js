import React, { Component } from 'react';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [],
            showOrd: false
        };
    };

    componentDidMount() {

        const firebaseAccess = this.props.firebase.getRefDb().root.child(this.props.sec);
        let menuElements = [];

        firebaseAccess.on('value', (snapshot) => {
            let menuCopy = snapshot.val();

            for (let menuItem in menuCopy) {
                menuElements.push(
                    {
                        id: menuCopy[menuItem].id,
                        description: menuCopy[menuItem].description,
                        price: menuCopy[menuItem].price,
                        value: menuCopy[menuItem].value,
                        img: menuCopy[menuItem].img,
                    }
                )
            }

            this.setState({
                menu: menuElements
            })
        });
    };



    render() {

        return (
            <section className="row">
                {this.state.menu.map((itemProperty, index) => {
                    return (
                    
                            <div key={index} id={itemProperty.id} className="menuElement">
                                <img src={itemProperty.img} className="menuIcons" onClick={e => this.props.showItem(e, this.state.menu)}></img>
                                <p>{itemProperty.description}</p>
                                <p>{itemProperty.price}</p>
                            </div>


                      
                    )
                })}
            </section>
        )
    };
};

export default Menu;