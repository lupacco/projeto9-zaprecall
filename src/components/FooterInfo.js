import styled from "styled-components"

export default function FooterInfo(props){
    const { cards, answeredQuestions } = props
    return(
        <FooterInfoContainer>
            {answeredQuestions}/{cards.length} CONCLUÍDOS
        </FooterInfoContainer>
    )
}

const FooterInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    text-align: center;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
    color: #333333;
`