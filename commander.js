const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const baseDir = path.join(__dirname, './');
console.log(baseDir);
const program = new Command();

program
    .version('1.0.0')
    .description('User to input their todo tasks. The append command, will append multiple todo tasks arguments to the filename')
    .command('append <filename> <args...>')
    .action((filename, args) => {
        appendargs(filename, args)
    });

function appendargs(filename, args) {
    const filepath = path.join(baseDir, `${filename}.json`);
    const taskList = [];

    for (i = 0; i < args.length; i++) {
        const actionkey = `action${i + 1}`;
        const result = {[actionkey]: args[i]};
        taskList.push(result);
    }
    const dataList = JSON.stringify(taskList, null, 2);
    // eventList.push(result);
    fs.writeFile(filepath, dataList, function(err) {
        if (err) {
            throw err;
        }
        else {
            console.log("File created successfully");
        }
    });
    fs.readFile(filepath, 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        else {
            console.log(JSON.parse(data));
        }
    });
}

program.parse(process.argv);

