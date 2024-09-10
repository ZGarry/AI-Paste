import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('copyToFile.createFile', async () => {
        const editor = vscode.window.activeTextEditor;

        if (editor || true) {
            const clipboardContent = await vscode.env.clipboard.readText();

            // 匹配 // src/1.js 这类字符串
            const match = clipboardContent.match(/^\/\/\s*([^\/]+\/.*)$/m);

            if (match && match[1]) {
                const filePath = match[1].trim();
                const workspaceFolders = vscode.workspace.workspaceFolders;
                
                if (workspaceFolders && workspaceFolders.length > 0) {
                    const workspaceRoot = workspaceFolders[0].uri.fsPath;
                    const fullPath = path.join(workspaceRoot, filePath);
                    const fileDir = path.dirname(fullPath);

                    // 确保目录存在
                    fs.mkdirSync(fileDir, { recursive: true });

                    // 写入文件内容
                    const content = clipboardContent.split('\n').slice(1).join('\n');
                    fs.writeFileSync(fullPath, content, 'utf8');

                    // 打开新创建的文件
                    const document = await vscode.workspace.openTextDocument(fullPath);
                    await vscode.window.showTextDocument(document);
                }
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}