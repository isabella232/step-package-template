import { HealthCheckExecutor } from "@octopusdeploy/step-api";
import HelloWorldTargetInputs from "./inputs";

const HelloWorldDeploymentTargetHealthCheckExecutor: HealthCheckExecutor<HelloWorldTargetInputs> = async ({ context }) => {
    context.print("Hello world target is healthy");
};

export default HelloWorldDeploymentTargetHealthCheckExecutor;
