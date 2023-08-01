const format = prompt('Enter a file extension');

switch (format) {
    case 'json': {
        console.log(`handle as ${format}`);
        break;
    }
    case 'csv': {
        console.log(`handle as ${format}`);
        break;
    }
    case 'xml': {
        console.log(`handle as ${format}`);
        break;
    }
    default: {
        console.log('handle as txt');
    }
}
