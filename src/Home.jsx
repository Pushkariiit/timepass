import React from "react";
import Common from "./Common";
import web from "../src/images/img1.png"
const Home = () => {
    return (
        <>
            <Common name="Grow your business " 
            imgsrc = {web} 
            visit="/service" 
            btname="Get Started" />
        </>
    )
}
export default Home;