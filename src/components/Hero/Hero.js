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
        I'm studying Computer Science and Game Design at UC Santa Cruz.<br/>
        Looking for software development jobs for after graduation in June 2022!
      </SectionText>
      <Button onClick={() => { window.location = '#about'}}>About Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;