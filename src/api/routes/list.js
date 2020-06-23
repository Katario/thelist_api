import { Router } from 'express';
import List from '../../models/list';
const router = Router();

export default (routesApp) => {
  routesApp.use('/list', router)
  // get all
  router.get('/', async (req, res) => {
    let lists = await List.find({}, (err, result) => {
      if (err) {
        console.log(err);
      };
    })
    .sort({ updated: 'desc' });

    return res.json({ lists }).status(200);
  });

  // get one
  router.get('/:id', async (req, res) => {
    const list = await List.findOne({ _id: req.params.id});

    return res.json({ list }).status(200);
  });
  
  // post one
  router.post('/', async (req, res) => {
    let list = new List({
      title: req.body.title,
      author: req.body.author,
      type: req.body.type,
      // list.template
      created: Date.now(),
      updated: Date.now(),
    });

    await list.save();

    return res.json({ list }).status(200);
  });

  // update one
  router.patch('/:id', async (req, res) => {
    try {
      const list = await List.findOne({ _id: req.params.id });
      if (req.body.title) list.title = req.body.title;
      if (req.body.author) list.author = req.body.author;
      if (req.body.type) list.type = req.body.type;
      list.updated = Date.now();
      await list.save();

      return res.json({ list }).status(200);
    } catch {
      return res.json({ error: 'List doesn\' exist!' }).status(404);
    }
  });
  
  // delete one
  router.delete('/:id', async (req, res) => {
    try {
      await List.deleteOne({ _id: req.params.id });

      return res.json({ message : 'Deleted successfully!'}).status(204);
    } catch {
      return res.json({ error: 'List doesn\' exist!' }).status(404);
    }
  });
};
