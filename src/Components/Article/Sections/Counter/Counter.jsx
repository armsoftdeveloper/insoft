import React from "react";
/***** Style *****/
import "./_style.scss";
/***** Components *****/
import CompleteProjects from "./CompleteProjects";
import Employes from "./Employes";
import Rating from "./Rating";
import YearsHelpingBussiness from "./YearsHelpingBusiness";
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
export default function Counter(){
    const data = useSelector((state) => state)
    return(
        <section className="counter mt-5">
            <YearsHelpingBussiness data={data}/>
            <Employes data={data}/>
            <CompleteProjects data={data}/>
            <Rating data={data}/>
        </section>
    )
}