import React from 'react';
import Header from './Header';
import DayList from './DayList';
import SmallHeader from './SmallHeader';
import MonthList from './MonthList';


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
      <DayList />
      <SmallHeader />
      <MonthList />
    </div>
  );
}

export default App;
