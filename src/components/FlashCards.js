import styled from "styled-components"
import FlashCard from "./FlashCard"


export default function FlashCards(props){
    const { cards } = props
    return(
        <FlashCardsContainer>
            {
                cards.map((card, index) => {
                    return(
                        <FlashCard
                            key={index}
                            question={card.question}
                            answer={card.question}
                            index={index+1}
                        />
                    )
                })
            }     
        </FlashCardsContainer>
    )
}

const FlashCardsContainer = styled.div`
    width: 100%;
    height: 80vh;
    align-items: center;
    overflow-y: scroll;
`