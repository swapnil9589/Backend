
const handleGetuser = (req, res) => {
    res.send("home route")
}
const handlepostuser = (req, res) => {

    const username = req.body;
    res.status(201)
    res.json(username)
}

const handlepatchuser = (req, res) => {
    const {id}=req.params;
    res.status(200).json("true req URL from")
        
}

export { handleGetuser, handlepatchuser, handlepostuser }