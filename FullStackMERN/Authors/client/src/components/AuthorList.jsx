// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from '@reach/router';
// import DeleteButton from './DeleteButton';

// export default props => {
//     const[author, setAuthor ] = useState
    
//     useEffect( () => {
//         axios.get('http://localhost:8000/api/author')
//         .then(res => setAuthor(res.data));
//     }, [])

//     const removeFromDom = authorId => {
//         setAuthor(author.filter(author => author._id != authorId))
//     }

//     return(
//         <div>
//             {author.map((author, idx) => {
//                 return(
//                     <p key={idx}>
//                         {author.firstName}
//                     </p>
//                     // <table>
//                     //     <tr>
//                     //         <th>Author</th>
//                     //         <th>Actions Avalible</th>
//                     //     </tr>
//                     //     <tr>
//                     //         <td key={idx}>{author.firstName} {author.lastName}</td>
//                     //         <td><DeleteButton authorId={author._id} successCallBack={()=>removeFromDom(author._id)}/></td>
//                     //     </tr>
//                     // </table>
//                 )
//             })}
//         </div>
//     )


// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
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
            {author.map((author, idx) => {
                return(
                <table>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td key={idx}>{author.firstName} {author.lastName}</td>
                        <td key={idx}><DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/></td>
                    </tr>
                </table>
            )})}
            {/* <table>
                <tr>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    {author.map((author, idx)=> {
                        return(
                            <>
                            <td key={idx}>{author.firstName} {author.lastName}</td>
                            <td><DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/></td>
                            
                            </>
                        )
                    })}
                </tr>
            </table> */}
            
        </div>
    )
}