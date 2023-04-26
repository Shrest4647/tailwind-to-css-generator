// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tailwind-to-css-generator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('tailwind-to-css-generator.helloVSCode', (a) => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		console.log(a);
		vscode.window.showInformationMessage('Hello World from tailwind-to-css-generator!');
	});
	let disposable2 = vscode.commands.registerCommand('tailwind-to-css-generator.convertTailwindToCSS', (a) => {
		console.log(a);
		vscode.window.showInformationMessage('Hello again from tailwind-to-css-generator!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
export function deactivate() {}
