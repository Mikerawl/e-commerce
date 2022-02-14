const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
 try {
  const category = await Category.findAll({include: [Product]})
  res.status(200).json(category);
} catch (err) {
  res.status(400).json(err);
}
});  


router.get('/:id', async(req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

  router.post('/', async (req, res) => {
    try {
      const category = await Category.create(req.body);
      res.status(200).json(category);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

  router.put('/:id', (req, res) => {
    try {
      const category = Category.update(req.body, {
        id: req.params.id,
      });
      res.status(200).json(category);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', (req, res) => {
    try {
      const category = Category.destroy(req.params.id);
      res.status(200).json(category);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
