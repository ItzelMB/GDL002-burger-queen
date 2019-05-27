import React, { Component } from 'react';

class ShowOrder extends Component {
    constructor(props) {
        super(props)
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