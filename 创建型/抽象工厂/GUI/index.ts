import { GUIFactory, Button, Checkbox } from "./interfaces";
import { MacButton, MacCheckbox, WinButton, WinCheckbox } from "./instances";

class WinFactory implements GUIFactory {
    public createButton(): Button {
        return new WinButton();
    }
    public createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}

class MacFactory implements GUIFactory {
    public createButton(): Button {
        return new MacButton();
    }
    public createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

class App {
    private factory!: GUIFactory;
    private button!: Button;
    constructor(factory: GUIFactory) {
        this.factory = factory;
    }
    createUI(): void {
        this.button = this.factory.createButton();
    }
    paint(): void {
        this.button.paint();
    }
}

function main() {
    let OS = 'Mac';
    let factory = null;
    if (OS === 'Windows') {
        factory = new WinFactory();
    } else if (OS === 'Mac') {
        factory = new MacFactory();
    } else {
        throw new Error('Unsupported OS');
    }
    const app = new App(factory);
    app.createUI();
    app.paint();
}

main();