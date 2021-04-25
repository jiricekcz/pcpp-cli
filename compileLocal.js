const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');



async function main() {

    try {
        childProcess.execSync("cd ./workspace/ && py ./setup.py build")
    } catch (e) {

    }

    const bf = fs.readdirSync("./workspace/build/");
    const fbf = path.join("./workspace/build/", bf.find(v => v.startsWith("lib")));
    const filePath = path.join(fbf, fs.readdirSync(fbf).find(v => v.endsWith(".pyd")));
    
    fs.copyFileSync(filePath, "./workspace/lib.dll");
}
main();