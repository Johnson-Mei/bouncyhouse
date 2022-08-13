import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ContactForm from './ContactForm';


export default function ContactFormModal()  {

    const [ContactModalOpen,setContactModalOpen] = useState(false);
 
    const dispatch = useDispatch()

    const handleModal = (values) => {

        setContactModalOpen(false)

    }

        return (
            <>

                    <Button
                        outline
                        onClick={() => setContactModalOpen(true)}
                        style={{border: '1px solid Black' }}
                    >
                        <i className='fa fa-question-circle-o' /> Contact Us
                    </Button>
              

                    <Modal isOpen={ContactModalOpen}>
                        <ModalHeader toggle={() => setContactModalOpen(false)}>
                            Contact Us!
                        </ModalHeader>

                        <ModalBody>
                    
                            <ContactForm/>
                            
                        </ModalBody>
                    </Modal>

            </>
        )
        
    
}