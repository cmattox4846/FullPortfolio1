import Home from "../Componets/Home/Home";
import About from "../Componets/About/About";
import Resume from "../Componets/Resume/Resume";
import Testimonial from "../Componets/Testimonial/Testimonial";
import ContactMe from "../Componets/ContactMe/ContactMe";

export const Total_Screens=[
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "About Me",
        component: About,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    // {
    //     screen_name: "Testimonial",
    //     component: Testimonial,
    // },
    {
        screen_name: "ContactMe",
        component: ContactMe,
    },

]

export const Get_Screen_Index = (screen_name)=>{
    if (!screen_name)
    return -1
    for(let i=0; i < Total_Screens.length; i++)
    {
        if(Total_Screens[i].screen_name === screen_name) 
        return i;
    }
    return -1;
}