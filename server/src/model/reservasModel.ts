
import connection from "../services/database.service";

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
    
}

export default new Reserva();