import CheckBox from './index'

export default {
    title:'Molecules/CheckBox',
    component: CheckBox,
    argTypes: {
        label: {
            control: { type: 'text'},
            description: '표시 라벨',
            table: { summary: 'string'},
        },
        checked: {
            control: {type: 'boolean'},
            description: '체크',
            table: {
                summary: {type: 'number'},
            },
        },
        onChange: {
            description: '값이 변화했을 떄의 이벤트 핸들러',
            table: { summary: 'function'},
        },
    },
}

export const WhiteLabel = {
    args: {
        label: 'label',
    }
}