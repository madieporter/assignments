import React from "react";
import {Link, Switch, Route} from "react-router-dom";

import list from "./products.json";

const Services = () => {

    const mappedProducts = list.map(product => <Link key={product._id} to={`/products/${product._id}`}>{product.name}</Link>)

    return (
        <div>
            <div style={{height: "100vh", backgroundColor: "#9F0DFF", fontSize: "100px"}}>Products</div>

            <div className="productLinks">
                {mappedProducts}
            </div>

            <Switch>
                <Route path="/products/:_id" component={Services} />
            </Switch>
        </div>
    )
}

export default Services;