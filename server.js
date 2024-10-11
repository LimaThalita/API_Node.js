import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) =>{ /*na rota post vai SALVAR os usuários dentro dessa variável "const users = []"*/

    users.push(req.body)

      /*res.status(201).json(req.body)*/  /*criar e mostrar o que criou */

   /* console.log(req.body)*/

    res.send('ok deu certo')
})

app.get('/usuarios',(req, res) =>{ /*rota get vai LISTAR o usuário, respondendo o json*/

    /*res.send('ok, deu certo')*/
    
    /*res.json(users)*/
    res.status(200).json(users)
})

app.listen(3000)

console.log('Tudo certo')
/*
1)tipo de rota/método HTTP 
(get - listar, post-criar, put-editar vários, 
patch-editar um, delete-deletar)

2)endereço

Criar nossa API:

-criar um usuário
-listar todos os usuários
-editar um usuário
-deletar um usuário
 */