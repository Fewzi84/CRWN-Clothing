import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import './shop-page.style.scss'

class ShopPage extends React.Component{
constructor(){
    super();

    this.state = {
        collections : SHOP_DATA
    }
}


render(){
const collections = this.state.collections;
    return (
        <div className="shop-page">
            {collections.map(({id, ...othercollections})=>(
                <CollectionPreview key= {id} {...othercollections} /> ))}
        </div>
    )
}
    
}
export default ShopPage;