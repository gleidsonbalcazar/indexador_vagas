export default (req,res) => {
    return res.render('users/login',{
     title: 'Indexador de Vagas' ,
     layout: 'login_register'
    })
  }