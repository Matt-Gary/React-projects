import React from 'react';
import PropTypes from 'prop-types';

function Fruits(props) {

  var ListFruit = props.items.map(item => <li>{item}</li>)

return(

    <h1>{ListFruit}
    </h1>

)

}



export default Fruits;
