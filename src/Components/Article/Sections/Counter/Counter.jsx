import React from "react";
/***** Style *****/
import "./_style.scss";
/***** Components *****/
import CompleteProjects from "./_Files/CompleteProjects";
import Employes from "./_Files/Employes";
import Rating from "./_Files/Rating";
import YearsHelpingBussiness from "./_Files/YearsHelpingBusiness";
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