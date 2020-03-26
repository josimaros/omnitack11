const connections = require('../database/conections');

module.exports = {
  async create(req,res){
    const {id} = req.body;
    
    console.log(id)
    const ong = await connections('ongs')
      .where('id',id)
      .select('*')
      .first()

    if(!ong){
      return res.status(400).json({error: 'Nenhuma ONG encontrada com essa ID'});
    }

    return res.json(ong);
  }
}