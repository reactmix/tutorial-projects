const sampleDirectory = [
  { name: 'public', children: [
    { name: 'index.html', content: 'content for index.html' },
  ]},
  { name: 'src', children: [
    { name: 'components', children: [
      { name: 'CodeView.js', content: 'content for CodeView.js' },
      { name: 'FileTabs.js', content: 'content for FileTabs.js' },
      { name: 'MainFrame.js', content: 'content for MainFrame.js' },
      { name: 'SideBar.js', content: 'content for SideBar.js' },
    ]},
    { name: 'App.js', content: 'content for App.js' },
    { name: 'globals.css', content: 'content for globals.css' },
    { name: 'index.js', content: 'content for index.js' },
  ]},
  { name: 'package.json', content: 'content for package.json' },
  { name: 'foo', children: [] },
]

export const traverse = function(list, cb, pathStack){
  for(let i=0; i<list.length; i++){
    const node = list[i]
    pathStack.push(node.name)
    if(node.children !== undefined){
      cb(node, pathStack)
      traverse(node.children, cb, pathStack)
    }
    else{
      cb(node, pathStack)
    }
    pathStack.pop()
  }
}

export const projIndex = {};
export const showFirst = { node: null };

const eachNode = function(node, pathStack){
  node.id = pathStack.join('/')
  projIndex[node.id] = node
  if(node.id === '/src/App.js'){
    showFirst.node = node
  }
}

traverse(sampleDirectory, eachNode, [''])

export default sampleDirectory