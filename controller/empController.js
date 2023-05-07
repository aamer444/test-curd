import userModel from "../model/userModel.js";


export const getAllUser = async (req, res) => {
    const allUsers = await userModel.find()
    if (!allUsers) {
        res.send('users not found')

    } else {
        res.send(allUsers)
    }

}

export const createUser = (req, res) => {
    const { name, age } = req.body
    if (!name || !age) {
        res.send('please provide required field')
    } else {
        const newUser = new userModel(req.body)
        newUser.save()
        res.send('create user')
    }
}

export const updateUser = (req, res) => {
    const id = req.params.id
    console.log(id);
    userModel.findByIdAndUpdate(id, req.body)
        .then((data) => {
            console.log(data);
            if (!data) {
                res.send('user not found')
            } else {
                res.send('update user')
            }
        }).catch((err) => {
            console.log(err.message);
            res.send(err.message)
        })
}


export const getSingleUser = async (req, res) => {
    const id = req.params.id
    const user = await userModel.findById(id)
    if (!user) {
        res.send('user not found')
    } else {
        res.send(user)
    }
}


export const deleteUser = async(req, res) => {
    const id = req.params.userid
    await userModel.findByIdAndDelete(id)
    res.send('successfully delete the user')
}