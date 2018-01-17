import React from 'react';


function MonthCardFoodList(props){
  const styles = {
    containerStyle: {
      width: '150px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    textStyle: {
      marginBottom: '8px'
    }
  };
  return(
    <div style={styles.containerStyle}>
      <p style={styles.textStyle}>{props.selection}</p>
    </div>
  );
}


export default MonthCardFoodList;
