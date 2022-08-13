import React from 'react';
import {Card, CardImg, CardBody, CardTitle, Button, Col} from 'reactstrap';


const BounceHouseCard = ({bouncehouse}) => {
    
    const { id,image ,name, price,description} = bouncehouse;
    
   

    return (
        
        <Col >
        
                <Card width='100%'>
                    
                    <CardImg 
                        width='100%'
                        src={image}
                        alt={name}
                    /> 
                    
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <h5>{price} per day</h5>
                        <div>{description}</div>
                        

                        <Button 
                            className='mt-3'  
                        >
                                Book Now</Button>

                                
                        
                    </CardBody>
                    
                </Card>

            
        </Col>
        
    )
}



export default BounceHouseCard