import React from 'react';
import { DiFirebase, DiJavascript1, DiReact, DiUnitySmall, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, JavaScript, HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Python, C#, Java, SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript1 size="3rem"></DiJavascript1>
        <ListContainer>
          <ListTitle>Other Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            C++, C, GLSL, ShaderLab
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUnitySmall size="3rem"></DiUnitySmall>
        <ListContainer>
          <ListTitle>Game Engines</ListTitle>
          <ListParagraph>
            Experience with <br />
            Unity, Godot, and Phaser
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size="3rem"></DiVisualstudio>
        <ListContainer>
          <ListTitle>Other Proficiencies</ListTitle>
          <ListParagraph>
            Experience with <br />
            Visual Studio and VS Code, Git/Github, Vim, Windows, and Unix
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
