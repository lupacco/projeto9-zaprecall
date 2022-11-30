import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function Header(){
    return(
        <HeaderContainer>
            <LogoContainer>
                <img src={logo} alt=""></img>
                <h1>ZapRecall</h1>
            </LogoContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background-color: #FB6B6B;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    > img{
        width: 52px;
    }
    > h1 {
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`