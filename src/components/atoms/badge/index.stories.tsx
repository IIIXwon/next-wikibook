import Badge from './index'

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: {
        content: {
            control: {type: 'text'},
            description: '배지 텍스트',
            table: {
                type: {summary: 'string'},
            },
        },
        backgroundColor: {
            control: {type: 'color'},
            description: '배지 색상',
            table: {
                type: {summary: 'string'},
            },
        },
    },
}

export const Orange = {
    args: {
        content: '1',
        backgroundColor: 'orange',
    }
}

export const Green = {
    args: {
        content: '2',
        backgroundColor: 'green',
    }
}

export const Red = {
    args: {
        content: '3',
        backgroundColor: 'red',
    }
}
