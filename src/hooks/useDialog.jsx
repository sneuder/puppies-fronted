import { useState } from 'react';
import { useForm } from 'react-hook-form';

const useDialog = () => {
  const [attrName, setAttrName] = useState('');
  const [attrsState, setAttrsState] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleAttrsState = (attr) => {
    setAttrName(attr);
    setAttrsState(!attrsState);
  };

  return {
    register,
    handleSubmit,
    attrsState,
    attrName,
    handleAttrsState,
  };
};

export default useDialog;
