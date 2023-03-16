function calculateSchedule (tasks) {
    // 创建任务图
    const graph = createTaskGraph(tasks);

    // 创建已完成任务的集合
    const completed = new Set();

    // 创建执行中任务的集合
    const executing = new Set();

    // 创建任务队列并添加没有前置任务的任务
    const queue = Array.from(graph.tasks.values()).filter(task => task.dependencies.length === 0);

    // 计算每个任务的开始时间
    while (queue.length > 0) {
        const task = selectNextTask(queue, executing);

        // 设置任务的开始时间
        task.start = Math.max(...task.dependencies.map(id => graph.tasks.get(id).end));

        // 添加任务到已完成集合和执行中集合
        completed.add(task);
        executing.add(task);

        // 从队列中移除任务
        queue.splice(queue.indexOf(task), 1);

        // 添加所有依赖于该任务的后继任务到队列中
        for (const id of graph.edges.get(task.id)) {
            const next = graph.tasks.get(id);

            // 如果所有依赖的前置任务都已完成，则将其添加到队列中
            if (next.dependencies.every(id => completed.has(graph.tasks.get(id)))) {
                queue.push(next);
            }
        }
    }

    // 计算每个任务的结束时间
    for (const task of graph.tasks.values()) {
        task.end = task.start + task.time;
    }

    // 返回每个任务的开始和结束时间
    return Array.from(graph.tasks.values()).map(task => ({ id: task.id, start: task.start, end: task.end }));
}

// 从队列中选择下一个任务，按优先级和需要的资源排序
function selectNextTask (queue, executing) {
    // 按优先级排序
    queue.sort((a, b) => b.priority - a.priority);

    // 按需要的资源排序
    queue.sort((a, b) => a.resource.localeCompare(b.resource));

    // 选择第一个不在执行集合中的任务
    for (const task of queue) {
        if (!executing.has(task)) {
            return task;
        }
    }

    // 如果队列中没有可执行任务，则返回 null
    return null;
}

// 创建任务图
function createTaskGraph (tasks) {
    const graph = {
        tasks: new Map(),
        edges: new Map(),
    };

    // 将任务添加到图中
    for (const task of tasks) {
        graph.tasks.set(task.id, task);
        graph.edges.set(task.id, []);
    }

    // 添加依赖关系到图中
    for (const task of tasks) {
        for (const dependencyId of task.dependencies) {
            graph.edges.get(dependencyId).push(task.id);
        }
    }

    return graph;
}
