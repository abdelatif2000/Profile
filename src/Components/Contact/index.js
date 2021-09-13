import React from 'react';
import '../../index.css';
import {Drop,DropTitle,DropSpan,Form,InputText,InputEmail,FormInput,InputSub,TextArea,InputSubmit} from './style';

 const Contact = () => {
    return (
        <Drop class="drop">
        <div className="container">
            <DropTitle class="drop-title"><DropSpan>Drop </DropSpan>Me A line</DropTitle>
            <Form >
                <FormInput class="form-input">
                    <InputText type="text" placeholder="Your Name" />
                    <InputEmail type="email" placeholder="Your Email" />
                </FormInput>
                <InputSub type="text" class="sub" placeholder="Your Subject" />
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <InputSubmit type="submit" value="Send Message" />
            </Form>
        </div>
    </Drop>
    )
}
export default Contact ;
