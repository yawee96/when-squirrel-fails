import React, { useState } from "react";
import { Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import CoffeePage from "./CoffeePage";
import SpecialDrinksPage from "./SpecialDrinksPage";
import BakedPage from "./BakedPage";
import SandwichBagelPage from "./SandwichBagelPage";
import CookiesPage from "./CookiesPage";
import ColdDisplayPage from "./ColdDisplayPage";
import SeasonalDrinksPage from "./SeasonalDrinksPage";
import ComboPage from "./ComboPage";

function Pages(props) {

  const [tabValue, setTabValue] = useState(0);

  const handleTabs = (event, value) => {
    setTabValue(value);
  }

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleTabs}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        aria-label="scrollable tabs"
      >
        <Tab label="Coffee" />
        <Tab label="Cookies" />
        <Tab label="Special Drinks" />
        <Tab label="Baked" />
        <Tab label="Sandwich/Bagels" />
        <Tab label="Cold Display" />
        <Tab label="Seasonal Drinks" />
        <Tab label="Combo" />
      </Tabs>
      <TabPanel {...props} tabValue={tabValue} index={0} >
        <CoffeePage {...props} />
      </TabPanel>
      <TabPanel {...props} tabValue={tabValue} index={1} >
        <CookiesPage {...props} />
      </TabPanel>
      <TabPanel {...props} tabValue={tabValue} index={2} >
        <SpecialDrinksPage {...props} />
      </TabPanel>
      <TabPanel {...props} tabValue={tabValue} index={3} >
        <BakedPage {...props} />
      </TabPanel>
      <TabPanel {...props} tabValue={tabValue} index={4} >
        <SandwichBagelPage {...props} />
      </TabPanel>
      <TabPanel {...props} tabValue={tabValue} index={5} >
      <ColdDisplayPage {...props} />
      </TabPanel>
      <TabPanel {...props} tabValue={tabValue} index={6} >
      <SeasonalDrinksPage {...props} />
      </TabPanel>
      <TabPanel {...props} tabValue={tabValue} index={7} >
      <ComboPage {...props} />
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { tabValue, index, children } = props;

  // const demoMethod = (value) => {
  //   sendTestDataToApp(value);
  // }

  return (
    <div>
      {
        tabValue === index && (
          <div>
            {/* <div onClick={() => demoMethod("clicked from pages!")}>Hello from Pages</div> */}
            <br/>
            {children}
          </div>
        )
      }
    </div>
  )
}

export default Pages;