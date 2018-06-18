'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { Commands } from './schematics/commands';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext): Promise<void> {

    vscode.commands.executeCommand('setContext', 'inAngularProject', true);

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    const generateComponentCommand = vscode.commands.registerCommand('ngschematics.generateComponent', async (context) => {

        await Commands.generateSimple('component', context);

    });

    const generateServiceCommand = vscode.commands.registerCommand('ngschematics.generateService', async (context) => {

        await Commands.generateSimple('service', context);

    });

    const generateCommand = vscode.commands.registerCommand('ngschematics.generate', async (context) => {

        await Commands.generate(context);

    });

    context.subscriptions.push(generateComponentCommand, generateServiceCommand, generateCommand);

}

// this method is called when your extension is deactivated
export function deactivate() {}
