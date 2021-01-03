import CodeView from './CodeView'
import FileTabs from './FileTabs'
import styled from 'styled-components'
import { useState } from 'react'
import data, { showFirst } from '../data/sample-directory'

const Topmost = styled.div`
  background-color: #21222D;
`

const nodeNotAlreadyOpenned = (node, opens) => opens.indexOf(node) === -1

function MainFrame() {

  const [ proj ] = useState(data)
  const [ curr, setCurr ] = useState(showFirst.node)
  const [ opens, setOpens ] = useState([ showFirst.node ])

  function shouldShowFile(node){
    setCurr(node)
    if(nodeNotAlreadyOpenned(node, opens)){
      setOpens(opens.concat([ node ]))
    }
  }

  return (
    <Topmost>
      <FileTabs opens={opens} curr={curr} shouldShowFile={shouldShowFile} />
      <CodeView proj={proj} curr={curr} shouldShowFile={shouldShowFile} />
    </Topmost>
  );
}

export default MainFrame;
