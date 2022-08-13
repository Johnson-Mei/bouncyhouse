import { Button, Col, FormGroup, Container } from 'reactstrap';
import { Formik , Field, Form,ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

function ContactForm() {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
        };

  return (
    <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}

            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
        

           
            <Form>
                <FormGroup row>
                    <Col xs='9'>
                        <Field className='form-control' name='firstName' placeholder='First Name'/>
                        <ErrorMessage name='firstName'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>

                    <Col xs='9'>
                        <Field className='form-control' name='lastName' placeholder='Last Name'/>
                        <ErrorMessage name='lastName'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>

                    <Col xs="3">
                        <Field className='form-control' name='areacode' placeholder='Area Code'/>
                        <ErrorMessage name='areacode'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                    </Col>

                    <Col xs="6">
                        <Field className='form-control' name='phoneNum' placeholder='Phone Number'/>
                        <ErrorMessage name='phoneNum'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                    </Col>

                </FormGroup>


                <FormGroup row>   
                    <Col xs="9">
                        <Field className='form-control' name='email' placeholder='Email Address'/>
                        <ErrorMessage name='email'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                    </Col>
                </FormGroup>




                <FormGroup row>
                    <Col xs="9">
                        <Field className='form-control' name='questions' placeholder='Your inquiry' as='textarea' rows='7'/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col xs={{ size:10, offset:3}}>
                            <Button type='submit'  style={{  border: '1px solid black' }}>
                                Send Question
                            </Button>
                    </Col>
                </FormGroup>

            </Form>
        
        </Formik>
    )
}

export default ContactForm