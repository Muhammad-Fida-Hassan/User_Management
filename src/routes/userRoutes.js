const express=require('express');
const router=express.Router();
const {getAllUsers,getUserBYId,createUser, updateUser, deleteUser}=require('../Controllers/users.js')
const fs=require('fs');

router.use(express.urlencoded({ extended: false }));

router.get('/',getAllUsers)

router.get('/:id',getUserBYId)

router.post('/',createUser)

router.put('/:id',updateUser)

router.delete('/:id',deleteUser)

module.exports=router;