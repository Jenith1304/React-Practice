
import React, { useState, type ChangeEvent } from 'react'
// const { value, isValid, error, onChange, onBlur, reset } = useFormField({
//   initialValue: "",
//   validate: (val) => (val.includes("@") ? null : "Invalid email"),
// });


type PropsType = {
    initialValue: string,
    validate: (val: string) => string | null
}


const useFormField = ({
    initialValue,
    validate,
}: PropsType) => {
    const [value, setValue] = useState(initialValue);
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isValid = error === null;

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;

        setValue(newValue);

        if (touched) {
            setError(validate(newValue));
        }
    }

    function onBlur(e: FocusEvent<HTMLInputElement>) {
        setTouched(true);
        setError(validate(e.target.value));
    }

    function reset() {
        setValue(initialValue);
        setTouched(false);
        setError(null);
    }

    return {
        value,
        error,
        isValid,
        onChange,
        onBlur,
        reset,
    };
};


const Practical34_FormFieldHook = () => {
    const { value, isValid, error, onChange, onBlur, reset } = useFormField({
        initialValue: "",
        validate: (val) => (val.includes("@") ? null : "Invalid email"),
    });
    console.log(error)
    return (
        <div>Practical34_FormFieldHook
            <input
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />

            {error && <p>{error}</p>}

            <button onClick={reset}>
                Reset
            </button>
        </div >
    )
}

export default Practical34_FormFieldHook