import { useState } from 'react';
import { z, ZodError } from 'zod';
import { usernameSchema, passwordSchema, numberSchema } from '../Schemas/Schema';


interface Schemas {
    [key: string]: z.ZodSchema<string | number | boolean>; 
  }


interface UseFormReturn {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error: string | null;
  validate: () => boolean;
}


const schemas: Schemas = {
  email: usernameSchema,
  password: passwordSchema,
  number: numberSchema,
};

const useForm = (type: string = ''): UseFormReturn => {
  const [value, setValue] = useState<string>(''); 
  const [error, setError] = useState<string | null>(null); 

  function validate(value: string): boolean {
    if (type && schemas[type]) {
      try {
        schemas[type].parse(value); 
        setError(null); 
        return true;
      } catch (err: ZodError ) { 
        setError(err.errors[0].message); 
        return false;
      }
    } else if (!value) {
      setError('Este campo é obrigatório');
      return false;
    } else {
      setError(null);
      return true;
    }
  }


  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function onBlur() {
    validate(value); 
  }

  return {
    value,
    setValue,
    onChange,
    onBlur,
    error,
    validate: () => validate(value),
  };
};

export default useForm;
