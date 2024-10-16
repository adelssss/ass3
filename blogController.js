import Blog from "../model/blogModel.js"; 

export const create = async (req, res) => {
    try {
        const { title, author } = req.body;

       
        const blogExist = await Blog.findOne({ title, author });  
        if (blogExist) {
            return res.status(400).json({ message: "Already exists" });
        }

        
        const blogData = new Blog(req.body);  
        const savedBlog = await blogData.save();  
        res.status(200).json(savedBlog);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const fetch = async (req, res) => {
    try {
        const blogs = await Blog.find();
        if(blogs.length ===0) {
            return res.status(404).json({ message: "Blog not found"});
        }  
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getBlogById = async (req , res)=>{
    try {
        const id=req.params.id;
        const blog= await Blog.findById({_id:id});
        if (!blog) {
            return res.status(404).json({ error: "Blog not found"})
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json ({error: "Internal server error"});  
    }
};

export const update = async (req , res)=>{
    try {
        const id=req.params.id;
        const blogExist= await Blog.findById({_id:id});
        if (!blogExist) {
            return res.status(404).json({ error: "Blog not found"})
        }
        const updateBlog= await Blog.findByIdAndUpdate(id, req.body, {
            new: true,

        });
        res.status(201).json(updateBlog);
    } catch (error) {
        res.status(500).json ({error: "Internal server error"});  
    }
};

export const deleteBlog= async (req , res)=>{
    try {
        const id=req.params.id;
        const blogExist= await Blog.findById({_id:id});
        if (!blogExist) {
            return res.status(404).json({ error: "Blog not found"})
        }
        await Blog.findByIdAndDelete(id);
        res.status(201).json({message: "Blog deleted successfully "});
    } catch (error) {
        res.status(500).json ({error: "Internal server error"});  
    }
};
