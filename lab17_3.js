// const fs = require('fs');

// fs.readFile('myFile.txt', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     } else {
//         console.log('File content:', data);
//     }
// });

const fs = require('fs');

fs.writeFile('output.txt', "darshan uni", (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully.');
    }
});

