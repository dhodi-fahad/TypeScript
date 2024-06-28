//  MAIL DELIVERY ROBOT
//  This is a program that performs a task in a virtual world. Our automaton is a mail-delivery robot
//  picking up and dropping off parcels



type Routes = Array<Array<string>>;
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

type Graph = {
    [key: string]: string []
}

export function addEdge(to: string, from: string, graph: Graph):void {
    if(graph[from] == null){
        graph[from] = [to];
    } else {
        graph[from].push(to);
    }
}

export function buildGraph(edges: string[]):object {
    let graph = Object.create(null);

    for (let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to, graph);
        addEdge(to, from, graph);
    }
    return graph;
}

console.log(buildGraph(roads))