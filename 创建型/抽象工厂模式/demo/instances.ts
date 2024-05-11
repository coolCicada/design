import { Checkbox, Button } from "./interfaces";

export class WinCheckbox implements Checkbox {
    paint(): void {
        console.log('paint win checkbox');
    }
}

export class MacCheckbox implements Checkbox {
    paint(): void {
        console.log('paint mac checkbox');
    }
}

export class WinButton implements Button {
    paint(): void {
        console.log('paint win button');
    }
}

export class MacButton implements Button {
    paint(): void {
        console.log('paint mac button');
    }
}