import { Col, Row} from 'reactstrap'
import ContactForm from '../components/ContactForm';
// import backgroundIMG from '../img/background 2.jpg';


const ContactPage = () => {
    return (

    
            <Row className='row-content mt-5'>

                

                    
                    <Col xs='6'>
                           
                    </Col>
                    
                    
                    <Col xs='6'>

                        <Row>
                            <Col xs='8'>
                                <h4>Contact Us With Questions</h4>
                                <h2><hr/></h2>
                            </Col>
                            
                            <Col xs='10'>
                                <ContactForm/>
                            </Col>
                        </Row>

                    </Col>

                    
               
            </Row>
        

    )
}; 

export default ContactPage;