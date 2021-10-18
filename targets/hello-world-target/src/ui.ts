import { DeploymentTargetUI, section, text } from "@octopusdeploy/step-api";
import HelloWorldTargetInputs from "./inputs";

export const HelloWorldTargetUI: DeploymentTargetUI<HelloWorldTargetInputs> = {
    createInitialInputs: () => {
        return {
            greetingPrefix: "Hello",
        };
    },
    editInputsForm: (inputs) => [
        section({
            title: "Greeting",
            content: [
                text({
                    input: inputs.greetingPrefix,
                    label: "Greeting Prefix",
                    helpText: "The beginning of the greeting",
                }),
            ],
        }),
    ],
};

export default HelloWorldTargetUI;
