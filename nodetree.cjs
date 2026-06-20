const fs = require('fs');
const buf = fs.readFileSync('decrypted_character.glb');
const jsonLength = buf.readUInt32LE(12);
const jsonString = buf.toString('utf8', 20, 20 + jsonLength);
const gltf = JSON.parse(jsonString);

function printNode(nodeIdx, depth) {
  const node = gltf.nodes[nodeIdx];
  const pad = '  '.repeat(depth);
  const meshName = node.mesh !== undefined ? ' (mesh:' + gltf.meshes[node.mesh].name + ')' : '';
  const matName = node.mesh !== undefined && gltf.meshes[node.mesh].primitives[0].material !== undefined 
    ? ' mat:' + gltf.materials[gltf.meshes[node.mesh].primitives[0].material].name 
    : '';
  console.log(pad + (node.name || 'unnamed') + meshName + matName);
  if (node.children) node.children.forEach(c => printNode(c, depth + 1));
}

if (gltf.scenes && gltf.scenes[0].nodes) {
  gltf.scenes[0].nodes.forEach(n => printNode(n, 0));
}
