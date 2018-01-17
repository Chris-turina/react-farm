import React from 'react';

function MonthCard(props){
  const styles = {
    containerStyle: {
      width: '100px',
      height: '100%',
      border: '1px solid grey',
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
      <p style={styles.textStyle}>{props.month}</p>
      <hr />
      <p style={styles.textStyle}>{props.selection}</p>
    </div>
  );
}

export default MonthCard;
