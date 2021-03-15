module.exports = function(RED) {
    function sampleFunc(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = "test";
            node.send(msg);
        });
        // console.log(object);
    }
    RED.nodes.registerType('Digital Output',sampleFunc);
}