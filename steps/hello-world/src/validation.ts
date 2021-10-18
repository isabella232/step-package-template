import { ValidateInputs } from "@octopusdeploy/step-api";
import HelloWorldStepInputs from "./inputs";

const validateInputs: ValidateInputs<HelloWorldStepInputs> = (inputs, validate) => {
    return [
        validate(inputs.name, (name) => {
            if (name === "") return "Name can not be empty";
        }),
    ];
};
export default validateInputs;
