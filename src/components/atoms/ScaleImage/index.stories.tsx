import ScaleImage from './index';

export default {
    title:'Atoms/ScaleImage',
    component: ScaleImage,
    argTypes: {
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
            description: '이미지 가로폭',
            table: {
                type: {summary: 'number'}
            },
        },
        height: {
            control: {type: 'number'},
            defaultValue: 320,
            description: '이미지 세로폭',
            table: {
                type: {summary: 'number'}
            },
        },
        containerWidth: {
            control: {type: 'number'},
            defaultValue: 320,
            description: '가로폭',
            table: {
                type: {summary: 'number'}
            },
        },
        containerHeight: {
            control: {type: 'number'},
            defaultValue: 320,
            description: '세로폭',
            table: {
                type: {summary: 'number'}
            },
        },
    },
}

export const Normal = {
    args: {
        src: 'https://storybook.js.org/images/bubbles.jpg',
    }
}