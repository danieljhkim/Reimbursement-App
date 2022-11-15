import React, { useContext } from 'react';
import ReimRequest from '../sections/ReimRequest';
import ChangeApproval from '../sections/ChangeApproval';
import GradeSubmission from '../sections/GradeSubmission';
import PreReimApproval from '../sections/PreReimApproval';
import PostReimApproval from '../sections/PostReimApproval';
import GradeApproval from '../sections/GradeApproval';
import GetPreReims from '../sections/GetPreReims';
import GetGradedReim from '../sections/GetGradedReim';
import GetEmployApproval from '../sections/GetEmployApproval';
import UserContext from '../../context/UserContext';
import SubmitMoreInfo from '../sections/SubmitMoreInfo';
import GetInfoRequest from '../sections/GetInfoRequest';
import RequestInfo from '../sections/ReqeustInfo';
import GetPostReims from '../sections/GetPostApproval';
import GetGrades from '../sections/GetGrades';
import GetMoreInfoSuper from '../sections/GetMoreInfoSuper';
import GetBasicInfo from '../sections/GetBasicInfo';

const EmployPage: React.FC<unknown> = (props) => {
  const { role, user } = useContext(UserContext);
  return (
    <>
    <div id='empContainer'>
      <hr/>
      <div id='infoBox'>
        <span>Logged-in: <b>{user}</b></span>
      </div>
      <div className="row">
        <div className="col-md">
          <ReimRequest/>
        </div>
        <div className="col-md">
          <GetBasicInfo/>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md">
          <GradeSubmission/>
        </div>
        <div className="col-md">
          <GetGrades/>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md">
          <ChangeApproval/>
        </div>
        <div className="col-md">
          <GetEmployApproval/>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md">
          <SubmitMoreInfo/>
        </div>
        <div className="col-md">
          <GetInfoRequest/>
        </div>
      </div>
            
        { role !== 'employee' &&
          <>
            <div id='employContainer'>
              <h3>Supervisor</h3>
            </div>   
            <div className="row">
              <div className="col-md">
                <RequestInfo/>
              </div>
              <div className="col-md">
                <GetMoreInfoSuper/>
              </div>
            </div>
            <hr/>
          { role !== 'benco' &&
           <>
            <div className="row">
              <div className="col-md">
                <PreReimApproval/>
              </div>
              <div className="col-md">
                <GetPreReims/>
              </div>    
            </div>
            <hr/>          
            <div className="row">
              <div className="col-md">
                <GradeApproval/>
              </div>
              <div className="col-md">
                <GetGradedReim/>
              </div>
           </div>   
          </>    
          }
          { role === 'benco' &&
            <>
              <div className="row">
                <div className="col-md">
                  <PostReimApproval/>
                </div>
                <div className="col-md">
                  <GetPostReims/>
                </div>
              </div>        
              <hr/>          
              <div className="row">
                <div className="col-md">
                  <GradeApproval/>
                </div>
                <div className="col-md">
                  <GetGradedReim/>
                </div>
              </div>   
            </>
            }
          </>
        }
    </div>
    </>
  );
};

export default EmployPage;