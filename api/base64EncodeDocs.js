const base64EncodeDocs = (req, res) => {
    res.send({
        name: 'base64Encode',
        description: 'Encode anything to base64',
        input: {
            type: 'string',
            description: "Input the data you'd like to encode to base64",
            example: 'Hello, world',
        },
        output: {
            type: 'string',
            description: 'Base64 encoded string',
            example: 'SGVsbG8sIHdvcmxk',
        }
    });
};

export default base64EncodeDocs;