const users=require('../../MOCK_DATA.json')

const getAllUsers=(req,res)=>{
    res.json(users)
}

const getUserBYId=(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id==id)
    return res.json(user)
}

const createUser=(req,res)=>{
    const body = req.body;
    const email=users.find(user=>user.email==body.email)
    if(email){
        return res.status(400).json({ error: 'Email already exists' });
    }else{
    users.push({...body,id:users.length+1});
    fs.writeFile('../../MOCK_DATA.json',JSON.stringify(users),(err)=>{
        console.log(err)
    })
}
    return res.json(users)
}

const updateUser=(req,res)=>{
    const id=Number(req.params.id);
    console.log(id)
    const body=req.body
    console.log(body)
    const user=users.find(user=>user.id==id)
    for(const key in user){
        if(user[key]!==body[key]){
            user[key]=body[key]
        }
    }
    return res.json(user)
}

const deleteUser=(req,res)=>{
    const id=(req.params.id);
    const user=users.findBYId(user=>user.id==id)
    users.splice(user,1)
    return res.json(users)
}

module.exports={
    getAllUsers,
    getUserBYId,
    createUser,
    updateUser,
    deleteUser
}