import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
// import SafeComponent from "./SafeComponent";
import PDPContent from "./components/PDPContent";
import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/product/:id" element={<PDPContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
