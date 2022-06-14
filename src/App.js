import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import PageContent from "./PageContent";
import Footer from "./Footer";
import Header from "./Header";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <PageContent></PageContent>
            <Footer></Footer>
        </>
    );
}

export default App;
