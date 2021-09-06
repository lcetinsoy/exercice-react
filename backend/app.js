

const path = require('path')
const express = require('express')


const app = express()

app.use(express.json());
const port = 3030

var tasks = [

  {
    'name': 'waking up',
    'description': 'il faut se lever pour pouvoir coder'
  },
  {
    'name': 'Affichage des taches',
    'description': "Faire un composant Frontend d'affichage des tâches"
  },
  
]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

//quand moi serveur web je reçoit une requête de type "GET" d'un client 
//sur l'url /hello, alors je renvoie "hello world"
app.get('/', function(request, response) {
  
  const filePath = path.join(__dirname, "index.html")
  response.sendFile(filePath)
})


app.post('/new-tast', function(request, response){
  const task = request.body

  tasks.push(task)

})


app.get("/tasks", function(request, response){



    response.json(tasks)
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

