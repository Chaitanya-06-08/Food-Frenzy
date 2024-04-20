import React, { createContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Categories from "./components/Categories/Categories";
import FoodItemContextProvider from "./Context/FoodItemContextProvider";
import CartItemContextProvider from "./Context/CartItemContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const NotificationContext = createContext();

function App() {
  const notify = (msg) => {
    toast(msg);
  };
  return (
    <React.Fragment>
      <NotificationContext.Provider value={[notify]}>
        <FoodItemContextProvider>
          <CartItemContextProvider>
            <Header></Header>
            <main>
              <Content></Content>
              <Categories></Categories>
            </main>
            <footer>
              <Footer></Footer>
            </footer>
          </CartItemContextProvider>
        </FoodItemContextProvider>
      </NotificationContext.Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="ToastWrapper"
        bodyClassName="Notification"
        progressClassName="NotificationProgressBar"
        icon={<span className="material-symbols-outlined">close</span>}
      />
    </React.Fragment>
  );
}

export default App;
