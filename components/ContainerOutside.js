import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerOutside() {
    return (
        <Navbar style={{backgroundColor:'#333'}}>
            <Container>
                <Navbar.Brand className='text-white' href="/">Ruslan RESHETNIKOV</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='text-white'>
                        Signed in as: <a className='text-white' href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ContainerOutside;