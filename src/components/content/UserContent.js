import styled from "styled-components";
import {profileInfo} from "../../features/github/githubSlice";
import {useSelector} from "react-redux";

const ContentDiv = styled.div`
  background-color: white;
  border-radius:5px;
  box-shadow:0x 0px 1px gray;
  position:relative;
  padding:10px;
  display:flex;
  height:200px;
  
  &:before{
    content:"Kullanici";
    position:absolute;
    top:-28px;
    padding:5px 20px;
    background-color:white;
    left:0px;
  }
`



const ProfileIcon = styled.img.attrs(props => ({
    src: props.src ? props.src : "https://placeimg.com/75/75/any"
}))`
    width:40%;
      @media screen and (max-width:820px) {
        width:25%;
      }
    object-fit:cover;
    border-radius:100%;
    box-shadow:0px 0px 5px gray;
  
`

const ProfileContent = styled.div`
    margin-left:15px;
    margin-top:10px;
  
`
const List = styled.ul`
  list-style-type:none;
`

const ListItem = styled.li`
  display:flex;
  margin-top:10px;
  
`

const ListIcon = styled.img.attrs(props => ({
    src: props.src ? props.src : "https://placeimg.com/15/15/any"
}))`
    width:30px;
    height:20px;
    object-fit:contain;

  
    box-shadow:0px 0px 5px gray;
  
`


const UserContent = () => {

    const profile = useSelector(profileInfo);


    return(
        <ContentDiv>
            <ProfileIcon src={profile.avatar_url} />
            <ProfileContent>
                <h3> {profile.name ? profile.name : profile.login} </h3>
                <List>
                    <ListItem>
                        <ListIcon src={"https://cdn1.iconfinder.com/data/icons/business-elements-15/150/Firma-512.png"} />
                        &nbsp; {profile.company ? profile.company : "Not found company"}
                    </ListItem>
                    <ListItem>
                        <ListIcon src={"data:image/png;base64,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"} />
                        &nbsp; {profile.location ? profile.location : "Not found location"}
                    </ListItem>
                    <ListItem>
                        <ListIcon style={{backgroundColor:"blue"}} src={"https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"} />
                        &nbsp; {profile.twitter_username ? profile.twitter_username : "Not found twitter "}
                    </ListItem>
                    <ListItem>
                        <ListIcon src={"https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png"} />
                        &nbsp; {profile.email ? profile.email : "Not found email"}
                    </ListItem>
                </List>

            </ProfileContent>
        </ContentDiv>
    )
};

export default UserContent;
