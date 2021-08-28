import React from 'react' ; 
import './css/Product.css'

class Product extends React.Component { 
    constructor(props) { 
        super(props)

        this.state = { 
            stock : this.props.stock,
            sub : "beli",
            status : "Tersedia" , 
            disabled : false
        }
    }

    buttonBeli = () => { 
        this.setState( { 
           stock : this.state.stock - 1
        })

        if (this.state.stock === 1) {
            this.setState ( { 
                status : "Habis",
                disabled : true
            })
        }
    }

    render() { 
        return( 
            <div className="product-box">
                <h2>{this.props.nama}</h2>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9SBYS75kHAoNXPKVwecoAQHaHa%26pid%3DApif=1" alt=""/>
                <p>{this.props.harga}</p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick = {this.buttonBeli} disabled = {this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>
            </div>
        );
    }
}


export default Product ; 

// snippet state -> rcc

