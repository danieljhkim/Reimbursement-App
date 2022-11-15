import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reimClient from '../../remote/reim.client';

const GetInfoRequest: React.FC<unknown> = (props) => {

  const [infoRequest, setInfoRequest] = useState({ res:[] });

  function writePreReims() {
    const listItems = (<ul> { JSON.stringify(infoRequest.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems, document.getElementById('infoRequest'));
  }

  const handleGetInfoRequest = async () => {
    const response = await reimClient.get('employee/moreinfo');
    console.log("the db response is: ", response.data);
    setInfoRequest({ res:response.data.res });
    console.log('writing,', infoRequest)
    writePreReims();
  }

  return (
    <>
        <div className="myForms">
            <h3>Requested Info</h3>
            <br/>
            <button onClick={ handleGetInfoRequest } className="btn btn-primary">Fetch</button>
            <br/><br/>
            <pre id='infoRequest'>
            </pre>
        </div>
    </>
  );
};

export default GetInfoRequest;
