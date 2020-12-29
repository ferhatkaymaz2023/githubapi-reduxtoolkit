import styled from "styled-components";
import { profileInfo} from "../../features/github/githubSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchFollowers} from "../../features/github/githubSlice";
import {followers} from "../../features/github/githubSlice";

const ContentDiv = styled.div`
  background-color: white;
  border-radius:5px;
  box-shadow:0x 0px 1px gray;
  position:relative;
  padding:10px;
  @media screen and (max-width:820px) {
  margin-bottom:50px;
  }

  &:before{
    content:"Takipçiler";
    position:absolute;
    top:-28px;
    padding:5px 20px;
    background-color:white;
    left:0px;
  }
`

const ListItem = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  padding:5px;
  box-shadow:0px 0px 1px gray;
  margin-bottom:5px;
`

const ListItemIcon = styled.img.attrs(props => ({
    src: props.src ? props.src : "https://placeimg.com/75/75/any"
}))`
    
      height:30px;
      width:30px;
      @media screen and (max-width:820px) {
        
      }
      object-fit:cover;
      border-radius:100%;
      box-shadow:0px 0px 5px gray;
  
`

const ListItemContent = styled.div`
    margin-left:20px;
`



const FlowersContent = () => {
    const {login} = useSelector(profileInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFollowers({login}))
    },[login]);

    const followers = useSelector(state => state.github.followers);
    console.log(followers);

    return(
        <ContentDiv>
            {
                followers?.map(follower => (
                    <ListItem key={follower.id}>
                        <ListItemIcon src={follower.avatar_url} />
                        <ListItemContent>
                            <h4> {follower.login} </h4>
                            <span> http://www.github.com/{follower.login} </span>
                        </ListItemContent>
                    </ListItem>
                ))
            }

        </ContentDiv>
    )
};

export default FlowersContent;
