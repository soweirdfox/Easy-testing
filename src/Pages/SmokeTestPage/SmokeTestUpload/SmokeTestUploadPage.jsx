import React, { useState } from 'react';
import ReactModal from 'react-modal';


function SmokeTestUploadPage() {

    const [IsPopupOpen, setIsPopupOpen] = useState(false);
    const [testName, setTestName] = useState('');
    const [urlName, setUrlName] = useState('');



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
                                            <input className="upl-input" type="text" placeholder="Test Name"></input>
                                        </td>
                                        <td>
                                            <input className="upl-input" type="text" placeholder="URL"></input>
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

                            <button className="upl-buttons save-btn">Save</button>
                            <button className="upl-buttons close-btn" onClick={() => setIsPopupOpen(false)}>Close</button>
                        </div>

                    </div>
                </div>
            </ReactModal>

        </div>
    )
};

export default SmokeTestUploadPage;