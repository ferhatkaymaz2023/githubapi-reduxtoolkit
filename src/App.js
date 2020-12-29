import styled from "styled-components";
import Search from "./components/search/Search";
import {useSelector} from "react-redux";
import {profileInfo} from "./features/github/githubSlice";
import Home from "./components/Home";

const Div = styled.div`
  width:100%;
  min-height:100vh;
  background-color:#beebee;
`

const Container = styled.div`
  width: 90%;
  margin:0px auto;
`




const App = () => {
    const profile = useSelector(profileInfo);

  return(
      <Div>
        <Container>
            <Search />
            {
                profile.login ? <Home />: `Not found`
            }


        </Container>
      </Div>
  )
}

export default App;
