import GlobalStyle from "./assets/css/GlobalStyle"
import Header from "./components/Header";
import FlashCards from "./components/FlashCards";
import FooterInfo from "./components/FooterInfo"
import cards from "./questions"


export default function App() {

  return (
    <>
      <GlobalStyle/>

      <Header/>
      <FlashCards
        cards={cards}
      />
      <FooterInfo/>
    </>
  );
}



