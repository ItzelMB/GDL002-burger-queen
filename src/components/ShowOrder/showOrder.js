import React, { Component } from 'react';

class ShowOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderList:[],
            total:0
        }
    }

    getTotal () {
        this.setState(
            {orderList:this.state.orderList.concat(this.props.item)}
        )

        this.props.orderList.map((item)=>{
            this.setState=(
                {total: this.state.total + item.price}
            )
        })
    }

    
    render() {
        return (
            <div>
                {
                    this.props.item.map((element, index) => {
                        return (
                            <div key={index}>
                                <p>{element.description + "........" + element.price}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
};

export default ShowOrder;