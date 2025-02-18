const mysql = require('../config/mysqlconnection.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

function signup(req,res){
    try {
        const{name,email,password}=req.body
        if (!name ||!email || !password) {
            return res.status(400).json({msg:"All feilds are required"})
        }
        const checkUser=`select * from users where email='${email}'`;
        mysql.query(checkUser,(err,data,feilds)=>{
            if (err) {
                console.log(err);
                return res.status(400).json({msg:" Error in database"})
            }
            if (data.length>0) {
                return res.status(200).json({msg:"User already Exists"})
            }
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            console.log(hash)
            const insertUser=`insert into users(user_name,email,password) values('${name}','${email}','${hash}')`;
            mysql.query(insertUser,(err,data,feilds)=>{
                if (err) {
                    return res.status(400).json({msg:" Error in database"})
                }
                else{
                    console.log(req.body)
                    return res.status(200).json({msg:"User created successfully"})

                }
            })


        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal server Error",
        })
    }
}

function login(req,res){
    try {
        const {email,password}=req.body;
        if (!email || !password) {
            return res.status(400).json({msg:"All feilds are required"})
        }
        const loginUser=`select * from users where email='${email}'`;
        mysql.query(loginUser,(err,data,feilds)=>{
            if (err) {
                return res.status(500).json({msg:"Internal Server Error"})
            }
            if (data.length>0) {
                const passs=bcrypt.compareSync(password,data[0].password); 
                console.log(passs,"======")
                if (passs) {
                    var token = jwt.sign({ user_id:data[0].id  }, 'secret',{ expiresIn: '1h' });
                    var tokenData = { token: token };
                    data[0].token = tokenData.token; 
                    delete data[0].password;
                    // data[0].password= undefined;
                    console.log(req.body)
                    return res.status(200).json({msg:"Login Succesfull",data:data})
                }
                return res.status(200).json({msg:"Invalid Password",data:[]})

            }
            else{
                return res.status(200).json({msg:"Data not found",data:[]})
            }
        })
        
    } catch (error) {
        return res.status(500).json({msg:"Internal Server Error"})
    }
}

function getallUsers(req,res) {
    try {
        const viewuser = "SELECT * FROM users";
        mysql.query(viewuser, (err, data, feilds) => {
            if (err) {
                return res.status(500).json({ msg: "Internal Server Error" })
            }
            if(data){
                const totalUser=data.length
            return res.status(200).json({ msg: "Data of all users", data: data,total:totalUser })
            }
        })
    } catch (error) {
         return res.status(500).json({msg:"Internal Server Error"})
    }
    
}


function deleteUserById(req, res) {
    console.log(req.params.id);

    try {
        const id = req.params.id;

        // Check if the user exists
        const checkUser = `SELECT * FROM users WHERE id='${id}'`;
        mysql.query(checkUser, (err, data, fields) => {
            if (err) {
                return res.status(500).json({ msg: "Internal Server Error" });
            }

            // If user exists, proceed to delete
            if (data.length > 0) {
                const deleteUser = `DELETE FROM users WHERE id=?`;
                
                mysql.query(deleteUser, [id], (err, data, fields) => {
                    if (err) {
                        return res.status(500).json({ msg: "Internal Server Error" });
                    }
                     return res.status(200).json({ msg: "User deleted successfully" });
                });
            } else {
                return res.status(404).json({ msg: "User not found", data: [] });
            }
        });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error" });
    }
}


module.exports={
    signup, login, getallUsers, deleteUserById
}