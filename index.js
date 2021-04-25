const readline = require('readline');
const fs = require('fs');
const childProcess = require('child_process');
const rimraf = require('rimraf');






const reader = readline.createInterface(process.stdin, process.stdout);
function q(text) {
    return new Promise((resolve) => {
        reader.question(text, s => {
            resolve(s);
        })
    });
}

async function main() {
    const moduleName = await q("Module name: ");
    console.log("Setting up your workspace...");

    if (fs.existsSync("./workspace/")) rimraf.sync("./workspace/");
    if (!fs.existsSync("./workspace/")) fs.mkdirSync("./workspace/");

    const modulePath = "./workspace/" + moduleName + "_module.cpp";
    fs.copyFileSync("./resources/setup.py", "./workspace/setup.py");
    fs.copyFileSync("./resources/lib.cpp", modulePath);
    fs.copyFileSync("./resources/main.py", "./workspace/main.py");

    fs.writeFileSync(modulePath, fs.readFileSync(modulePath).toString().replace("${moduleName}", moduleName).replace("${moduleName}", moduleName));
    fs.writeFileSync("./workspace/setup.py", fs.readFileSync("./workspace/setup.py").toString().replace("${moduleName}", moduleName).replace("${moduleName}", moduleName).replace("${moduleName}", moduleName).replace("${moduleName}", moduleName).replace("${moduleName}", moduleName).replace("${moduleName}", moduleName));
    fs.writeFileSync("./workspace/main.py", fs.readFileSync("./workspace/main.py").toString().replace("${moduleName}", moduleName).replace("${moduleName}", moduleName))


    fs.mkdirSync("./workspace/" + moduleName);
    fs.copyFileSync("./resources/module.py", "./workspace/" + moduleName + "/__init__.py");

    // fs.writeFileSync("./workspace/" + moduleName + "/__init__.py", "def f(): \n    pass");
    childProcess.execSync("start workspace");

    reader.close();
}
main();