import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widgets';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
//import QuizLogo from '../src/components/QuizLogo';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
 `
 

export const QuizContainer = styled.div` 
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
    }
`;
export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer> 
        <Widget>
          <Widget.Header>
            <h1>Perfect World</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum sit dolor amet...</p>
          </Widget.Content>
        </Widget>

        <Widget>       
          <p>Lorem ipsum sit dolor amet...</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl = "https://github.com/Guihdiias"/>
    </QuizBackground>
  )
}
