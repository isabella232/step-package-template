import { StepUI, text } from "@octopusdeploy/step-api";
import HelloWorldStepInputs from "./inputs";

export const HelloWorldStepUI: StepUI<HelloWorldStepInputs> = {
    createInitialInputs: () => {
        return {
            name: "",
        };
    },
    editInputsForm: (inputs) => {
        return [
            text({
                input: inputs.name,
                label: "Greeting Name",
                helpText: `The name of the person to greet.`,
            }),
        ];
    },
};

export default HelloWorldStepUI;
