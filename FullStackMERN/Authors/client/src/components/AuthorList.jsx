import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';


import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@material-ui/core';
export default props => {
    const [ author, setAuthor ] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/author/')
            .then(res => setAuthor(res.data));
    }, [])

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId))
    }

    return(
        <div>
            <Table stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell>Author</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {author.map((author, idx)=> {
                return(
                <TableRow>
                            <>
                            <TableCell key={idx}>{author.firstName} {author.lastName}</TableCell>

                            <TableCell><Link to={"/author/" + author._id + "/edit"}><Button color="primary" variant="contained" size="small">Edit</Button></Link>
                            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                            </TableCell>

                            {/* <TableCell><DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/></TableCell> */}
                            
                            
                            
                            </>
                </TableRow>
                    )
                })}
                </TableBody>
            </Table>
            
        </div>
    )
}