const graph = {
    A: { name: "A", successors: ["B", "C"], resource: "R1" },
    B: { name: "B", successors: ["D", "E"], resource: "R1" },
    C: { name: "C", successors: ["E", "F"], resource: "R2" },
    D: { name: "D", successors: ["G"], resource: "R1" },
    E: { name: "E", successors: ["G", "H"], resource: "R2" },
    F: { name: "F", successors: ["H"], resource: "R2" },
    G: { name: "G", successors: ["I"], resource: "R1" },
    H: { name: "H", successors: ["I"], resource: "R2" },
    I: { name: "I", successors: [], resource: "R1" },
};

console.log(graph.A.successors[1]);
const sourceGraph = {
    A: { resource: [1, 2, 4] },
    B: { resource: [2, 4] },
    C: { resource: [1, 2] }
}