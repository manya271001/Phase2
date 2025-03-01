import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Form,FormControl,FormGroup,FormLabel } from 'react-bootstrap';
function BootStrapDemo(){
    return(
        <div style={{margin:"100px 250px",padding:"50px",maxWidth:"700px"}}>
            <h1>First BootStrap Form</h1>
            <Form>
                <FormGroup controlId='formBasicEmail'>
                    <FormLabel >Email Adress</FormLabel>
                    <FormControl type='email' placeholder='Enter Email'></FormControl>
                </FormGroup>
                <FormGroup controlId='formBasicPass'>
                    <FormLabel >Password</FormLabel>
                    <FormControl type='password' placeholder='Enter Password'></FormControl>
                </FormGroup>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
export default BootStrapDemo;