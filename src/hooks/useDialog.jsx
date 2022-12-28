import { useState } from 'react';
import { useForm } from 'react-hook-form';

const useDialog = () => {
  const [attrName, setAttrName] = useState('');
  const [dialogState, setDialogState] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleDialogState = (attr) => {
    setAttrName(attr);
    setDialogState(!dialogState);
  };

  return {
    register,
    handleSubmit,
    dialogState,
    attrName,
    handleDialogState,
  };
};

export default useDialog;
