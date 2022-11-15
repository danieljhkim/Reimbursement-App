import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reimClient from '../../remote/reim.client';

const GetMoreInfoSuper: React.FC<unknown> = (props) => {

  const [infoRequest1, setInfoRequest1] = useState({ res:[] });

  function writePreReims() {
    const listItems = (<ul> { JSON.stringify(infoRequest1.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems, document.getElementById('infoRequest1'));
  }

  const handleGetInfoRequest1 = async () => {
    const response = await reimClient.get('employee/super/moreinfo');
    console.log("the db response is: ", response.data);
    setInfoRequest1({ res:response.data.res });
    console.log('writing,', infoRequest1)
    writePreReims();
  }

  return (
    <>
        <div className="myForms">
            <h3>Requested Info Answer</h3>
            <br/>
            <button onClick={ handleGetInfoRequest1 } className="btn btn-primary">Fetch</button>
            <br/><br/>
            <pre id='infoRequest1'>
            </pre>
        </div>
    </>
  );
};

export default GetMoreInfoSuper;
