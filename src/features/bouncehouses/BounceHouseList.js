import {useSelector} from 'react-redux';
import {Col, Row} from 'reactstrap';
import BounceHouseCard from './BounceHouseCard';
import { selectAllBouncehouses }  from './BounceHouseSlice';

const BounceHouseList = () => {
    
    const bouncehouses = useSelector(selectAllBouncehouses);

    console.log('Bouncehouses:', bouncehouses);

    return (

        <Row class='ms-auto'> 
        
            {bouncehouses.map((bouncehouse) => {

                return (
                        
                    <Col 
                        md='4' 
                        className='pt-2' 
                        key={bouncehouse.id}
                        >
                        <BounceHouseCard bouncehouse={bouncehouse} />
                    </Col>
                
                );
                
            })}
        </Row>
    )
}


export default BounceHouseList