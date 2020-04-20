import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getSmurfs, deleteSmurf } from '../store/smurfActions';
import SmurfItem from './SmurfItem';

function SmurfList(props) {
  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <div className="smurf-list">
      {props.isFetching && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {props.smurfs &&
        props.smurfs.map((item) => {
          return (
            <SmurfItem
              key={item.id}
              smurf={item}
              delete={() => props.deleteSmurf(item.id)}
            />
          );
        })}
    </div>
  );
}

function mapToProps(state) {
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
  };
}

export default connect(mapToProps, { getSmurfs, deleteSmurf })(SmurfList);
