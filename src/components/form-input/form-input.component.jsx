import { GroupContainer, Input, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, inputOptions }) => {
  return (
    <GroupContainer>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel $shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
