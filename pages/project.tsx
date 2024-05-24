import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
  Frame,
} from '@neato/guider/client';
import { Timeline } from '../components/Timeline';
import logoUrl from '../public/logo.png';

export default function ProjectPage() {
  const text1 =
    'The East Indies Company, the world’s largest trading company, formed. Netherlands an economic, scientific, and cultural power and the “first capitalist nation.”';
  const text2 =
    'The Dutch are no longer a major world power causing serious economic instability. The Netherlands becomes a puppet state of France then Kingdom of Netherland regains independence encouraging industrialization and economic recovery.';
  const text3 =
    'Netherlands declares neutrality in World War Two, jewish refugees flee to Netherlands from Nazi Germany. Netherlands is invaded by Germany and the Dutch government flees to London. Netherlands is liberated by the Allies but, most of country remains under Nazis.';
  const text4 =
    'Amsterdam becomes a center of the hippie movement, use of soft drugs is now tolerated. The Netherlands becomes first country with marriage equality for same sex couples.';
  const text5 =
    'After the murder of Pim Fortuyn an anti-immigrant and anti-Islam politician Amsterdam’s Jewish Cultural Quarter was established. Causing a huge influx in the population.';
  const text6 =
    'After the fall of the Charlemagne Empire in 814, the Low Countries region has been distributed into further smaller states that were controlled by dukes and tallies. Simultaneously, in the Middle Ages, a solid economic development made the Netherlands perhaps the most extravagant region in Europe.';
  const text7 =
    'With the retreat of the Roman empire, the Franks were now able to form an empire along important routes for trade. This allowed them to gain influence and power against the Romans and to eventually take the Netherlands in 768 BC under the rule of Charlemagne which was nearing the end of the Frankish empire.';
  return (
    <GuiderLayout meta={{ layout: 'article' }}>
      <div
        style={{ display: 'flex', justifyContent: 'flex-start', gap: '1em' }}
      >
        <Timeline
          events={[
            {
              section: 'Middle Ages',
              title: 'Early Economic Growth',
              description: text6,
              img: 'icon/wheel.png',
            },
            {
              section: 'Frankish Empire',
              title: 'After The Romans',
              description: text7,
              img: 'icon/torch.png',
            },
            {
              section: 'The Dutch Golden Age',
              title: 'Dutch East Indies',
              description: text1,
              img: 'icon/gold.png',
            },
            {
              section: 'A Small Nation',
              title: 'Puppet Nation',
              description: text2,
              img: 'icon/puppet.png',
            },
            {
              section: 'World War 2',
              title: 'The Effects of War',
              description: text3,
              img: 'icon/war.png',
            },
            {
              section: 'Hippy Fever',
              title: 'Hippie Movement',
              description: text4,
              img: 'icon/peace.png',
            },
            {
              section: 'Present Day',
              title: 'Happily Ever After',
              description: text5,
              img: 'icon/clock.png',
            },
          ]}
        />
        <div style={{ paddingInline: '1em' }}>
          <h1>Government</h1>
          <Frame plain={true}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '2em' }}>
              <img
                src="gov-structure.png"
                width="425"
                height="425"
                alt="government structure diagram"
              />
              <img
                src="law-making-structure.png"
                width="425"
                height="425"
                alt="law making diagram"
              />
            </div>
          </Frame>
          <p>
            The Netherlands is a constitutional monarchy with a parliamentary
            system. The King of the Netherlands is the head of state, but his
            role is mostly ceremonial. The Prime Minister is the head of
            government and is responsible for running the country. The
            Netherlands has a bicameral parliament, which consists of the House
            of Representatives and the Senate. The House of Representatives is
            the lower house and is elected by the people. The Senate is the
            upper house and is elected by the members of the provincial
            legislatures.
          </p>
          <hr></hr>
          <h1>Economy</h1>
        </div>
      </div>
    </GuiderLayout>
  );
}
