const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
  const { limit, page, name = 'Sin nombre' }= req.query;

  res.json({
    msg: 'get API - controlador',
    limit,
    page,
    name
  });
}

const usuariosPut = (req, res) => {
  const { id } = req.params;

  res.json({
    msg: 'put API - controlador',
    id
  });
}

const usuariosPost = (req, res) => {

  const body = req.body;

  res.json({
    msg: 'post API - controlador',
    body
  });
}

const usuariosDelete = (req, res) => {
  res.json({
    msg: 'delete API - controlador'
  });
}

const usuariosPatch = (req, res) => {
  res.json({
    msg: 'patch API'
  });
}

module.exports = {
  usuariosGet,
  usuariosDelete,
  usuariosPatch,
  usuariosPost,
  usuariosPut
}