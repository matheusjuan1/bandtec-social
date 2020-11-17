import React from 'react';

const types = {
    
}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [erro, setError] = React.useState(null);

    function validate(value) {
        if(value.length === 0) {
            setError("Preencha um valor");
            return false;
        } else if (.test(value)) {
            setError("Preencha um cep válido");
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    return 
}

export default useForm
