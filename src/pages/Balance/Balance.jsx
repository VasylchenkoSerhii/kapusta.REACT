import React from 'react'
import Sprite from '../../images/sprite.svg';
import { Arrow, ButtonTo, Hero, Section } from './Balance.styled'

export default function Balance() {
  return (
    <Section>
      <Hero>
        <ButtonTo>
          <Arrow width={18} height={18}>
            <use xlinkHref={`${Sprite}#back-arrow`}></use>
          </Arrow>
          to transaction
        </ButtonTo>
      </Hero>
    </Section>
  )
}

