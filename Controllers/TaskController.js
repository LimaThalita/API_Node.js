import database from '../Database/connection'

class TaskController{
    novaTarefa(req,res){

        const{nome, idade, email} = request.body

        console.log(nome, idade, email)

        database.insert({nome, idade, email}).table("tasks").then(data=>{
            console.log(data)
            response.json({message:"Tarefa criada com sucesso!"}) })
            .catch(error=>{
                console.log(error)
            })

    }
}
module.exports = new TaskController()