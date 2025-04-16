let tasks = [];

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));

  switch (method) {
    case 'GET':
      const task = tasks.find(t => t.id === parseInt(id));
      if (!task) return res.status(404).json({ message: 'Not found' });
      res.status(200).json(task);
      break;

    case 'PUT':
      const { title } = req.body;
      if (taskIndex === -1) return res.status(404).json({ message: 'Not found' });

      tasks[taskIndex].title = title;
      res.status(200).json(tasks[taskIndex]);
      break;

    case 'DELETE':
      if (taskIndex === -1) return res.status(404).json({ message: 'Not found' });

      const deleted = tasks.splice(taskIndex, 1);
      res.status(200).json({ message: 'Deleted', task: deleted });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
