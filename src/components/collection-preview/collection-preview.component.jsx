import React from "react";

import CollectionItem from "../collection-item/collection-item.component"
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {/* filter() is limiting the number of items displayed in each section to 4 or less */}
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
)

export default CollectionPreview;