import { useState } from 'react';
import '../SideBar.css';

const Settings  = () => {

    const [details,setDetails] = useState({campName : '' , sessCook : '' , sheetURL: ''});

    return(
        <div className="wrapperSettings">
            <h2>Settings</h2>
            <form className="settingsForm">
                <label className="label">Campaign Name</label>
                <input className="settingsInput" placeholder="Text" type ="text" value={details.campName} onChange ={(e) => setDetails({...details,campName :e.target.value})}/>
                <label className="label">Session Cookie</label>
                <input className="settingsInput" placeholder="Text" type ="text" value={details.sessCook} onChange ={(e) => setDetails({...details,sessCook :e.target.value})}/>
                <label className="label">Spreadsheet URL</label>
                <input className="settingsInput" placeholder="Text" type ="text" value={details.sheetURL} onChange ={(e) => setDetails({...details,sheetURL :e.target.value})}/>   
            </form>
        </div>
    )
}

export default Settings;