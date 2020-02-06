import React from "react";
import NewsListItem from "./newslistitem";

const Newslist = (props) => {

const news = props.news.map((item, i)=>(
    <NewsListItem item={item} key={item.id}/>
))

    return (
        <>
            {news}
        </>
    )
}
export default Newslist;