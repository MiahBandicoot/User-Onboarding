import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as yup from 'yup'
import formschema from './formschema'
const initial = {
    name:'',
    email:'',
    password:'',
    terms:false,
}
    const errors = {
        name:'',
        email:'',
        password:'',
        terms:'',
    }

const Form = (props) =>{
    const {list, setList} = props
    const [content, setContent] = useState(initial)
    const [contentError,setContentError] = useState(errors)
    const [disb,setdisb] = useState(true)

    function handleC(event){
    const {name,value} = event.target
        yup
        .reach(formschema,name)
        .validate(value)
        .then(valid => {
            setContentError({
                ...contentError, 
                [name]:'',
            })
            
        })
        .catch(error => {
            setContentError({
                ...contentError,
                [name]:error.errors[0]
            })
        })

        setContent({
            ...content,
            [name]:value,
        })
    }

    function handleBox(event){
        const {name, checked} = event.target
        setContent({
            ...content,
            [name]:checked,
        })
    }

    function Submit(event){
        event.preventDefault()
        const newMember = {
            name:content.name.trim(),
            email:content.email.trim(),
            password:content.password.trim(),
        }
        if(!newMember.name||!newMember.email||!newMember.password)
        {return}
        // setList([newMember, ...list])
        setContent(initial)
        postUser(newMember)
    }
    const postUser = (newUser) => {
        axios.post('https://reqres.in/api/users',newUser)
        .then(response => {
            console.log(response)
            setList([response.data, ...list])
        })
        .catch(error => {
            console.error('Server Error', error);
        })
    }
    useEffect(() => {
        formschema.isValid(content)
        .then(valid => {
            setdisb(!valid)
        })
    })
    return (
        <form onSubmit = {Submit}>
            <input
                name = 'name'
                type = 'text'
                placeholder = 'Enter Name'
                value = {content.name}
                onChange = {handleC}
                />
            <input
                name = 'email'
                type = 'text'
                placeholder = 'Enter Email'
                value = {content.email}
                onChange = {handleC}
                />
            <input
                name = 'password'
                type = 'password'
                placeholder = 'Enter Password'
                value = {content.password}
                onChange = {handleC}
                />
            <div>    
                <input type = 'checkbox' 
                name = 'terms' 
                checked = {content.terms === true} 
                onChange = {handleBox}/>
                <label for = 'Terms of Service'>Terms of Service</label>
            </div>   
            <div> 
                <button disabled = {disb} type = 'submit' >Submit</button>
            </div>
            <div>
                <div>
                    {contentError.name}
                    {contentError.email}
                    {contentError.password}
                    {contentError.terms}
                                        
                </div>
            </div>
        </form>
    )
}
export default Form