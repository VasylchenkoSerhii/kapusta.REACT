import React from 'react'
import { BlockExpInc,BlockProduct, Hero, Section } from './Balance.styled'
// import { useState } from 'react';
// import Calendar from 'react-calendar';
// import { Calculator } from 'react-mac-calculator';
// import 'react-calendar/dist/Calendar.css';
// import { Formik } from 'formik';
import { ToTransaction } from 'components/ToTransaction/ToTransaction';
import ReportsBalanceBlock from 'components/ReportsBalanceBlock/ReportsBalanceBlock';
import { ExpIncNavigation } from 'components/ExpIncNavigation/ExpIncNavigation';
import { MobileTable } from 'components/MobileTable/MobileTable';
import { useMediaQuery } from 'react-responsive';
import { CalendarComponent } from 'components/CalendarComponent/CalendarComponent';
import { TabletTable } from 'components/TabletTable/TabletTable';
import { TabletForm } from 'components/TabletForm/TabletForm';

export default function Balance() {
  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <Section>
      <Hero>
        <ToTransaction />
        <ReportsBalanceBlock />
        <ExpIncNavigation/>
        <BlockExpInc>
        <div>
          <BlockProduct>
            <CalendarComponent />
            <TabletForm/>
          </BlockProduct>
          <div>
            <TabletTable />
          </div>
        </div>
        </BlockExpInc>
        {isMobile && <MobileTable />}
      </Hero>
    </Section>
  )
}

