import { UnControlled as CodeMirror } from 'react-codemirror2'
import styled from 'styled-components'
import '../globals.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import '../codemirror/theme/dracula.css'
import SideBar from './SideBar'

const Topmost = styled.div`
  padding-left:234px;
  background-color: #282a36;
  position: relative;
`

const options = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'dracula',
  readOnly: true,
};

function CodeView({ proj, curr, shouldShowFile }) {
  return (
    <Topmost>
      <SideBar proj={proj} shouldShowFile={shouldShowFile} curr={curr} />
      <CodeMirror 
        options={options} 
        value={curr.content}
      />
    </Topmost>
  );
}

export default CodeView;
