import React from "react";

import SHOP_DATA from "./shop.data";

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
    return (
      <div>
        SHOP PAGE
      </div>
    )
  }
}

export default ShopPage;
