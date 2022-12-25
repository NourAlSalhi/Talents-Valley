import styled from "styled-components";

export const Container = styled.div`
width: 1649px;
margin: 0 auto;
position: relative;
input{
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  padding: 21px 70px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
svg{
    position: absolute;
}
.search{
    left: 25px;
}
.filter{
    right: 30px;
}
.search,.filter{
    top: 15px;
}
`