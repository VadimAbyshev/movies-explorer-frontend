import { useCallback, useState } from "react"


export default function useFormValidation() {

    const [value, setValue] = useState({})
    const [errors, setErrors] = useState({})
    const [isValid, setIsValid] = useState(false)
    const [isInputValue, setInputValue] = useState({})

    function handleChange(evt) {

        const name = evt.target.name;
        const value = evt.target.value
        const validationMessage = evt.target.validationMessage
        const valid = evt.target.validity.valid
        const form = evt.target.form


        setValue((oldValues) => {
            return { ...oldValues, [name]: value }
        })

        setErrors((oldErrors) => {
            return { ...oldErrors, [name]: validationMessage }
        })


        setIsValid(form.checkValidity())

        setInputValue((oldIsInputValue) => {
            return { ...oldIsInputValue, [name]: valid }
        }
        )
    }
    function reset( data = {}){
        setValue(data)
        setErrors({})
        setInputValue({})
        setIsValid(false)
    }   

    const setValues = useCallback((name, value) => {
        setValue((oldValues) => {
            return { ...oldValues, [name]: value }
        }) 
    }, [])  

    return { value, errors, isValid, isInputValue, handleChange, reset, setValues }

}