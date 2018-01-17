import React from 'react';

function SmallHeader(){
  const styles = {
    containerStyle: {
      width: '90%',
      border: '1px solid black',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '25px'
    },
    smallHeaderTextStyle: {
      textAlign: 'center'
    }
  }
  return(
    <div style={styles.containerStyle}>
      <h3 style={styles.smallHeaderTextStyle}>Produce by Month</h3>
    </div>
  );
}

export default SmallHeader;
