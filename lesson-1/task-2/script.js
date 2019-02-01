const fs = require('fs');

const clearFile = (fileName = 'file.txt') => {

    fs.readFile(fileName, 'utf8', (error, data) => {
        if (error) {
            throw error;
        } else {
            console.time('time');
            data = data.replace(/\x20+/gm, ' ');
            fs.writeFile(`converted_${fileName}`, data, () => {
                console.log('complete');
                console.timeEnd('time');
            });
            
        }
    });

};

clearFile(process.argv[2]);