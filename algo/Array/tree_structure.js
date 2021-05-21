const data = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 }
];

let map = {};
data.forEach(item => {
    map[item.id] = item;
});
let tree = {};

data.forEach(elt => {
    const parentId = elt.parentId;
    if (!parentId) {
        tree = elt;
    } else {
        const parent = map[parentId];
        parent.children = [...(parent.children || []), elt];
    }
});

console.log(tree);
