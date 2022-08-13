import {Container,CardGroup} from 'reactstrap'

import BounceHouseList from '../features/bouncehouses/BounceHouseList'

// import { selectRandomCampsite } from '../features/campsites/campsitesSlice.js'
// import { selectCampsiteById } from '../features/campsites/campsitesSlice.js'

const CampsitesDirectoryPage = () => {

    return (
        <Container className='row-content mt-5'>
            <BounceHouseList/>
        </Container>
    )
}

export default CampsitesDirectoryPage