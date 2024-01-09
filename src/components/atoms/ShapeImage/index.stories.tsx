import ShapeImage from './index'

export default {
    title: 'Atoms/ShapeImage',
    component: ShapeImage,
    argTypes: {
        shape: {
            options: ['circle', 'square'],
            control: {type: 'radio'},
            defaultValue: '이미지 형태',
            table: {
                type: {summary: 'circle | square'},
                defaultValue: {summary: 'square'},
            },
        },
        src: {
            control: {type: 'text'},
            description: '이미지 URL',
            table: {
                type: {summary: 'string'},
            },
        },
        width: {
            control: {type: 'number'},
            defaultValue: 320,
            description: '너비',
            table: {
                type: {summary: 'number'},
            },
        },
        height: {
            control: {type: 'number'},
            defaultValue: 320,
            description: '높이',
            table: {
                type: {summary: 'number'},
            },
        },
    },
}

export const Circle = {
    args: {
        src: 'https://storybook.js.org/images/bubbles.jpg',
        shape: 'circle',
        width: 320,
        height: 320,
    }
}

export const Square = {
    args: {
        src: 'https://storybook.js.org/images/bubbles.jpg',
        shape: 'square',
        width: 320,
        height: 320,
    }
}