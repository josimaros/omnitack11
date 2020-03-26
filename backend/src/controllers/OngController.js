const connections = require('../database/conections');
const crypto = require('crypto');

module.exports = {
  async create(req,res){
    const {name, email, whatsapp, city, uf} = req.body;
    console.log(req.body)
    const id = crypto.randomBytes(4).toString('HEX');

    await connections('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })


    return res.json({"id": id, "status":true});
  },

  async index(req,res) {
    const ongs = await connections('ongs').select('*');
  
    return res.json(ongs);
  }
}