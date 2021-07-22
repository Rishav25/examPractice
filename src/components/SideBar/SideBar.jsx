import {AiOutlineNodeIndex,AiFillSetting,AiFillSignal,AiOutlineCaretUp} from "react-icons/ai";
import { IconContext } from "react-icons";
import {useState} from 'react';
import ReactFlow ,{addEdge} from 'react-flow-renderer';

import Settings from "./Options/Settings.jsx";
import Stats from "./Options/Stats.jsx";

import './SideBar.css';

const SideBar = () => {

    const firstEle = [
        {id : '1' , data:{label : 'Start Campaign'}, position : {x:5,y:250}, style : {backgroundColor : '#6FCF97' , color : 'white' , fontSize : '16px' , fontFamily : 'Poppins'}}
    ];
    const [elements,setElements] = useState(firstEle);

    const [option,setOption] = useState('N');
    
    const addNode = (nodeName,id) => {
        if(id === 'a')
        {
        setElements(e => e.concat({
            id : (e.length+1).toString(),
            data : {label : `${nodeName}`},
            position : {x: Math.random()*500, y: Math.random()*500},
            style : {backgroundColor : '#5A65FF' , color : 'white' , fontSize : '16px' , fontFamily : 'Poppins'}
        }));
        }
        if(id === 'l')
        {
            setElements(e => e.concat({
                id : (e.length+1).toString(),
                data : {label : `${nodeName}`},
                position : {x: Math.random()*500, y: Math.random()*500},
                style : {backgroundColor : '#FF8F61' , color : 'white' , fontSize : '16px' , fontFamily : 'Poppins'}
            }));
        }
        if(id === 'c')
        {
            setElements(e => e.concat({
                id : (e.length+1).toString(),
                data : {label : `${nodeName}`},
                position : {x: Math.random()*500, y: Math.random()*500},
                style : {backgroundColor : '#6FCF97' , color : 'white' , fontSize : '16px' , fontFamily : 'Poppins'}
            }));
        }

    };

    const onConnect = (params) => setElements(e => addEdge(params,e));
    const Content = () =>{
        if(option === 'N')
        {
            return(
                <div className="wrapperNodes">
                    <h2>Nodes</h2>
                    <div id="nodeActions">
                    <h3>Actions</h3>
                    <button onClick={() => addNode('Company Finder','a')}>Company Finder</button>
                    <button onClick={() => addNode('Message Sender','a')}>Message Sender</button>
                    <button onClick={() => addNode('Email Sender','a')}>Email Sender</button>
                    <button onClick={() => addNode('SMS','a')}>SMS</button>
                </div>
                <div id="nodeLogics">
                    <h3>Logics</h3>
                    <button onClick={() => addNode('Message Trigger','l')}>Message Trigger</button>
                    <button onClick={() => addNode('Email Trigger','l')}>Email Trigger</button>
                    <button onClick={() => addNode('Accepted','l')}>Logic Accepted</button>
                    <button onClick={() => addNode('Not Accepted','l')}>Logic Not Accepted</button>
                </div>
                <div id="nodeControls">
                    <h3>Controls</h3>
                    <button onClick={() => addNode('Start Campaign','c')}>Start Campaign</button>
                    <button onClick={() => addNode('Goal','c')}>Goal</button>
                </div>
            </div>
        )
        }
        if(option === 'S')
        {
            return(
                <Settings/>
            )
        }
        if(option === 'H')
        {
            return(
                <Stats/>
            )
        }
    }

    if(option === 'C')
    {
        return (
            <div>
            <ReactFlow className="flowWrapper" elements={elements}
                onConnect ={onConnect}
                connectionLineStyle = {{stroke: "#ddd", strokeWidth: 25}}
                connectionLineType ="bezier"
            />
            <div className="wrapperS">
            <div className ="options">
                <button className="nodeButton" onClick={(e) => setOption('N')}>
                    <IconContext.Provider value={{color: `${option === 'N' ? '#6C8AFF' : '#939393'}` , size : '25px'}}>
                        <AiOutlineNodeIndex/>
                    </IconContext.Provider>
                </button>
                <button className="settingButton" onClick={(e) => setOption('S')}>
                    <IconContext.Provider value={{color: `${option === 'S' ? '#6C8AFF' : '#939393'}` , size : '25px'}}>
                        <AiFillSetting/>
                    </IconContext.Provider>
                </button>
                <button className="statsButton" onClick={(e) => setOption('H')}>
                    <IconContext.Provider value={{color: `${option === 'H' ? '#6C8AFF' : '#939393'}` , size : '25px'}}>
                        <AiFillSignal/>
                    </IconContext.Provider>
                </button>
                <button className="collapseButtonS" onClick={(e) => setOption('N')}>
                    <IconContext.Provider value={{color: '#2186e4' , size : '25px'}}>
                        <AiOutlineCaretUp className="expandBut"/>
                    </IconContext.Provider>
                </button>
            </div>
        </div>
        </div>
        );
    }
    else
    {
    return(
        <div>
            <ReactFlow className="flowWrapper" elements={elements}
                onConnect={onConnect}
                connectionLineStyle = {{stroke: "#ddd", strokeWidth: 3}}
                connectionLineType ="bezier"
            />
            <div className="wrapperS">
            <div className ="options">
                <button className="nodeButton" onClick={(e) => setOption('N')}>
                    <IconContext.Provider value={{color: `${option === 'N' ? '#6C8AFF' : '#939393'}` , size : '25px'}}>
                        <AiOutlineNodeIndex/>
                    </IconContext.Provider>
                </button>
                <button className="settingButton" onClick={(e) => setOption('S')}>
                    <IconContext.Provider value={{color: `${option === 'S' ? '#6C8AFF' : '#939393'}` , size : '25px'}}>
                        <AiFillSetting/>
                    </IconContext.Provider>
                </button>
                <button className="statsButton" onClick={(e) => setOption('H')}>
                    <IconContext.Provider value={{color: `${option === 'H' ? '#6C8AFF' : '#939393'}` , size : '25px'}}>
                        <AiFillSignal/>
                    </IconContext.Provider>
                </button>
                <button className="collapseButtonS" onClick={(e) => setOption('C')}>
                    <IconContext.Provider value={{color: '#2186e4' , size : '25px'}}>
                        <AiOutlineCaretUp/>
                    </IconContext.Provider>
                </button>
            </div>
            <hr className="rule"/>
            <Content/>
        </div>
        </div>
    ); 
    }
};

export default SideBar;