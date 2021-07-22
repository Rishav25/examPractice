import {AiFillCaretLeft,AiTwotoneEdit} from "react-icons/ai";
import {useState} from 'react';
import './TopBar.css';

const TopBar = () => {

    const [campaignName, setCampaignName] = useState('Create a New Campaign');
    const [editClicked, setEditClicked] = useState(false);
    const [collapse,setCollapse] = useState(false);
    var today = new Date(),
    date = ("0" + today.getDate()).slice(-2) + "/"+ ("0" + (today.getMonth() + 1)).slice(-2) +"/"+(today.getFullYear()-2000);
    
    const editName = (e) => {
        setEditClicked(!editClicked);
    };

    if(collapse)
    {
        return (
            <button className="expandButton"><AiFillCaretLeft className="clickedArrow" onClick={(e) => setCollapse(!collapse)}></AiFillCaretLeft></button>
        )
    }
    else{
        if(editClicked)
        {
            return(
                <div className="wrapper">
                    <button><AiFillCaretLeft className="arrow" onClick={(e) => setCollapse(!collapse)}></AiFillCaretLeft></button>
                    <form className="form">
                            <input type="text" id="camp" value={campaignName} onChange={(e) => setCampaignName(e.target.value)}/>
                    </form>
                    <button className="editButton" id="editb"><AiTwotoneEdit className="edit" onClick={editName}></AiTwotoneEdit></button>
                    <h3 className="date">Date Created : {date} </h3>
                    <button className="button1">Save as Template</button>
                    <button className="button2">Save Campaign</button>
                </div>
            )
        }
        else
        {
            return(
                <div className="wrapper">
                    <button className="arrowButton"><AiFillCaretLeft className="arrow" onClick={(e) => setCollapse(!collapse)}></AiFillCaretLeft></button>
                    <h3 className="text">{campaignName}</h3>
                    <button className="editButton" id="editb"><AiTwotoneEdit className="edit" onClick={editName}></AiTwotoneEdit></button>
                    <h3 className="date">Date Created : {date} </h3>
                    <button className="button1">Save as Template</button>
                    <button className="button2">Save Campaign</button>
                </div>
            )
        }
}
}
export default TopBar;