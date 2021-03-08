import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

    // This will be a class component because we need to 
    // store the data related to the shop page here.
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps}) => (
           <CollectionPreview key={id} {...otherCollectionProps} />
         )) 
        }
      </div>
    )
  }
}

export default ShopPage;
