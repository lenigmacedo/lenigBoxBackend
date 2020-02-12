const Box = require("../models/Box");

class BoxController {
  async store(req, response) {
    const title = req.body.title;

    const box = await Box.create({ title: title });

    return response.json(box);
  }

  async show(req, response) {
    const box = await await Box.findById(req.params.id).populate({
      path: "files",
      options: {
        sort: {
          createdAt: -1
        }
      }
    });

    return response.json(box);
  }
}

module.exports = new BoxController();
