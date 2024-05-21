import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
  Frame,
} from '@neato/guider/client';
import logoUrl from '../public/logo.png';

export default function LandingPage() {
  return (
    <GuiderLayout meta={{ layout: 'page' }}>
      <Hero>
        <div style={{ paddingBottom: '0.7em' }}>
          <Frame>
            <div style={{ margin: '0.4em' }}>
              <img src={logoUrl.src} alt="Logo of netherlands" />
            </div>
          </Frame>
        </div>
        <Hero.Title>Netherlands</Hero.Title>
        <Hero.Subtitle>
          Je Maintiendrai, (I will maintain)
        </Hero.Subtitle>
        <Hero.Actions>
          <Button to="/project">Learn more</Button>
          <Button
            to="https://github.com/sussy-code/skool-project"
            type="secondary"
          >
            See source code
          </Button>
        </Hero.Actions>
      </Hero>
      <Frame>
        <CardGrid>
          <Card icon="mdi:chess-king" title="The King">
            The Netherlands is a constitutional monarchy meaning 
            the head of state is a King or Queen whose powers 
            are detailed in the Constitution.
          </Card>
          <Card icon="mdi:cannabis" title="Legalized">
            The Netherlands permits "soft drugs" such as marijuana,
            coffee shops sell small amounts as well as seeds.
          </Card>
          <Card icon="mdi:server" title="Tech Boom">
            In the Netherlands, almost half of the investments in the 
            past year went to the deep tech sector. The sector raised
            15% more than in 2022.
          </Card>
        </CardGrid>
      </Frame>
    </GuiderLayout>
  );
}
