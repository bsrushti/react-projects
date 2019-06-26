import React from 'react';

function CreateTable(props) {
    return <table>{props.data}</table>
}

function CreateTbody(props) {
    return <tbody>{props.data}</tbody>
}

function CreateTrow(props) {
    return <tr>{props.data}</tr>
}

function CreateTdata(props) {
    return <td>{props.data}</td>
}

function GenerateTable(props) {
    return <div>
        <CreateTable data={
            <CreateTbody data={props.rawData.map((x, index) => <CreateTrow key={`tr_${index}`} data={
                x.map((x, index) => <CreateTdata key={`td_${index}`} data={x}/>)}/>)
            }/>
        }/>
    </div>
}

export default GenerateTable;