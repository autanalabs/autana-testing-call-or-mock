const fs = require("fs");
const path = require("path");

module.exports = function(RED) {
    console.log("***** CALL-OR-MOCK: installing ... *****");
    const subflowFile = path.join(__dirname, "subflow.json");
    console.log("      subflowFile: " + subflowFile);
    const subflowContents = fs.readFileSync(subflowFile);
    const subflowJSON = JSON.parse(subflowContents);
    RED.nodes.registerSubflow(subflowJSON);
    console.log("***** CALL-OR-MOCK: DONE! *****");
}