import React, {useState} from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const RegistrationForm = ()=>{

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const submitForm = (e)=> {
        e.preventDefault()
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)

        //console.log({firstName, lastName, email, password})

        console.log(payload);
    }
////onChange= {(e)=>{setFirstName(e.target.value)}}
    return(
        <>
            <h2>Registration Form</h2>
            <form onSubmit={submitForm}>
                <Form.Group className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control 
                        type="text" name="firstName" placeholder="Enter first name">
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control 
                        type="text" name="lastName" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        we'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">submit</Button>
            </form>
        </>
    )
}

export default RegistrationForm;