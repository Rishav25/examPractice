import '../SideBar.css';

const Stats  = () => {
    return(
        <div className="wrapperStats">
            <h2>Statistics</h2>
            <button className="mTrigger">Message Trigger</button>
            <h3 className="statsHeader">Total Connections</h3>
            <h3 className="statsDetails">1200</h3>
            <br/>
            <h3 className="statsHeader">Total Messages Sent</h3>
            <h3 className="statsDetails">1000</h3>
            <br/>
            <h3 className="statsHeader">Total time taken</h3>
            <h3 className="statsDetails">3 Days</h3>
            <br/>
            <h3 className="statsHeader">URL redirects</h3>
            <h3 className="statsDetails">876</h3>
        </div>
    )
}

export default Stats;