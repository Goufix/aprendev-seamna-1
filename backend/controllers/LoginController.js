const axios = require("axios");

module.exports = {
  async index(req, res) {
    const { usuario, senha } = req.body; // { usuario: '', senha: '' }
    const { data: usuarios } = await axios.get("https://api.myjson.com/bins/kj4aq");

    let isValidUser = false;

    usuarios.map(dadosUsuario => {
      const { user, password } = dadosUsuario;
      if (user === usuario && password === senha) {
        isValidUser = true;
      }
    });

    if (isValidUser) {
      return res.json({ success: "Usuário logado com sucesso!" });
    } else {
      return res.json({ error: "Usuário ou senha incorretos." });
    }
  }
};
