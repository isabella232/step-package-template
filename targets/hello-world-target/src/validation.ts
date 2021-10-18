import { ValidateInputs } from "@octopusdeploy/step-api";
import HelloWorldTargetInputs from "./inputs";

const validateInputs: ValidateInputs<HelloWorldTargetInputs> = (inputs, validate) => {
    return [
        validate(inputs.greetingPrefix, (greeting) => {
            if (greeting === "") return "Greeting can not be empty";
        }),
    ];
};
export default validateInputs;
