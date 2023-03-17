class Task {
    constructor(name, duration, predecessors, successors, priority, resource, start_time,
        end_time) {
        this.name = name;
        this.duration = duration;
        this.predecessors = predecessors;
        this.successors = successors;
        this.priority = priority;
        this.resource = resource;
        this.start_time = start_time;
        this.end_time = end_time
    }
}

function compute_schedule (tasks) {
    // 初始化入度和资源可用时间
    let indegrees = {};
    let resource_available_time = {};
    for (let task_id in tasks) {
        let task = tasks[task_id];
        indegrees[task_id] = task.predecessors.length;
        resource_available_time[task.resource] = 0;
    }

    // 拓扑排序
    let queue = [];
    for (let task_id in tasks) {
        let task = tasks[task_id];
        if (indegrees[task_id] === 0) {
            queue.push(task);
        }
    }
    queue.sort((a, b) => a.priority - b.priority);

    while (queue.length > 0) {
        let task = queue.shift();
        let start_time;
        if (task.predecessors.length === 0)
            start_time = 0;
        else
            start_time = Math.max(...task.predecessors.map((predecessor_id) => tasks[predecessor_id].end_time));
        start_time = Math.max(start_time, resource_available_time[task.resource]);
        task.start_time = start_time;
        task.end_time = start_time + task.duration;

        // 更新资源可用时间和入度
        resource_available_time[task.resource] = task.end_time;
        for (let successor_id of task.successors) {
            indegrees[successor_id] -= 1;
            if (indegrees[successor_id] === 0) {
                queue.push(tasks[successor_id]);
            }
        }
        queue.sort((a, b) => a.priority - b.priority);
    }

    return tasks;
}

// 示例任务数据
let tasks = {
    "task1": {
        "duration": 5,
        "predecessors": [],
        "successors": ["task2", "task3"],
        "priority": 1,
        "resource": "A",
        "start_time": 0,
        "end_time": 0
    },
    "task2": {
        "duration": 3,
        "predecessors": ["task1"],
        "successors": ["task4", "task5"],
        "priority": 2,
        "resource": "A",
        "start_time": 0,
        "end_time": 0
    },
    "task3": {
        "duration": 2,
        "predecessors": ["task1"],
        "successors": ["task6"],
        "priority": 3,
        "resource": "A",
        "start_time": 0,
        "end_time": 0
    },
    "task4": {
        "duration": 4,
        "predecessors": ["task2"],
        "successors": ["task7"],
        "priority": 4,
        "resource": "B",
        "start_time": 0,
        "end_time": 0
    },
    "task5": {
        "duration": 2,
        "predecessors": ["task2"],
        "successors": ["task7"],
        "priority": 5,
        "resource": "A",
        "start_time": 0,
        "end_time": 0
    },
    "task6": {
        "duration": 2,
        "predecessors": ["task3"],
        "successors": ["task7"],
        "priority": 5,
        "resource": "B",
        "start_time": 0,
        "end_time": 0
    },
    "task7": {
        "duration": 2,
        "predecessors": ["task4", "task5", "task6"],
        "successors": [],
        "priority": 5,
        "resource": "C",
        "start_time": 0,
        "end_time": 0
    }
};

tasks = compute_schedule(tasks);

// 输出每个任务的开始时间和结束时间
for (let task_id in tasks) {
    let task = tasks[task_id];
    console.log(`${task_id}: start_time=${task.start_time}, end_time=${task.end_time}`);
}

// const task6 = new Task("task6", 3, ["task1"], ["task4"], 2, "C");
// tasks["task6"] = task6;