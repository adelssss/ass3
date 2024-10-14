const { ObjectId } = require('mongodb');
let db;
function initializeDatabase(database) {
  db = database;
}
async function createBlog({ title, body, author }) {
  const result = await db.collection('blogs').insertOne({ title, body, author, createdAt: new Date() });
  return result.insertedId;
}
async function getAllBlogs() {
  const blogs = await db.collection('blogs').find().toArray();
  return blogs;
}
async function getBlogById(id) {
  const blog = await db.collection('blogs').findOne({ _id: ObjectId(id) });
  return blog;
}

async function updateBlog(id, { title, body, author }) {
  const result = await db.collection('blogs').updateOne(
    { _id: ObjectId(id) },
    { $set: { title, body, author, updatedAt: new Date() } }
  );
  return result.matchedCount;
}
async function deleteBlog(id) {
  const result = await db.collection('blogs').deleteOne({ _id: ObjectId(id) });
  return result.deletedCount;
}

module.exports = {
  initializeDatabase,
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
