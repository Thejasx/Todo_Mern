import mongoose from "mongoose";


// database schema creation

const todoSchema =  mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    discription: {
        type : String,
        required : true
    },
    iscompleted : {
        type : Boolean,
        default : false
    }
})



// model creation for scehma

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
