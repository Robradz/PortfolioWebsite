import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        I'm Robbie
      </SectionTitle>
      <SectionText>
        We the best music
      </SectionText>
      <Button onClick={()=> window.location - 'https://google.com'}>Yeet</Button>
    </LeftSection>
  </Section>
);

export default Hero;