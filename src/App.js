import GlobalStyle from "./assets/css/GlobalStyle"
import Header from "./components/Header";
import FlashCards from "./components/FlashCards";
import FooterInfo from "./components/FooterInfo"
import cards from "./questions"
import { useState } from "react";


export default function App
() {
  const [answeredQuestions, setAnsweredQuestions] = useState(0)

  return (
    <>
      <GlobalStyle/>

      <Header/>
      <FlashCards
        cards={cards}
        answeredQuestions={answeredQuestions}
        setAnsweredQuestions={setAnsweredQuestions}
      />
      <FooterInfo
        cards={cards}
        answeredQuestions={answeredQuestions}
      />
    </>
  );
}



