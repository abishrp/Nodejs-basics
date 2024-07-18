const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'files','read.txt'),'utf-8',(err,data)=>
{
    if(err) throw err;
    console.log(data);
});
fs.writeFile(path.join(__dirname,'files','write.txt'),'Hello from write11111',(err)=>
    {
        if(err) throw err;
        console.log("write completed");
        fs.appendFile(path.join(__dirname,'files','write.txt'),'Hello from write',(err)=>
            {
                if(err) throw err;
                console.log("Append completed");
                // fs.rename(path.join(__dirname,'files','write.txt'),path.join(__dirname,'files','rename.txt'),(err)=>
                //     {
                //         if(err) throw err;
                //         console.log("Rename completed");
                //     });
            });
    });


//     const fs = require('fs').promises;

// async function performFileOperations() {
//     try {
//         const filePath = path.join(__dirname, 'files', 'write.txt');
//         const newFilePath = path.join(__dirname, 'files', 'rename.txt');

//         await fs.writeFile(filePath, 'Hello from write');
//         console.log("Write completed");

//         await fs.appendFile(filePath, 'Hello from write');
//         console.log("Append completed");

//         await fs.rename(filePath, newFilePath);
//         console.log("Rename completed");
//     } catch (err) {
//         console.error(err);
//     }
// }

// performFileOperations();


    

process.on('unCaughtException', err=>
{
    console.error(`There is an error:${err}`)
    process.exit(1);
}
)