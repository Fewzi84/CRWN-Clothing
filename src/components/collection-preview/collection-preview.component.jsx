import React from "react";
import './collection-preview.style.scss'
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title,routename, items})=>(
<div className="collection-preview">
    <h2 className="title">{title.toUpperCase()}</h2>
    <div className="preview">
        {items.filter((item, idx)=> idx < 4).map(({id, ...othercollection})=>(
            <CollectionItem key={id} {...othercollection} />
        ))}
    </div>
</div>

)
export default CollectionPreview;