let tasks = [
    { id: 1, title: "Learn API Routes" },
    { id: 2, title: "Build CRUD App" },
  ];
  
  export default function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        
        res.status(200).json(tasks);
        break;
  
      case 'POST':
        const { title } = req.body;
        if (!title) return res.status(400).json({ message: 'Title is required' });
  
        const newTask = {
          id: Date.now(),
          title,
        };
  
        tasks.push(newTask);
        res.status(201).json(newTask);
        break;
  
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  