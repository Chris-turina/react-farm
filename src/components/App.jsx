import React from 'react';
import Header from './Header';
import DayList from './DayList';
import SmallHeader from './SmallHeader';
import MonthList from './MonthList';
import { Switch, Route } from 'react-router-dom';




function App(){
  const styles = {
    containerStyle: {
      width: '1200',
      backgroundColor: '#FFE1A1'
    }
  };
  return(
    <div style={styles.containerStyle}>
      <Header />
      <Switch>
        <Route exact path='/' component={DayList} />
        <Route path='/monthlist' component={MonthList} />
      </Switch>
  
    </div>
  );
}

export default App;
