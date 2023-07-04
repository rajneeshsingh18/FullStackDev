import { useState } from "react"

const Display = ({ value }) => <div>{value}</div>


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)



const App9 = () => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        console.log('Value now ', newValue);
        setValue(newValue)
    }

    // Do not define components inside another component

    // const Display = ({value}) => <div>{value}</div>


    return (
        <>
            <hr />
            <Display value={value} />
            <Button handleClick={() => setToValue(1000)} text="Thousand" />
            <Button handleClick={() => setToValue(0)} text="reset" />
            <Button handleClick={() => setToValue(value + 1)} text="increment" />
        </>
    )
}

export default App9;
export { Button }
export { Display }