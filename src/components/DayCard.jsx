import React from 'react';

function DayCard(props){
  const styles = {
    containerStyle: {
      width: '150px',
      height: '100%',
      border: '1px solid grey',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    textStyle: {
      marginBottom: '8px'
    }
  }
  return(
    <div style = {styles.containerStyle}>
      <p style={styles.textStyle}>{props.day}</p>
      <p style={styles.textStyle}>{props.location}</p>
      <div>
        <p style={styles.textStyle}>{props.hours}</p>
        <p style={styles.textStyle}>{props.booth}</p>
      </div>
    </div>
  );

}

export default DayCard;
