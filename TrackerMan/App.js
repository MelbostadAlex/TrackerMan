import React, { useState } from 'react';

import {
  Container,
  Content,
  FooterTab,
  Button,
  Text,
  Icon,
  Left,
  Right,
  Body,
  Title,
  Subtitle
} from 'native-base';

// Routing 
import { NativeRouter, Switch, Route, } from "react-router-native";

// Components
import MenuHeader from './components/MenuHeader'
import NavigationFooter from './components/NavigationFooter'


const App = ( props ) => {
  const [active, setActive] = useState(false)

  return (
    <NativeRouter>
      <Container>
        <MenuHeader title="TrackerMan"/>
        <Content>

          <Switch>
              {/* {<Route path="/" component={Home}/>} */}
                
              
          </Switch>

        </Content>
        <NavigationFooter active={active} setActive={setActive}/>
      </Container>
    </NativeRouter>
  );
};

export default App;
