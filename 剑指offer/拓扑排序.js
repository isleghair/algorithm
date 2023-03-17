// 定义有向图数据结构
class Graph {
    constructor() {
        this.vertices = [];
        this.edges = {};
    }

    addVertex (v) {
        this.vertices.push(v);
        this.edges[v] = [];
    }

    addEdge (v, w) {
        this.edges[v].push(w);
    }
}

// 定义节点数据结构
class Node {
    constructor(name, time, priority, resource) {
        this.name = name; // 节点名称
        this.time = time; // 完成任务所需时间
        this.priority = priority; // 优先级
        this.resource = resource; // 资源
        this.start = 0; // 开始时间
        this.end = 0; // 结束时间
        this.inDegree = 0; // 入度
    }
}

// 计算所有任务的开始结束时间
function calcStartTimeAndEndTime (graph) {
    const queue = []; // 存储入度为 0 的节点
    const nodes = {}; // 存储每个节点的属性信息

    // 初始化节点信息，统计每个节点的入度
    for (let v of graph.vertices) {
        nodes[v] = new Node(v, v.time, v.priority, v.resource);
        for (let w of graph.edges[v]) {
            nodes[w].inDegree++;
        }
    }

    // 将入度为 0 的节点加入队列
    for (let v of graph.vertices) {
        if (nodes[v].inDegree === 0) {
            queue.push(v);
        }
    }

    while (queue.length > 0) {
        const v = queue.shift();

        // 计算该节点的开始时间
        let maxStartTime = 0;
        for (let w of graph.edges[v]) {
            if (nodes[w].end > maxStartTime) {
                maxStartTime = nodes[w].end;
            }
        }
        const idleTime = getIdleTime(maxStartTime, nodes[v].resource);
        nodes[v].start = Math.max(maxStartTime, idleTime);

        // 计算该节点的结束时间
        nodes[v].end = nodes[v].start + nodes[v].time;

        // 更新与该节点相邻的节点的入度
        for (let w of graph.edges[v]) {
            nodes[w].inDegree--;
            if (nodes[w].inDegree === 0) {
                queue.push(w);
            }
        }
    }

    return nodes;
}

// 获取资源的最快空闲时间
function getIdleTime (maxStartTime, resource) {
    // 假设资源的最快空闲时间为 maxStartTime + 1
    let idleTime = maxStartTime + 1;
    return idleTime;
}

// 测试
const g = new Graph();
g.addVertex({ name: 'a', time: 3, priority: 3, resource: 1 });
g.addVertex({ name: 'b', time: 2, priority: 2, resource: 2 });
g.addVertex({ name: 'c', time: 1, priority: 2, resource: 1 });
g.addVertex({ name: 'd', time: 4, priority: 1, resource: 3 });

g.addEdge('a', 'b');
g.addEdge('a', 'c');
g.addEdge('b', 'd');
g.addEdge('c', 'd');

const nodes = calcStartTimeAndEndTime(g);

for (let v of g.vertices) {
    console.log(`${v}: start=${nodes[v].start}, end=${nodes[v].end}`);
}
