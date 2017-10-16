import User from './../../models/users'

export default (req,res) => {
 let {username, password} = req.body;
  User.authenticate()(username, password, (error, user, opt)=>{
    if (error || user === false){
      return res.status(500).send(error)
    }

    return req.login(user, (error) => {
      if(error){
        return res.status(500).send(error)
      }

      return res.redirect('/')
    })
  })
}