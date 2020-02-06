import React from "react";
import {css} from "glamor";

const NewsListItem = ({item}) =>{

        // let news_item = css({
        //     padding: "20px",
        //     boxSizing: "border-box",
        //     borderBottom: "1px solid grey",
        //     ":hover":{
        //         color: "yellow"
        //     },
        //     "@media(max-width:500px)": {
        //         color: "green"
        //     }
        // });
        // let item_back = css({
        //     background: "aqua"
        // })
    
    return(
        <div className= "news_item">
        <h3>{item.title}</h3>
        <div>{item.feed}</div>

    </div>
    )
}

export default NewsListItem;