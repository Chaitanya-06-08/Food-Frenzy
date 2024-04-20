import React from "react";
import ProductStore from "./ProductContext";
const FoodItemContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = React.useState([
    {
      id: 1,
      name: "Kolkata Biryani",
      Category: "Biryani",
      subCategory: "Egg Biryani",
      description:
        "Flavorful biryani with boiled eggs, basmati rice, and a perfect mix of spices.",
      price: 250,
      rating: 4.3,
      delivery_time: 40,
      img: "https://assets.cntraveller.in/photos/62644db46511cf2003cee423/master/pass/kolkata-biryani-lead.jpg",
    },
    {
      id: 2,
      name: "Vegetarian Pizza",
      Category: "Fast Food",
      subCategory: "Pizza",
      description: "A garden-fresh medley of veggies on a crispy crust.",
      price: 300,
      rating: 4.2,
      delivery_time: 22,
      img: "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1",
    },
    {
      id: 3,
      name: "Fish and Chips Platter",
      Category: "Fast Food",
      subCategory: "Seafood",
      description:
        "Crispy fish fillets served with golden fries and tangy tartar sauce.",
      price: 280,
      rating: 4.3,
      delivery_time: 25,
      img: "https://t3.ftcdn.net/jpg/01/94/41/48/360_F_194414898_4yyUVd1CTtEGZXervAFACf2vpV1LgsBa.jpg",
    },
    {
      id: 4,
      name: "Hyderabadi Biryani",
      Category: "Biryani",
      subCategory: "Chicken Biryani",
      description:
        "Fragrant basmati rice cooked with tender chicken and aromatic spices.",
      price: 390,
      rating: 4.3,
      delivery_time: 30,
      img: "https://t4.ftcdn.net/jpg/05/81/48/89/360_F_581488930_jSWEv0Pd7fXqvV7llro7YCD3l0JfHdEA.jpg",
    },
    {
      id: 5,
      name: "Crispy Chicken Wrap",
      Category: "Fast Food",
      subCategory: "Wrap",
      description:
        "Delicious crispy chicken wrapped in a soft tortilla with savory sauces.",
      price: 200,
      rating: 4.5,
      delivery_time: 18,
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/3/21/0/RX-TYSONCRISPY_Asian-Salad-Wrap_s4x3.jpg.rend.hgtvcom.616.462.suffix/1396027064491.jpeg",
    },
    {
      id: 6,
      name: "Lucknowi Biryani",
      Category: "Biryani",
      subCategory: "Mutton Biryani",
      description:
        "Slow-cooked mutton biryani with rich flavors and succulent pieces of meat.",
      price: 300,
      rating: 4.2,
      delivery_time: 35,
      img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/LUCKNOWI_MURG_BIRYANI__AWADHI_CHICKEN_BIRYANI.jpg",
    },
    {
      id: 7,
      name: "Loaded Fries",
      Category: "Fast Food",
      subCategory: "Appetizer",
      description:
        "Golden fries smothered in cheese, bacon, and a medley of toppings.",
      price: 180,
      rating: 4.0,
      delivery_time: 12,
      img: "https://img.taste.com.au/idvw_BYd/taste/2017/09/hot-chips-loaded-up-with-stuff-130602-2.jpg",
    },
    {
      id: 8,
      name: "Rasgulla",
      Category: "Sweets",
      subCategory: "Bengali",
      description:
        "Juicy and spongy cottage balls soaked in cardamom-flavored sugar syrup.",
      price: 9.99,
      rating: 4.5,
      delivery_time: 25,
      img: "https://madhurasrecipe.com/wp-content/uploads/2023/10/Rasgulla-Featured-Image.jpg",
    },
    {
      id: 9,
      name: "Veg Biryani",
      Category: "Biryani",
      subCategory: "Veg Biryani",
      description:
        "A delightful blend of assorted vegetables and aromatic spices in basmati rice.",
      price: 180,
      rating: 4.0,
      delivery_time: 25,
      img: "https://static.wixstatic.com/media/91e241_0cf76aa5613b4055be2f922f71edeaa0~mv2.jpg/v1/fill/w_560,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ustaadi%20Hyderabadi%20Veg%20Biryani.jpg",
    },
    {
      id: 10,
      name: "Classic Cheeseburger",
      Category: "Fast Food",
      subCategory: "Burger",
      description:
        "Juicy beef patty topped with melted cheese and fresh veggies.",
      price: 250,
      rating: 4.2,
      delivery_time: 15,
      img: "https://www.oliveandmango.com/images/uploads/2021_06_21_classic_grilled_cheeseburger_1.jpg",
    },
    {
      id: 11,
      name: "Gulab Jamun",
      Category: "Sweets",
      subCategory: "Classic",
      description:
        "Soft and spongy milk-based dumplings soaked in sugar syrup.",
      price: 8.99,
      rating: 4.7,
      delivery_time: 20,
      img: "https://t3.ftcdn.net/jpg/04/40/62/60/360_F_440626064_ghxwEM9hM70aVObUUYObrNS4g8qor3yX.jpg",
    },
    {
      id: 12,
      name: "Jalebi",
      Category: "Sweets",
      subCategory: "Syrup-based",
      description:
        "Deep-fried pretzel-shaped dessert soaked in saffron-infused sugar syrup.",
      price: 7.99,
      rating: 4.3,
      delivery_time: 15,
      img: "https://t3.ftcdn.net/jpg/02/02/49/44/360_F_202494465_CZbnTcuxHvA4MHMQn9mv6qBiixXnxPCz.jpg",
    },
    {
      id: 13,
      name: "Mysore Pak",
      Category: "Sweets",
      subCategory: "South Indian",
      description:
        "Rich and buttery gram flour fudge with a melt-in-your-mouth texture.",
      price: 10.99,
      rating: 4.8,
      delivery_time: 30,
      img: "https://t3.ftcdn.net/jpg/01/77/93/84/360_F_177938410_M2I83sTYGkM0rd9pxoxU5f0gEZeKdvGq.jpg",
    },
    {
      id: 14,
      name: "Tiramisu",
      Category: "Desserts",
      subCategory: "Italian",
      description:
        "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.",
      price: 14.0,
      rating: 4.7,
      delivery_time: 28,
      img: "https://c.ndtvimg.com/2022-12/edch7gfg_tiramisu_625x300_10_December_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    },
    {
      id: 15,
      name: "Cheesecake",
      Category: "Desserts",
      subCategory: "American",
      description:
        "Creamy and smooth cheesecake with a graham cracker crust, topped with fresh berries.",
      price: 16.0,
      rating: 4.6,
      delivery_time: 32,
      img: "https://www.mybakingaddiction.com/wp-content/uploads/2022/08/plated-blueberry-cheesecake-hero.jpg",
    },
    {
      id: 16,
      name: "Macarons",
      Category: "Desserts",
      subCategory: "French",
      description:
        "Colorful and delicate French almond cookies with a variety of fillings like raspberry, chocolate, and pistachio.",
      price: 18.0,
      rating: 4.9,
      delivery_time: 22,
      img: "https://sugargeekshow.com/wp-content/uploads/2022/12/italian_macaron_Featured.jpg",
    },
    {
      id: 17,
      name: "Pavlova",
      Category: "Desserts",
      subCategory: "Australian",
      description:
        "Crisp meringue shell topped with whipped cream and fresh fruits like strawberries, kiwi, and passionfruit.",
      price: 15.0,
      rating: 4.7,
      delivery_time: 27,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBfvaODicD0PEdLyxmfxAWdJZUIWG2WZDw8U7RPllFg&s",
    },
  ]);

  return (
    <ProductStore.Provider value={{ foodItems, setFoodItems }}>
      {children}
    </ProductStore.Provider>
  );
};

export default FoodItemContextProvider;
