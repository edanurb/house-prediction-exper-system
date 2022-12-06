import TreeViewComponent from './TreeViewComponent';
import Box from '@mui/material/Box';
import {v4 as uuidv4} from 'uuid';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '@mui/material/Button';
import deneme from '../deneme.json'
import {useEffect} from "react";
import axios from "../axios";

export default function Rule() {
    const[nodeId, setNodeId] = React.useState("");
    const [ruleInputVal, setRuleInputVal] = React.useState("");
    const [resultInputVal, setResultInputVal] = React.useState("");
    const [datta, setData] = React.useState({});

    const handleNodeSelect = (event, nodeId) => {
        setNodeId(nodeId);

    };
    const handleAddData = () => {

        if (nodeId != "" && ruleInputVal != "") {

            const newData = { ...datta }

            //newData.child.push({id:"55",rule:"befyula"})
            const node = find(newData, nodeId)
            if (resultInputVal == "")
                node.child.push({ id: uuidv4(), rule: ruleInputVal, child: [] })
            else
                node.child.push({ id: uuidv4(), rule: ruleInputVal, result: resultInputVal, child: [] })
            console.log(newData)
            setData(newData)
         
        }
        
        
        // setNodeId("34")
    }
    function find(data, nodeId) {
        if (data.id == nodeId) {
            return data
        }
        else {
            return lookup(data.child, nodeId)
        }
    }
    function lookup(data, k) {
        for (let key in data) {
            let value = data[key]

            if (value.id == k) {
                return value
            }
            else {
                if (value.child && value.child.length != 0) {
                    // console.log("girdi")
                    var result = lookup(value.child, k)
                    if (result) {
                        return result
                    }
                }
            }
        }


        return null;
    }
    function deletefind(data, nodeId) {
        if (data.id == nodeId) {
            return;
        }
        else {
            deletelookup(data.child, nodeId)
        }
    }
    function deletelookup(data, k) {
        for (let key in data) {
            let value = data[key]

            if (value.id == k) {
                console.log("delete girdi");
                delete data[key]
                return;
            }
            else {
                if (value.child && value.child.length != 0) {
                    // console.log("girdi")
                    deletelookup(value.child, k)

                }
            }
        }


        return;
    }




    function handleRuleInputChange(event) {
        setRuleInputVal(event.target.value)
    }
    function handleResultInputChange(event) {
        setResultInputVal(event.target.value)
    }
    function handleDeleteData() {
        const newData = { ...datta }
        deletefind(newData, nodeId)
        console.log(newData)
        setData(newData)
    }
    function handleEditData() {
        if (ruleInputVal != "") {

            const newData = { ...datta }

            //newData.child.push({id:"55",rule:"befyula"})
            let node = find(newData, nodeId)
            if (resultInputVal == "") {
                node.id = uuidv4()
                node.rule = ruleInputVal
                node.child = node.child
            }
            else {
                node.id = uuidv4()
                node.rule = ruleInputVal
                node.result = resultInputVal
                node.child = node.child

            }
            console.log(node)
            console.log(newData)
            setData(newData)
        }
    }

    useEffect(() => {
        axios.get("/api/rule/getRules").then(response => {
            console.log(response.data.data);
            setData(response.data.data);
        } )
    },[])

    return (
        <div>
            <TextField
                id="outlined-multiline-flexible"
                label="Rule"
                multiline
                maxRows={4}
                sx={{ m: 2 }}
                value={ruleInputVal}
                onChange={handleRuleInputChange}


            />
            <TextField
                id="outlined-multiline-flexible"
                label="Result (Optional)"
                multiline
                maxRows={4}
                sx={{ m: 2 }}
                value={resultInputVal}
                onChange={handleResultInputChange}


            />
            <Button sx={{ m: 2 }} variant="contained" onClick={handleAddData}>Add</Button>
            <Button sx={{ m: 2 }} variant="contained" onClick={handleDeleteData}>Delete</Button>
            <Button sx={{ m: 2 }} variant="contained" onClick={handleEditData}>Edit</Button>
            <TreeViewComponent data={datta} handleNodeSelect={handleNodeSelect} />

        </div>
    );
}