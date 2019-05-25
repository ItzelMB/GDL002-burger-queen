import React, { Component } from 'react';

class MenuDrinksDin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: []
        };
    };

    componentDidMount() {

        const firebaseAccess = this.props.firebase.getRefDb().root.child('drinksAfter');
        let drinksElements = [];

        firebaseAccess.on('value', (snapshot) => {
            let menuCopy = snapshot.val();

            for (let drinks in menuCopy) {
                drinksElements.push(
                    {
                        id: menuCopy[drinks].id,
                        description: menuCopy[drinks].description,
                        price: menuCopy[drinks].price,
                        value: menuCopy[drinks].value,
                        img: menuCopy[drinks].img,
                    }
                )
            }

            this.setState({
                menu: drinksElements
            })
        });
    };

    render() {

        return (
            <section>
                {this.state.menu.map((menuDrinks) => {
                    return (
                        <div key={menuDrinks.id}>
                            <img src={menuDrinks.img} className="menuIcons"></img>
                            <p>{menuDrinks.description}</p>
                            <p>{menuDrinks.price}</p>
                        </div>
                    )
                })}
            </section>
        )
    };
};

export default MenuDrinksDin;