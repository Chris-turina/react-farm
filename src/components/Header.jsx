import React from 'react';

function Header(){
  const styles = {
    containerStyle: {
      width: '90%',
      border: '1px solid black',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '25px'
    },
    headerTextStyle: {
      textAlign: 'center'
    }
  }
  return (
    <div style={styles.containerStyle}>
      <h1 style={styles.headerTextStyle}>Avery's Organics</h1>
    </div>
  );
}

export default Header;
