class Node {
    constructor(id, resource, priority) {
        this.id = id; // 节点ID
        this.resource = resource; // 节点所需的资源
        this.priority = priority; // 节点的优先级
        this.nextNodes = []; // 后继节点
        this.inDegree = 0; // 入度
    }
}

class Graph {
    constructor() {
        this.nodes = new Map(); // 存储所有节点
    }

    addNode (id, resource, priority) {
        if (!this.nodes.has(id)) {
            this.nodes.set(id, new Node(id, resource, priority)); // 添加节点
        }
    }

    addEdge (fromId, toId) {
        const fromNode = this.nodes.get(fromId);
        const toNode = this.nodes.get(toId);

        if (fromNode && toNode) {
            fromNode.nextNodes.push(toNode); // 添加有向边
            toNode.inDegree++; // 更新入度
        }
    }

    topologicalSort () {
        const queue = [];

        for (const node of this.nodes.values()) {
            if (node.inDegree === 0) {
                queue.push(node); // 将所有入度为0的节点加入队列
            }
        }

        while (queue.length > 0) {
            const node = queue.shift();

            // 检查是否与已有任务产生冲突，如果有冲突则比较优先级
            let conflict = false;
            for (const nextNode of node.nextNodes) {
                if (nextNode.resource === node.resource && nextNode.priority > node.priority) {
                    conflict = true;
                    break;
                }
            }

            if (!conflict) {
                // 执行任务
                console.log(`执行任务 ${node.id}`);

                // 更新后继节点的入度
                for (const nextNode of node.nextNodes) {
                    nextNode.inDegree--;
                    if (nextNode.inDegree === 0) {
                        queue.push(nextNode); // 如果入度为0，则加入队列
                    }
                }

                // 从图中删除该节点
                this.nodes.delete(node.id);
            } else {
                // 将节点重新加入队列
                queue.push(node);
            }
        }

        // 检查是否存在环路
        if (this.nodes.size > 0) {
            console.log('该图存在环路');
        }
    }
}

// 使用示例
const graph = new Graph();

graph.addNode(1, 'resource1', 1);
graph.addNode(2, 'resource2', 2);
graph.addNode(3, 'resource3', 3);
graph.addNode(4, 'resource2', 4);
graph.addNode(5, 'resource1', 5);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

graph.topologicalSort();
