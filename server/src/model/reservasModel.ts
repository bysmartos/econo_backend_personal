
import connection from "../services/database.service";
import iReserva from "./interfaces/iReserva";

class Reserva {
    async getReservas(){
   
        const queryStr = 'select us.name, us.last_name, exp.titulo from reservas res inner join users us on res.user_id = us.user_id inner join experiencias exp on res.experiencia_id = exp.experiencia_id'
        const query = await connection(queryStr,[])
        // console.log(query)
        return query.rows;

    }
    async getReservasByUser(userid){
        const queryStr = 'select us.name, us.last_name, exp.titulo from reservas res inner join users us on res.user_id = us.user_id inner join experiencias exp on res.experiencia_id = exp.experiencia_id where res.user_id=$1'
    
        const query = await connection(queryStr,[userid]);
       
        return query.rows;
    }
    
    async postReserva( res:iReserva, userid){
   
        const queryStr = "INSERT INTO reservas (user_id, experiencia_id) VALUES ($2,$1) RETURNING *"
        const client:any= await connection(queryStr,[res.experienciaId,userid] as string[]);
        //const result = await client.query(queryStr, values);
        return client.rows[0];

    }
    
}

export default new Reserva();