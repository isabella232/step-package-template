import main from "../executor";
import { OctopusContext } from "@octopusdeploy/step-api";

class TestOctopusContextImpl implements OctopusContext {
    messages: string[];

    constructor() {
        this.messages = [];
    }

    createArtifact(): Promise<void> {
        return Promise.resolve(undefined);
    }

    failStep(): void {
        return;
    }

    getOctopusVariable(): string | undefined {
        return undefined;
    }

    print(message: string): void {
        this.messages.push(message);
    }

    printHighlight(): void {
        return;
    }

    printVerbose(): void {
        return;
    }

    printWait(): void {
        return;
    }

    printWarning(): void {
        return;
    }

    setOctopusVariable(): void {
        return;
    }

    updateProgress(): void {
        return;
    }
}

describe("say hello", () => {
    test("to Octopus deploy", async () => {
        const context = new TestOctopusContextImpl();
        await executeMain(context);
        expect(context.messages.length).toEqual(1);
        expect(context.messages[0]).toEqual("Hi there Octopus Deploy");
    }, 1000);

    function executeMain(context: OctopusContext) {
        return main({
            inputs: {
                name: "Octopus Deploy",
            },
            target: {
                greetingPrefix: "Hi there",
            },
            context,
        });
    }
});
