import { useState, useEffect } from 'react';

const useForm = (callback, defaultValues={}) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(values);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  useEffect( () => {
    setValues( defaultValues );
  }, defaultValues);
  
  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
