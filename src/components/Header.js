import {Navbar, NavbarBrand, Collapse, NavbarToggler,Nav, NavItem, Button} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import {useState} from 'react'


const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    return (
    <div className="App">
      <Navbar light color='white' fixed="top" expand='md'>
        Bounce Houzz

        <NavbarToggler onClick = {() => setMenuOpen(!menuOpen)}/>

            <Collapse isOpen = {menuOpen} navbar>

                <Nav className='mx-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                             Home
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='nav-link' to='/browse'>
                             Browse
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                             Contact Us
                        </NavLink>
                    </NavItem>
                 
                </Nav>
              

            </Collapse>

      </Navbar>
      
    </div>
    )
}

export default Header
