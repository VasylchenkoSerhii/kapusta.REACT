import React from 'react'
import { BlockExpInc,BlockProduct, ContainerDesktop, ContainerTablet, Hero, Section } from './Balance.styled'
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
// import { CalendarComponent } from 'components/CalendarComponent/CalendarComponent';
import { TabletTable } from 'components/TabletTable/TabletTable';
import { TabletForm } from 'components/TabletForm/TabletForm';
import { SummaryTable } from 'components/SummaryTable/SummaryTable';

export default function Balance() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767 } && { maxWidth: 1279});

  return (
    <Section>
      {/* <Hero>
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
              <SummaryTable/>
          </div>
        </div>
        </BlockExpInc>
        {isMobile && <MobileTable />}
      </Hero> */}
      {isMobile ? (
        <Hero>
          <ToTransaction />
          <ReportsBalanceBlock />
          <ExpIncNavigation />
          <MobileTable />
        </Hero>
      ) : (
        <Hero>
          <ReportsBalanceBlock />
          <ExpIncNavigation />
          <BlockExpInc>
            <div>
              <BlockProduct>
                {/* <CalendarComponent /> */}
                  <TabletForm />
                  {!isTablet ? (
                    <ContainerDesktop>
                      <TabletTable />
                      <SummaryTable />
                    </ContainerDesktop>
                  ) : (
                    <ContainerTablet>
                      <TabletTable />
                    </ContainerTablet>
                  )}
              </BlockProduct>
            </div>
          </BlockExpInc>
          {isTablet && <SummaryTable />}
        </Hero>
      )}

    </Section>
  )
}

