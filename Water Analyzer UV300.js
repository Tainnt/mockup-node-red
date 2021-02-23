module.exports = function(RED) {
    function sampleFunc(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = "test";
            node.send(msg);
        });
    }
    RED.nodes.registerType('Water Analyzer UV300',sampleFunc);
}