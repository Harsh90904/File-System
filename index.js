const fs = require('fs');
const prompt = require('prompt-sync')();

console.log("Options: create, read, rename, delete, append");

let option = prompt("Enter operation: ");

switch (option) {
    case 'create':
        let createFile = prompt("Enter file name to create: ");
        fs.writeFileSync(createFile, '');
        console.log(`File '${createFile}' created.`);
        break;
        
    case 'read':
        let readFile = prompt("Enter file name to read: ");
        let data = fs.readFileSync(readFile, 'utf8');
        console.log(`Content of '${readFile}':\n${data}`);
        break;

    case 'rename':
        let oldName = prompt("Enter current file name: ");
        let newName = prompt("Enter new file name: ");
        fs.renameSync(oldName, newName);
        console.log(`File renamed from '${oldName}' to '${newName}'.`);
        break;

    case 'delete':
        let deleteFile = prompt("Enter file name to delete: ");
        fs.unlinkSync(deleteFile);
        console.log(`File '${deleteFile}' deleted.`);
        break;

    case 'append':
        let appendFile = prompt("Enter file name to append: ");
        let appendData = prompt("Enter data to append: ");
        fs.appendFileSync(appendFile, appendData);
        console.log(`Data appended to '${appendFile}'.`);
        break;

    default:
        console.log("Invalid operation.");
        break;
}
