import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reimClient from '../../remote/reim.client';

const GetPreReims: React.FC<unknown> = (props) => {

  const [preReim, setPreReim] = useState({res:[]});

  function writePreReims() {
    const listItems = (<ul> { JSON.stringify(preReim.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems, document.getElementById('preReims'));
  }

  const handleGetPreReim = async () => {
    const response = await reimClient.get('employee/super/prereim');
    console.log("the db response is: ", response.data);
    setPreReim({res:response.data.res});
    console.log('writing,', preReim)
    writePreReims();
  }

  return (
    <>
    <div className="myForms">
        <h3>Pre Approvals</h3>
        <br/>
        <button onClick={ handleGetPreReim } className="btn btn-primary">Fetch</button>
        <br/><br/>
        <pre id='preReims'>
        </pre>
    </div>
    </>
  );
};

export default GetPreReims;
