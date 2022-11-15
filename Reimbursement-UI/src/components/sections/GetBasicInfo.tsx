import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reimClient from '../../remote/reim.client';

const GetBasicInfo: React.FC<unknown> = (props) => {

  const [userInfo, setUserInfo] = useState({res:[]});
  const [reimInfo, setReimInfo] = useState({res:[]});

  function writeUserInfo() {
    const listItems1 = (<ul> { JSON.stringify(userInfo.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems1, document.getElementById('basicInfo'));
  }

  function writeReimInfo() {
    const listItems2 = (<ul> { JSON.stringify(reimInfo.res, null, 3) } </ul>);
     ReactDOM.render(
         listItems2, document.getElementById('basicInfo'));
  }

  const handleGetUserInfo = async () => {
    const response = await reimClient.get('employee/info');
    setUserInfo({res:response.data.res});
    console.log("the db response is: ", response.data);
    writeUserInfo();
  }

  const handleGetReimInfo = async () => {
    const response = await reimClient.get('employee/reim/info');
    setReimInfo({res:response.data.res});
    console.log("the db response is: ", response.data);
    writeReimInfo();
  }

  return (
    <>
    <div className="myForms">
        <h3>Info</h3>
        <br/>
        <button id='button1' onClick={ handleGetUserInfo } className="btn btn-primary">My Info</button>
        <button onClick={ handleGetReimInfo } className="btn btn-primary">Reim Info</button>
        <br/><br/>
        <pre id='basicInfo'>
        </pre>
    </div>

    </>
  );
};

export default GetBasicInfo;
