import React, { Component } from 'react';

class MenuDinner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: []
        };
    };

    componentDidMount() {

        const firebaseAccess = this.props.firebase.getRefDb().root.child('dinner');
        let dinnerElements = [];

        firebaseAccess.on('value', (snapshot) => {
            let menuCopy = snapshot.val();

            for (let dinner in menuCopy) {
                dinnerElements.push(
                    {
                        id: menuCopy[dinner].id,
                        description: menuCopy[dinner].description,
                        price: menuCopy[dinner].price,
                        value: menuCopy[dinner].value,
                        img: menuCopy[dinner].img,
                    }
                )
            }

            this.setState({
                menu: dinnerElements
            })
        });
    };

    render() {

        return (
            <section>
                {this.state.menu.map((menuDinner) => {
                    return (
                        <div key={menuDinner.id}>
                            <img src={menuDinner.img} className="menuIcons"></img>
                            <p>{menuDinner.description}</p>
                            <p>{menuDinner.price}</p>
                        </div>
                    )
                })}
            </section>
        )
    };
};

export default MenuDinner;