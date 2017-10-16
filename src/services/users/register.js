export default (req,res) => {
    return res.render('users/register',{
     title: 'Indexador de Vagas' ,
     layout: 'login_register'
    })
  }