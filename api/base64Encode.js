const base64Encode = async (req, res) => {
    const { input } = req.body;
    if (!input) {
        return res.status(400).send({ error: 'Input is required' });
    }
    const output = Buffer.from(input).toString('base64');
    res.send({ output });
};

export default base64Encode;