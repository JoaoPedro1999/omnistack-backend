const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
  async create (Request, Response) {
    const { id } = Request.body;

    const ong =await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return Response.status(400).json({ error: "No ONG found with this ID"})
    }
  
    return Response.json(ong)
  },
}