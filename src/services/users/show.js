import User from './../../models/users'

export default (req,res)=> {
  User.findById(req.params.id)
      .then((user)=> {
        if (!user){
          return res.status(404).send('Not Found')
        }
        return res.render('users/show', {
          title: 'Indexador de vafas - Perfil',
          user,
          layout: 'app'
        })
      })
      .catch(error => res.status(500).send(error))
}