//import { query } from "express";
//import users from "../data/users";
import iUser from "./interfaces/iUser";
import connection from "../services/database.service";
import { iUserLogin } from "./interfaces/iUserLogin";
import iUserPut from "./interfaces/iUserPut";
import { iUserRole } from "./interfaces/iUserRole";


class User {
    async saveUser(user:iUser){
        const queryStr = "INSERT INTO users (email, password, name, last_name, role) VALUES ($1,$2,$3,$4,$5) RETURNING *"
        const client:any= await connection(queryStr,[user.email, user.password, user.name, user.last_name, user.role] as string[]);
        //const result = await client.query(queryStr, values);
        console.log(user.email);
        return client.rows[0];
    }

    async getUsers(){
   
        const queryStr = 'SELECT * FROM users'
        const query = await connection(queryStr,[])
        // console.log(query)
        return query.rows;

    }

    async getUser(user:iUserLogin){
        const queryStr = 'SELECT * FROM "users" WHERE email = $1'
        const client = await connection(queryStr,[user.email]);
        return client.rows[0];

    }

    async getRole(user:iUserRole){
        const queryStr = 'SELECT role FROM "users" WHERE email = $1'
        const client = await connection(queryStr,[user.email]);
        return client.rows[0];

    }

    async updateUser(us:iUserPut, id){
   
        const queryStr = 'UPDATE users SET email =$1, password=$2, name=$3, last_name=$4 where user_id=$5 returning *'
       
        const client:any= await connection(queryStr,[us.email,us.password,us.name,us.last_name,id] as string[]);
        //const result = await client.query(queryStr, values);
        return client.rows;

    }
}

export default new User();