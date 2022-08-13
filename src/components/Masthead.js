
import {Button} from 'reactstrap'
import ContactFormModal from './ContactFormModal'

const Masthead = () => {

  return (

    <header class="masthead">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center">
              <h1 class="fw-light">Bounce Houses for all occasions</h1>
              <ContactFormModal>Contact us!</ContactFormModal>
            </div>
          </div>
        </div>
      </header>

  )
}

export default Masthead