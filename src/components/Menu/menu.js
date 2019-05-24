import React, {Component} from 'react';



class MenuMorning extends Component {
    constructor(props){
        super(props);

        this.state = {
            menu: []
        };
    };

    componentDidMount(){

        const firebaseAccess = this.props.firebase.getMenu();
        console.log(firebaseAccess);
        let breakfastElements = [];

        firebaseAccess.on('value', (snapshot) => {
            let copy = snapshot.val();


            for (let breakfst in copy) {
                breakfastElements.push(
                    {
                        id : breakfst,
                        description : copy[breakfst].description,
                        price : copy[breakfst].price,
                        value : copy[breakfst].value,
                        img : copy[breakfst].img,
                    }
                )
            }
        });

        
        this.setState({
             menu : breakfastElements
        })
    };

    render() {

        return(
            <section>
                {this.state.menu.map((menuBreakfast) => {
                    return (
                        <div key= {menuBreakfast.id}>
                            <img url={menuBreakfast.img}></img>
                            <p>{menuBreakfast.description}</p>
                            <p>{menuBreakfast.price}</p>
                        </div>
                    )
                })};
            </section>
        )
    };
};

export default MenuMorning;