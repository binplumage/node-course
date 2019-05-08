const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function() {
        console.log('Removing the note');
    }
})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function() {
        console.log('List all notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'read the note',
    handler: function() {
        console.log('Read the node');
    }
})

yargs.parse();
