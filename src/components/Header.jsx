import React from 'react';
import { Link } from 'react-router-dom';


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
      <Link to='/'>Home</Link> | <Link to='/monthlist'>Produce Each Month</Link>
    </div>

  );
}

export default Header;
