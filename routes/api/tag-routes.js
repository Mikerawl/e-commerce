const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  try {
    const tag = await Tag.findAll({include: [ {
      model: Product,
      through: ProductTag,
    },
  ]
})
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
  });  

router.get('/:id', async(req, res) => {
  try {
    const tag = await Tag.findOne(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ]
    });
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async(req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', (req, res) => {
  try {
    const tag = Tag.update(req.body, {
      id: req.params.id,
    });
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const tag = Tag.destroy(req.params.id);
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
