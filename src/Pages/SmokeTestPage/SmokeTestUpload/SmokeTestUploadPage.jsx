import React, { useState } from 'react';
import ReactModal from 'react-modal';
import GetToken from '../../../auth/GetToken';
import { useNavigate } from 'react-router-dom';


function SmokeTestUploadPage() {

    const [IsPopupOpen, setIsPopupOpen] = useState(false);
    const [testName, setTestName] = useState('');
    const [urlName, setUrlName] = useState('');
    const navigate = useNavigate();


    function createNewTest(testName, urlName) {
        if (testName==='' || urlName===''){
            alert('You need to fill Test Name and URL fields to create new test');
        } else{
        fetch('/api/contructSST', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': GetToken(),
            },
            body: JSON.stringify({
                "name": testName,
                "sstArray": [
                    {
                        "allowWarnings": false,
                        "allowedConnections": true,
                        "linksReport": false,
                        "cookies": false,
                        "coverage": false,
                        "lighthouse": false,
                        "logRequests": false,
                        "metrics": false,
                        "login": false,
                        "name": "sdfd",
                        "pageTimeout": 60000,
                        "screenshot": false,
                        "site": "google",
                        "url": urlName,
                        "fTimestamp": 1700247953035,
                        "throttling": false
                    }
                ],
                "keep": true
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('User is not authorized');
            }
            setIsPopupOpen(false);
        })
        .catch(() => {
            alert('Your session was expired');
            navigate('/auth');
        })
    }
}


    return (
        <div className="upl-btn-main-container">
            <div className="upload-container">
                <div className="upl-btn-container">
                    <button className="upload-btn" onClick={() => setIsPopupOpen(true)}>Create new test</button>
                </div>
            </div>
            <ReactModal
                isOpen={IsPopupOpen}
                onRequestClose={() => setIsPopupOpen(false)}
            >
                <div className="upl-popup-main-container">
                    <div className="upl-popup-container">
                        <div className="upl-header">
                            <div className="upl-h2-header">
                                <h2>Upload test</h2>
                            </div>
                            <div className="upl-instructions-container">
                                <h3 className="upl-instr-header">To create test you need:</h3>
                                <ul className="upl-instructions">
                                    <li className="upl-instruction">Set test name</li>
                                    <li className="upl-instruction">Set Url</li>
                                    <li className="upl-instruction">Click "Create test" button</li>
                                </ul>
                            </div>
                        </div>
                        <div className="upload-table">
                            <table>
                                <thead className="results-tb-head">
                                    <tr className="results-tr">
                                        <th className="th-results">Test Name</th>
                                        <th className="th-results">URL</th>
                                        <th className="th-results">Add to report</th>
                                        <th className="th-results">AutoRun</th>

                                    </tr>
                                </thead>
                                <tbody className="results-tb-body">
                                    <tr className="results-tb-tr-body upl-tb-tr-body">
                                        <td>
                                            <input className="upl-input" type="text" placeholder="Test Name"
                                            value = {testName}
                                            onChange= {e => setTestName(e.target.value)}></input>
                                        </td>
                                        <td>
                                            <input className="upl-input" type="text" placeholder="URL"
                                            value={urlName}
                                            onChange= {e => setUrlName(e.target.value)}></input>
                                        </td>
                                        <td>
                                            <input className="upl-checkbox" type="checkbox"></input>
                                        </td>
                                        <td>
                                            <input className="upl-checkbox" type="checkbox"></input>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="upl-buttons-main-container">

                            <button className="upl-buttons save-btn"
                            onClick={() => createNewTest(testName, urlName)}>Create new test</button>
                            <button className="upl-buttons close-btn" 
                            onClick={() => setIsPopupOpen(false)}>Close</button>
                        </div>

                    </div>
                </div>
            </ReactModal>

        </div>
    )
};

export default SmokeTestUploadPage;