const axios = require('axios').default;
const fs = require('fs');
const rimraf = require('rimraf');



const ip = "https://fuckpython.quvia.online/api";

async function main() {
    try {
        const filename = fs.readdirSync("./workspace").find(v => v.endsWith("_module.cpp"));
        const projectName = filename.replace("_module.cpp", "");
        const f = axios.post(ip + "/compiled.so", {
            python: fs.readFileSync("./workspace/setup.py").toString(),
            cpp: fs.readFileSync("./workspace/" + filename).toString(),
            filename
        });
        if (fs.existsSync("./build/")) await rm("./build/");

        fs.mkdirSync("./build/");

        fs.copyFileSync("./workspace/" + projectName + "/__init__.py", "./build/" + projectName + ".py");
        fs.writeFileSync("./build/" + projectName + ".py", fs.readFileSync("./build/" + projectName + ".py").toString().replace(".dll", ".py"));


        fs.copyFileSync("./workspace/main.py", "./build/main.py");
        /**
         * @type {Buffer}
         */
        const data = Buffer.from((await f).data, "hex");
        fs.writeFileSync("./build/lib.py", data);


    } catch (e) {
        console.log(e);
    }
}
function rm(pth) {
    return new Promise((resolve, reject) => {
        rimraf(pth, () => {
            resolve();
        });
    });
}
main();
