import Todo from "../Models/todomodels.js";



// Get all todos
const getTodos = async (req, res) => {

    let todo = await Todo.find()

    res.send(todo)
};


// Create a new todo
const createTodos = async (req, res) => {
    const { title, discription } = req.body;
    const todo = await Todo.create({
        title,
        discription
    });
    res.send(todo);
};


// Delete a todo

const deleteTodo = async (req, res) => {
    const deleted = await Todo.findByIdAndDelete(req.params.id);

    if (!deleted) {
        return res.status(404).send({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully" });
}



// gettodo by id

const getTodoById = async (req, res) => {
    const { id } = req.query;

    const todo = await Todo.findById(id)

    if (!todo) {
        return res.status(404).json({ message: 'todo not found' })

    }
    res.json(todo)

}

// update todo

const updateTodo = async (req, res) => {
    let { title, discription, iscompleted, id } = req.body

    let update = await Todo.findByIdAndUpdate(id, { title, discription, iscompleted })

    res.json({ message: "todo updated", update })
}



// Export the controller functions
export { getTodos, createTodos, deleteTodo, getTodoById, updateTodo }