import React from "react";
import Lists from "./lists/Lists";
import Content from "./content/Content";


const Home = () => {
    return(
        <React.Fragment>
            <Lists /> <Content />
        </React.Fragment>
    )
}

export default Home;
