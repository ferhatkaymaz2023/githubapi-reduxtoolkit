import styled from "styled-components";
import {fetchProfile} from "../../features/github/githubSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";


const SearchBox = styled.div`
  display:flex;
  padding-top:25px;
`


const SearchInput = styled.input.attrs(props => ({
    placeholder: props.placeholder ? props.placeholder : "not info"
}))`
  width:100%;
  height:40px;
  border:none;
  outline:none;
  color:gray;
  font-size:16px;
  padding-left:15px;
  font-weight:500;
`

const SearchButton = styled.button`
  padding:0px 20px;
  height:40px;
  background-color: #74cce1;
  border:none;
  outline:none;
  color:white;
  font-size:18px;
  &:hover{
    box-shadow:0px 0px 10px black;
  }
  
`




const Search = () => {
    const [login,setLogin] = useState("");
    const dispatch = useDispatch();

    const guery = (e) => {
        e.preventDefault();
        dispatch(fetchProfile(login));
    }

    return(
        <SearchBox>
            <SearchInput value={login} onChange={e => setLogin(e.target.value)} placeholder="Github ismi giriniz" />
            <SearchButton onClick={e => guery(e)} >Getir </SearchButton>
        </SearchBox>
    )
};

export default Search;
