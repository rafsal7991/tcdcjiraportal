import { useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  var test;
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => {
    setEmail("");
    setName("");
     setShow(false)
    };

    const saveChanges = () => {
       setShow(false)
      };
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const[email,setEmail] = useState('');
  const[name,setName] = useState('');

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       ADD USER
      </Button><br></br>
      <Button variant="primary" onClick={handleShow2}>
        UPDATE USER
      </Button>
      <div>YOUR EMAIL IS: {email}</div>
      <div>YOUR NAME IS: {name}</div>

      <Modal show={show} >
        <Modal.Header >
          <Modal.Title>ADD USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>user email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              
                                                                                      
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='form-label'>Full Name {show}</Form.Label>
                                                       <Form.Control
                                                            type='text'
                                                            className='form-control'
                                                            name='fullname'
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                          
                                                        />
                                                         </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} >
        <Modal.Header >
          <Modal.Title>UPDATE USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>user email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              
                                                                                      
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='form-label'>Full Name {show}</Form.Label>
                                                       <Form.Control
                                                            type='text'
                                                            className='form-control'
                                                            name='fullname'
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                          
                                                        />
                                                         </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;