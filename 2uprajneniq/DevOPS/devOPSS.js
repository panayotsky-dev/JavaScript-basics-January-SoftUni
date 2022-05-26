c:/devtest/
    const fs = require('fs');
    
        
        let path = require('path');
        
function readWriteFileNames(){ 
    const folderPath = `/devTest/`;
        let name = "";
        let ext = "";
        let creationDate = "";
        let day = "";
        let month = "";
        let year = "";
        let newName = "";
        let diffFormat = ""; 
        
        
        let filesArr = fs.readdirSync(folderPath);
        console.log(`Readed files : ${ filesArr }`)
            for (let i = 0; i < filesArr.length;i++){
                name = filesArr[i];                                   
                    ext = name.slice(-4)
                        if (ext === `.txt`){
                                creationDate = fs.statSync(folderPath + name).birthtime.toDateString(creationDate);
                                day = creationDate.slice(8,-5);
                                month = creationDate.slice(4,-8);
                                year = creationDate.slice(-4)
                                newName = `${day}-${month}-${year}${ext}`;
                                
                                fs.chmod(folderPath, 0o777,() => {
                                    if (err){
                                        console.log(err)
                                    }
                                });
                                fs.renameSync(`c:${folderPath}`+ `${name}` ,newName, (err) => {
                                                                  

                                    console.log(err)
                                });
                                
                                    console.log(``)
                                    console.log(name)
                                    console.log(newName)
                                    console.log(creationDate)
                            
                                } else {
                                    diffFormat += (`${name} `);
                                        }
                            
                             }
                             console.log(`Files with different format than .txt : ${diffFormat}`)
                    console.log(`Renamed files :`)     
                }           
           
        
readWriteFileNames();
