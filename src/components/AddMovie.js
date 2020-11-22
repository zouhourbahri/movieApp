import React, { useState } from 'react'
import './style.css'
//Bootstrap
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const AddMovie = ({ modification }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newModif, setNewModif] = useState({
        title: '',
        description: '',
        posterURl: '',
        rate: {
            size: 30,
            count: 5,
            value: 0,
            edit: false
        }
    })

    // const typecontrole= (str) => {
    //     ( str.startsWidh("https") || str.startsWidh("http") ) ? str : alert (""+str+" is not a link") ;
    // }

    return (
        <div className="modal2" id="Add">
            <Button variant="primary" onClick={handleShow}>
                Add a new movie
                 </Button>
            <Modal className="modal3" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add movie properties here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form">
                        <div className="position">
                            <label> Title : </label>
                            <input type="text" placeholder="add the title ..." value={newModif.title} onChange={(e) => { setNewModif({ ...newModif, title: e.target.value }) }} />
                        </div>
                        <div className="position">
                            <label className="formdescription"> Description : </label>
                            <input className="inputdesc" type="text" placeholder="add a description ..." value={newModif.description} onChange={(e) => { setNewModif({ ...newModif, description: e.target.value }) }} />
                        </div>
                        <div className="position">
                            <label className="formposter"> PosterURL :</label>
                            <input className="inputposter" type="text" placeholder="add poster link here ..." value={newModif.posterURL} onChange={(e) => { setNewModif({ ...newModif, posterURl: e.target.value }) }} />
                        </div>
                        <div className="position">
                            <label className="formrate"> Rate :</label>
                            <select className="select" value={newModif.rate.value} onChange={(e) => {
                                setNewModif({
                                    ...newModif, rate: {
                                        size: 30,
                                        count: 5,
                                        value: +e.target.value,
                                        edit: false
                                    }
                                })
                            }}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                    <Button variant="primary" onClick={ () => {modification(newModif);
        setNewModif({
                        title: '',
            description: '',
            posterURl: '',
            rate: {
                        size: 30,
                count: 5,
                value: 0,
                edit: false
            }});  handleClose() }}>
                        Save Changes
                      </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}


export default AddMovie
