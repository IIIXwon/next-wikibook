import TextArea from './index'

export default {
    title: 'Atoms/TextArea',
    component: TextArea,
    argTypes: {
        placeholder: {
            control: {type: 'text'},
            description: 'placeholder',
            table: {
                type: {summary: 'string'},
            },
        },
        rows: {
            control: {type:'number'},
            defaultValue: 5,
            description: '행 수',
            table: {
                type: {summary: 'number'}
            },
        },
        minRows: {
            control: {type:'number'},
            defaultValue: 5,
            description: '최소 행수',
            table: {
                type: {summary: 'number'}
            },
        },
        maxRows: {
            control: {type:'number'},
            defaultValue: 10,
            description: '최대 행수',
            table: {
                type: {summary: 'number'}
            },
        },
        hasError: {
            control: {type: 'boolean'},
            description: 'error 플래그',
            defaultValue: false,
            table: {
                type: {summary: 'boolean'},
            },
        },
        onChange: {
            description: 'onChange 이벤트 핸들러',
            table: {
                type: {summary: 'function'},
            },
        },
    }
}

export const Normal = {
}

export const Error = {
    args: {
        hasError: true
    }
}