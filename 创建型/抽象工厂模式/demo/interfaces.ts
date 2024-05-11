export interface GUIFactory {
    createButton(): Button
    createCheckbox(): Checkbox
}

export interface Button {
    paint(): void
}

export interface Checkbox {
    paint(): void
}