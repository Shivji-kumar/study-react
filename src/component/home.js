import React from "react";
import HomeForm from "./homeform";
import HomeTable from "./homeTable";
import Student from "./student";

function Home() {
    return (
            <div className="homeStyle">
                <HomeTable/>
                <HomeForm/>
                <Student/>
            </div>
    );
}

export default Home;
