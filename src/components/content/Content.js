import styled from "styled-components";
import UserContent from "./UserContent";
import FlowersContent from "./FlowersContent";


const ContentBox = styled.div`
    margin-top: 80px;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-column-gap:20px;
      @media screen and (max-width:720px) {
        grid-template-columns:1fr;
        grid-template-rows:auto auto;
        grid-row-gap:50px;
      }

`



const Content = () => {



    return(
        <ContentBox>

            <UserContent />
            <FlowersContent />

        </ContentBox>
    )
};

export default Content;
