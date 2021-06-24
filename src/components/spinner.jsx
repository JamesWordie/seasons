import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// setting a default props value incase you forget to add to component in App
Spinner.defaultProps = {
  message: "Finding your location..."
}

export default Spinner;
