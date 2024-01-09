import RectLoader from './index'

export default {
    title: 'Atoms/RectLoader',
    component: RectLoader,
    argTypes: {
        width: {
            control: {type: 'number'},
            defaultValue: 320,
            description: '가로폭',
            table: {
                type: {summary: 'number'},
            },
        },
        height: {
            control: {type: 'number'},
            description: '세로폭',
            defaultValue: 320,
            table: {
                type: {summary: 'number'},
            },
        },
    },
}

export const Normal = {
    args: {
        width: 320,
        height: 320
    }
}