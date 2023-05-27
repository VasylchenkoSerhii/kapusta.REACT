import React from 'react'
import Sprite from '../../images/sprite.svg';
import { Arrow, BalockCalendar, BlockBalance,BlockExpInc,BlockHeader,BlockReports, ButtonBalance, ButtonCalendar, ButtonExp, ButtonInc, ButtonTo, CalendarDate, CalendarImage, FormBalance, Hero, ImageBg, InputBalance, Reports, Section, TextBg, Title, TitleBalance, TitleMessageBg, Tooltip, ViewCalendar } from './Balance.styled'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Balance() {
  const [value, setValue] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setTooltipVisible(false); // Скрываем всплывающее сообщение при изменении значения
  };

  return (
    <Section>
      <Hero>
        <ButtonTo>
          <Arrow width={18} height={18}>
            <use xlinkHref={`${Sprite}#back-arrow`}></use>
          </Arrow>
          to transaction
        </ButtonTo>
        <BlockHeader>
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
            <InputBalance
              placeholder="00.00 UAH"
              value={value}
              onChange={handleInputChange}
              onFocus={() => setTooltipVisible(true)}
              onBlur={() => setTooltipVisible(false)}
            />
            <ButtonBalance>Confirm</ButtonBalance>
          </FormBalance>
        </BlockBalance>
        </BlockHeader>
        <Tooltip show={tooltipVisible}>
            <ImageBg />
            <TitleMessageBg>Hello! To get started, enter the<br />current balance of your account!<br /></TitleMessageBg>
            <TextBg>You can't spend money until you have it :)</TextBg>
        </Tooltip>
        {/* <BlockButton> */}
          <ButtonExp>Expenses</ButtonExp>
          <ButtonInc>Income</ButtonInc>
        {/* </BlockButton> */}
        <BlockExpInc>
          <BalockCalendar>
            <ButtonCalendar onClick={handleCalendarToggle}>
              <CalendarImage/>
              <CalendarDate>{selectedDate.toLocaleDateString()}</CalendarDate>
            </ButtonCalendar>
            {showCalendar && (
              <ViewCalendar>
                <Calendar onChange={handleDateChange} value={selectedDate} />
              </ViewCalendar>
            )}
          </BalockCalendar>
        </BlockExpInc>
      </Hero>
    </Section>
  )
}

