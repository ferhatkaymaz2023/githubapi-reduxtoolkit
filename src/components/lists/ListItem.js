import styled from "styled-components";


const Item = styled.div`
  background-color:white;

  
  padding:10px;
  display:flex;
  box-shadow:0px 0px 1px gray;
  border-radius:5px;
  
`

const Icon = styled.img.attrs(props => ({
    src: props.src ? props.src : "https://placeimg.com/75/75/any"
}))`
    width: 40%;
    object-fit: contain;
  
`

const ItemContent = styled.div`
  margin-left:20px;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  
`



const ListItem = ({name,guantity,icon}) => {
    return(
        <Item>
            <Icon src={icon} />
            <ItemContent>
                <h1>{guantity} </h1>
                <span>{name}</span>
            </ItemContent>
        </Item>
    )
}

export default ListItem;
