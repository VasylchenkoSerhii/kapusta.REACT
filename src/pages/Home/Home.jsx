import AuthForm from 'components/AuthForm/AuthForm';
import Sprite from '../../images/cabagge/sprite.svg';
import {
  Cabagge,
  Hero,
  Subtitle,
  Title,
  CabaggeBody,
  Section,
  Wripper,
} from './Home.styled';

export default function Home() {
  return (
    <Section>
      <Hero>
        <Cabagge width={83} height={89}>
          <use href={`${Sprite}#icon-cabbage`}></use>
        </Cabagge>
        <Title>
          <use href={`${Sprite}#icon-kapusta`}></use>
        </Title>
        <Subtitle>Smart Finance</Subtitle>
      </Hero>
      <Wripper>
        <AuthForm />
        <CabaggeBody width={83} height={89}>
          <use href={`${Sprite}#icon-cabbage`}></use>
        </CabaggeBody>
      </Wripper>
    </Section>
  );
}
