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
  const text1 = 'The East Indies Company, the world’s largest trading company, formed. Netherlands an economic, scientific, and cultural power and the “first capitalist nation.”'
  const text2 = 'The Dutch are no longer a major world power causing serious economic instability. The Netherlands becomes a puppet state of France then Kingdom of Netherland regains independence encouraging industrialization and economic recovery.'
  const text3 = 'Netherlands declares neutrality in World War Two, jewish refugees flee to Netherlands from Nazi Germany. Netherlands is invaded by Germany and the Dutch government flees to London. Netherlands is liberated by the Allies but, most of country remains under Nazis.'
  const text4 = 'Amsterdam becomes a center of the hippie movement, use of soft drugs is now tolerated. The Netherlands becomes first country with marriage equality for same sex couples.'
  const text5 = 'After the murder of Pim Fortuyn an anti-immigrant and anti-Islam politician Amsterdam’s Jewish Cultural Quarter was established. Causing a huge influx in the population.'
  return (
    <GuiderLayout meta={{ layout: 'article' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Timeline events={[
          { section: 'The Dutch Golden Age', title: 'Dutch East Indies', description: text1 },
          { section: 'A Small Nation', title: 'Puppet Nation', description: text2 },
          { section: 'World War 2', title: 'The Effects of War', description: text3 },
          { section: 'Hippy Fever', title: 'Hippie Movement', description: text4 },
          { section: 'Present Day', title: 'Happily Ever After', description: text5 },
        ]} />
      </div>
    </GuiderLayout>
  )
}