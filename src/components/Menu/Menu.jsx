import React from "react";
import MenuItem from "./MenuItem";
const Menu=()=>{
    const menu=[
        {
            item: "Biryani",
            desc : "Hot,spicy and delicious",
            price: 200
        },
        {
            item: "Butter Naan",
            desc : "Sweet and tasty, when savoured with a curry",
            price: 55
        },
        {
            item: "Cashew Panner",
            desc : "Jucilious",
            price: 310
        }
    ]
    return(
        <React.Fragment>
            {
                menu.map(dish=>{
                    return <MenuItem dish={dish}></MenuItem>
                })
            }
        </React.Fragment>
    );
}
export default Menu;