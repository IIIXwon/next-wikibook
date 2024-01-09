import Input from './index'

export default {
    title: 'Atoms/Input',
    component: Input,
    argTypes: {
        placeholder: {
            control: {type: 'text'},
            description: 'placeholder',
            table: {
                type: {summary: 'string'},
            },
        },
        hasBorder: {
            control: {type: 'boolean'},
            description: 'border 플래그',
            defaultValue: true,
            table: {
                type: {summary: 'boolean'},
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
    },
}

export const Normal = {}
export const Error = {
    args: {
        hasError: true,
    }
}