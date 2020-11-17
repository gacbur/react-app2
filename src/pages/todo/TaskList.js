import Task from './Task'

const TaskList = ({ tasks, remove }) => {

    const list = tasks.map(item => (
        <Task remove={remove} tasks={tasks} id={item.id} key={item.id} text={item.text} />
    ))

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default TaskList;