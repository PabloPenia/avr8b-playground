// import './CodeEditor.styles.scss'
import Editor from 'react-ace'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'

// type CodeEditorProps = {}

const CodeEditor = (/*: CodeEditorProps */) => (
	<Editor
		mode='c_cpp'
		theme='github'
		name='code-editor'
		editorProps={{ $blockScrolling: true }}
		setOptions={{
			enableBasicAutocompletion: true,
			enableLiveAutocompletion: true,
			enableSnippets: true,
		}}
	/>
)

export default CodeEditor
