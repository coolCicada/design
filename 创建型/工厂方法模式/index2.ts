abstract class Dialog {
    abstract createButton(): Button;
    render() {
        const button = this.createButton();
        button.onClick();
        button.render();
    }
}

class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }
}

class WindowsButton implements Button {
    render(): void {
        console.log('Render WindowsButton');
    }
    onClick(): void {
        console.log('Click WindowsButton');
    }
}

class WebDialog extends Dialog {
    createButton(): Button {
        return new HTMLButton();
    }
}

class HTMLButton implements Button {
    render(): void {
        console.log('Render HTMLButton');
    }
    onClick(): void {
        console.log('Click HTMLButton');
    }
}

interface Button {
    render(): void;
    onClick(): void;
}

class Application {
    dialog!: Dialog;
    initialize() {
        let type = 'Web';
        if (type === 'Windows') {
            this.dialog = new WindowsDialog();
        } else if (type === 'Web') {
            this.dialog = new WebDialog();
        }
        return this;
    }
}

function main() {
    new Application().initialize().dialog.render();
}

main();