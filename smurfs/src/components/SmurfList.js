import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../store/smurfActions';

function SmurfList() {
  return <div></div>;
}

function mapToProps(state) {
  return {};
}

export default connect(mapToProps, { getSmurfs })(SmurfList);
