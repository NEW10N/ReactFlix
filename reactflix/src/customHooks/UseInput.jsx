import {useState} from 'react'

const UseInput = (name, type = "text", value = "") => {
    // const [input, setinput] = useState(second)
    const [input, setInput] = useState(
        {[name]:value}
    )

    const onInput = (e) =>{
        let name = e.target.name
        let value = e.target.value
        setInput({[name]:value})
    }

  return (
    {
        input,
        type:type,
        name:name,
        value:input[name],
        onInput
    }
  )
}

export default UseInput