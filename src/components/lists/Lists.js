import styled from "styled-components";
import ListItem from "./ListItem";
import {useSelector} from "react-redux";
import {profileInfo} from "../../features/github/githubSlice";


const ListArea = styled.div`
  margin-top:50px;
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  grid-column-gap:20px;
  grid-template-rows:100px;

  @media screen and (max-width:720px) {
    grid-template-columns:1fr 1fr;
    grid-template-rows:100px 100px;
    grid-row-gap:20px;
  }

  @media screen and (max-width:620px) {
    grid-template-columns:1fr;
    grid-template-rows:100px 100px 100px 100px;
    grid-row-gap:20px;
  }
  
`






const Lists = () => {
    const profile = useSelector(profileInfo);


    return(
        <ListArea>
            <ListItem name={"Repos"} guantity={profile.public_repos}  icon={"https://www.flaticon.com/svg/static/icons/svg/32/32329.svg"} />
            <ListItem name={"Gists"} guantity={profile.public_gists}  icon={"https://cdn0.iconfinder.com/data/icons/octicons/1024/gist-512.png"} />
            <ListItem name={"Followers"} guantity={profile.followers}  icon={"https://cdn1.iconfinder.com/data/icons/basic-random-line/32/add_user-512.png"} />
            <ListItem name={"Following"} guantity={profile.following}  icon={"data:image/png;base64,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"} />
        </ListArea>
    )
};

export default Lists;
