import { createStore } from "redux";
/***** IT Solutions Images *****/
import Developming from "../../Assets/Images/Article/Sections/ItSolution/developming.png";
import Calendar from "../../Assets/Images/Article/Sections/ItSolution/calendar.png";
import Adaptive from "../../Assets/Images/Article/Sections/ItSolution/adaptiving.png";
import Security from "../../Assets/Images/Article/Sections/ItSolution/security.png";
import Team from "../../Assets/Images/Article/Sections/ItSolution/team.png";
import Working from "../../Assets/Images/Article/Sections/ItSolution/working.png";
/***** Company Images *****/
import Company from "../../Assets/Images/Article/Sections/Company/company.jpg";
import whyChooseUs from "../../Assets/Images/Article/Sections/WhyChooseUs/background.jpg";
import whyTrustUs from "../../Assets/Images/Article/Sections/WhyTrustUs/background.jpg";
/***** Slider Images *****/
import People_one from "../../Assets/Images/Article/Sections/Slider/people1.jpg";
import People_two from "../../Assets/Images/Article/Sections/Slider/people2.jpg";
import People_tree from "../../Assets/Images/Article/Sections/Slider/people3.jpg";
/***** Team Images *****/
import teamOne from "../../Assets/Images/Article/Sections/Team/team-1.jpg";
import teamTwo from "../../Assets/Images/Article/Sections/Team/team-2.jpg";
import teamTree from "../../Assets/Images/Article/Sections/Team/team-3.jpg";
import teamFour from "../../Assets/Images/Article/Sections/Team/team-4.jpg";
/***** Customers Images *****/
import c_one from "../../Assets/Images/Article/Sections/Customers/client-1.png";
import c_two from "../../Assets/Images/Article/Sections/Customers/client-2.png";
import c_tree from "../../Assets/Images/Article/Sections/Customers/client-3.png";
import c_four from "../../Assets/Images/Article/Sections/Customers/client-4.png";
import c_five from "../../Assets/Images/Article/Sections/Customers/client-5.png";
import c_six from "../../Assets/Images/Article/Sections/Customers/client-6.png";
import c_seven from "../../Assets/Images/Article/Sections/Customers/client-7.png";
import c_eight from "../../Assets/Images/Article/Sections/Customers/client-8.png";
const initialState = {
    lists:["home","services","about us","customers","contact"],
    main:[{
        title:"IT Solutions & Business Services Company",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.",
    }],
    article:[{
        itSolution:[
            {
                titles:[
                    {
                        titleTop:"WHAT WE PROVIDE",
                        titleBottom:"IT Solutions"
                    }],
                        blocks:[
                        {
                            titles:["IT Solution","Web Development","Networking Services","SEO Optimization","App Optimization","Data Recovery"],
                            texts:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua"],
                            link:["Read More"]
                        },
                        {images:[Developming,Calendar,Adaptive,Security,Team,Working]}
                ]
            },
        ],
        aboutCompany:[
            {
                title:"ABOUT OUR COMPANY",
                titleBottom:"Providing your business with a quality IT service is our passion.",
                typography:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud"
            },
            {
                names:["IT Consulting","Virtual Workstation","Managed IT Service"],
                progress:[10,5,20],
                progressProcent:["10%","5%","20%"]
            },
            {
                image:[Company]
            }
        ],
        chooseUs:[
            {
                title:"WHY CHOOSE US?",
                titleBottom:"Safeguard your brand with Cyber-Security & IT Solutions",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                spansTop:["remote it assistance","practice It managment","managed it service"],
                spansBottom:["solving it problems","it security services","cloud services"],
                image:whyChooseUs
            }
        ],
        trustUs:[
            {
                title:"WHY TRUST US?",
                titleBottom:"Achieve digital transformation for your retail business services",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                spansTop:["protect your bussiness","network security","data security"],
                spansBottom:["small bussiness owners","running your bussiness","network monitoring"],
                image:whyTrustUs
            }
        ],
        counter:[
            {
                count:"27+",
                title:"years helping bussiness"
            },
            {
                count:"500+",
                title:"employes"
            },
            {
                count:"30m",
                title:"complete projects"
            },
            {
                count:"90k",
                title:"5 star rating"
            },
        ],
        slider:[
            {
                topTitle:"TESTIMONIAL",
                bottomTitle:"What Our Client Say",
                title:["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aliquam id vero alias! Repudiandae alias voluptatum hic tempora ratione, illum molestiae molestias mollitia, vel sequi ut, provident temporibus modi architecto!","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aliquam id vero alias! Repudiandae alias voluptatum hic tempora ratione, illum molestiae molestias mollitia, vel sequi ut, provident temporibus modi architecto!","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aliquam id vero alias! Repudiandae alias voluptatum hic tempora ratione, illum molestiae molestias mollitia, vel sequi ut, provident temporibus modi architecto!"],
                images:[People_one,People_two,People_tree]
            },
        ],
        team:[
            {
                topTitle:"TEAM MEMBER",
                bottomTitle:"Expert Team",
                team:{
                    images:[teamOne,teamTwo,teamTree,teamFour],
                    names:["Ava Farrington","Kevin Haley","Alishia Fulton","Lucas Martinez"],
                    proffession:["Founder, ceo","Co-founder, cto","Chief creative officer","Project Manager"]
                }
            }
        ],
        customers:[
            { 
                typography:["TRUSTED BY OVER 40,000","Our Customers"],
                images:[c_one,c_two,c_tree,c_four,c_five,c_six,c_seven,c_eight]
            }
        ]
    }],
    footer:[{
        newsletter:[{
            titleTop:"Sign Up Our Newsletter",
            titleBottom:"We Offer An Informative Newsletter - Check It Out."
        }],
        contact:[{
            title:"Contact Info",
            phone:"080 707 555-321",
            email:"demo@example.com",
            location:"526 Melrose Street, Water Mill, 11976 New York"
        }],
        aboutUs:[{
            title:"About Us",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur dolorem aliquid ad quis cupiditate labore, cum asperiores vitae omnis voluptas nobis, optio obcaecati neque quasi ab! Quam, magnam minus!"
        }],
    }]
}
const store = createStore(function(state,action){
    return state;
},initialState)

export default store;