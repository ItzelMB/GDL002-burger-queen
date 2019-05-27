import React, { Component } from 'react';


class MenuMorning extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [],
            showOrd: false
        };
    };

    componentDidMount() {

        const firebaseAccess = this.props.firebase.getRefDb().root.child(this.props.sec);
        let breakfastElements = [];

        firebaseAccess.on('value', (snapshot) => {
            let menuCopy = snapshot.val();

            for (let breakfst in menuCopy) {
                breakfastElements.push(
                    {
                        id: menuCopy[breakfst].id,
                        description: menuCopy[breakfst].description,
                        price: menuCopy[breakfst].price,
                        value: menuCopy[breakfst].value,
                        img: menuCopy[breakfst].img,
                    }
                )
            }

            this.setState({
                menu: breakfastElements
            })
        });
    };



    render() {

        return (
            <section>
                {this.state.menu.map((menuBreakfast, index) => {
                    return (
                        <section>
                            <div key={index} id={menuBreakfast.id}>
                                <img src={menuBreakfast.img} className="menuIcons" onClick={e => this.props.showItem(e, this.state.menu)}></img>
                                <p>{menuBreakfast.description}</p>
                                <p>{menuBreakfast.price}</p>
                            </div>


                        </section>
                    )
                })}
            </section>
        )
    };
};

export default MenuMorning;