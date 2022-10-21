import './code-editor.styles.scss'
import Editor, { IAceEditorProps } from 'react-ace'
import { BLINK_CODE } from '~/data/example'
import './themes'
import 'ace-builds/src-noconflict/mode-c_cpp'

import 'ace-builds/src-noconflict/ext-language_tools'
import { useState } from 'react'
import Selector from '../shared/selector/selector.component'

// type CodeEditorProps = {}

const CodeEditor = (/*: CodeEditorProps */) => {
	const themes = [
		'monokai',
		'github',
		'tomorrow',
		'kuroir',
		'twilight',
		'xcode',
		'textmate',
		'solarized_dark',
		'solarized_light',
		'terminal',
	]
	const defaultSettings: IAceEditorProps = {
		name: 'code-editor',
		width: '100%',
		height: '100%',
		editorProps: { $blockScrolling: true },
		setOptions: {
			enableBasicAutocompletion: true,
			enableLiveAutocompletion: true,
			enableSnippets: true,
		},
		mode: 'c_cpp',
		theme: 'monokai',
		value: BLINK_CODE,
		placeholder: 'Start typing your code...',
	}
	const [editorSettings, setEditorSettings] =
		useState<IAceEditorProps>(defaultSettings)
	const handleChangeSettings = (key: string, val: string) => {
		setEditorSettings((prev) => {
			return { ...prev, [key]: val }
		})
	}
	return (
		<div className='editor'>
			<header>
				<Selector
					label='theme' // used for both label and object key
					options={themes}
					handler={handleChangeSettings}
				/>
			</header>
			<Editor onChange={handleChangeSettings} {...editorSettings} />
		</div>
	)
}

export default CodeEditor
