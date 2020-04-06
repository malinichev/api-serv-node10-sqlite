import React from 'react';
import { Table, Button } from "react-bootstrap";
import s from './home-page.module.css'


const HomePage= (props) => {
    
    
    return (
        <>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !props.users
                            ? 
                                null
                            :
                            props.users
                            .filter(el=>el._id!==localStorage.getItem('_id'))
                            .map( (el, i) => {
                                return(
                                <tr key={el._id + i}>
                                    <td>{i}</td>
                                    <td>{el._id}</td>
                                    <td className={s.emailDelBtn}>
                                        {el.email}
                                        <Button onClick={()=>props.delOneUser(el._id)} variant="danger">DEL USER</Button>
                                    </td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div> 
        </>
    );
}
export default HomePage