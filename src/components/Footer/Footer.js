import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';
import Button from '../../styles/GlobalComponents/Button';
import Link from 'next/link'

import { SocialIcons, NavLink } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <Button onClick={() => { 
      window.scrollTo({top: 0, behavior: "smooth"});
      window.history.pushState({}, null, "/");
      }}>Back to top
    </Button>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:530-448-7851">(530)448-7851</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:robbieradzville@gmail.com">robbieradzville@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/robradz">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/robradz">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://robradz.itch.io">
            <FaItchIo size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
