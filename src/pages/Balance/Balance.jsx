import React from 'react'
import Sprite from '../../images/sprite.svg';
import { Arrow, BlockBalance, BlockReports, ButtonBalance, ButtonTo, FormBalance, Hero, InputBalance, Reports, Section, Title, TitleBalance } from './Balance.styled'

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
        <BlockReports>
          <Title>
            Reports
          </Title>
          <Reports width={24} height={24}>
            <use xlinkHref={`${Sprite}#bar_chart`}></use>
          </Reports>
        </BlockReports>
        <BlockBalance>
          <TitleBalance>
            Balance:
          </TitleBalance>
          <FormBalance>
            <InputBalance placeholder="00.00 UAH" />
            <ButtonBalance>Confirm</ButtonBalance>
          </FormBalance>
        </BlockBalance>
      </Hero>
    </Section>
  )
}

