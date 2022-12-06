import { useState } from "react"
import styled from "styled-components"
import playBtn from "../assets/img/seta_play.png"
import turnBtn from "../assets/img/seta_virar.png"

export default function FlashCard({question, answer, index}){
    const [questionClicked , setQuestionClicked] = useState(false)

    return(
        <FlashCardContainer
        questionClicked={questionClicked}
        >
            <p>{!questionClicked ? `Pergunta ${index}` : question}</p>
            <button onClick={() => {
                setQuestionClicked(!questionClicked)
            }}>
                <img alt="" src={questionClicked ? turnBtn : playBtn}></img>
            </button>
        </FlashCardContainer>
    )
}

const FlashCardContainer = styled.div`
    position: ${props => props.questionClicked ? "relative" : "static"};
    width: 300px;
    height: ${props => props.questionClicked ? "131px" : "65px" };
    margin: 32px auto;
    background-color: ${props => props.questionClicked ? "#FFFFD4" : "#FFFFFF"} ;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    > p{
        font-family: 'Recursive', sans-serif;
        font-size: 16px;
        font-weight: 700;
        font-style: normal;
        color: #333333;
        ${props => props.questionClicked ? `
            position: absolute;
            top: 16px;
            left: 12px;` : ""}
    }
    > button{
        border-style: none;
        background: ${props => props.questionClicked ? "#FFFFD4" : "#FFFFFF"} ;
        ${props => props.questionClicked ? `
            position: absolute;
            bottom: 16px;
            right: 12px;` : ""}
        img{
            width: ${props => props.questionClicked ? "30px" : "20px"};
            height: ${props => props.questionClicked ? "20px" : "23px"};
        }
        
    }
`