import { useFormContext } from 'react-hook-form';
import { TextInput } from '../formInputs/formInputs';

function AddWithdrawalMethod() {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      <TextInput
        name="bankName"
        errors={errors}
        register={register}
        label="Enter your Bank name"
        placeholder="Enter your bank’s name e.g First Bank"
      />
      <TextInput
        name="accountNumber"
        errors={errors}
        register={register}
        label="Enter Account Number (NGN)*"
        placeholder="Enter your bank’s account number"
      />
      <TextInput
        name="accountName"
        errors={errors}
        register={register}
        label="Account name"
        placeholder="Enter your bank’s account name"
      />
    </>
  );
}

export default AddWithdrawalMethod;
