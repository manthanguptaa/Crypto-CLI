const program = require('commander')

program
    .command('set')
    .description('Set API Key --Get at https://nomics.com')
    .action(()=>console.log('Hello From Set command'))

program
    .command('show')
    .description('Show API Key')
    .action(()=>console.log('Hello From show'))

program
    .command('remove')
    .description('Remove API Key')
    .action(()=>console.log('Hello From remove command'))

program.parse(process.argv)