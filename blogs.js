const express = require('express');
const blogModel = require('../models/blog');
const router = express.Router();
router.post('/blogs', async (req, res) => {
  const { title, body, author } = req.body;

  if (!title || !body) {
    return res.status(400).json({ error: 'Title and body are required' });
  }

  try {
    const blogId = await blogModel.createBlog({ title, body, author });
    res.status(201).json({ message: 'Blog created', blogId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
});
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await blogModel.getAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});
router.get('/blogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await blogModel.getBlogById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

router.put('/blogs/:id', async (req, res) => {
  const { id } = req.params;
  const { title, body, author } = req.body;

  if (!title || !body) {
    return res.status(400).json({ error: 'Title and body are required' });
  }

  try {
    const updatedCount = await blogModel.updateBlog(id, { title, body, author });
    if (updatedCount === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
});
router.delete('/blogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCount = await blogModel.deleteBlog(id);
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

module.exports = router;
