import React from "react";
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
export default function Us(){
    const data = useSelector((state) => state)
    return(
        <>
            <img src={data.article[0].trustUs[0].image} className="img-fluid"/>
        </>
    )
}