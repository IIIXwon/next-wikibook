import Dropdown from './index'

export default {
    title: 'Molecules/Dropdown',
    component: Dropdown,
    argTypes: {
        options: {
            control: {type: 'array'},
            description: '드롭다운 선택지',
            table: {
                type: {summary: 'array'},
            },
        },
        hasError: {
            control: {type: 'boolean'},
            description: '변형 에러 플래그',
            table: {
                type: {summary: 'boolean'},
            },
        },
        placeholder: {
            control: {type: 'text'},
            description: 'placeholder',
            table: {
                type: {summary: 'string'},
            },
        },
        value: {
            control: {type: 'text'},
            description: '드롭다운 값',
            table: {
                type: {summary: 'string'},
            },
        },
        onChange: {
            description: '값이 변화했을 떄의 이벤트 핸들러',
            table: {
                type: {summary: 'function'},
            },
        },
    },
}

export const Normal = {
    args: {
        options: [
            {value: 'one', label: 'One'},
            {value: 'two', label: 'Two'},
            {value: 'three', label: 'Three'},
        ],
        placeholder: 'Please select items from the list',
    }
}

export const InitialValue = {
    args: {
        options: [
            {value: 'one', label: 'One'},
            {value: 'two', label: 'Two'},
            {value: 'three', label: 'Three'},
        ],
        placeholder: 'Please select items from the list',
        value: 'one',
    }
}

export const Many = {
    args: {
        options: Array.from(Array(20), (_v, k) => {
            return { value: k.toString(), label: k.toString()}
        }),
        placeholder: 'Please select items from the list',
    }
}

export const Error = {
    args: {
        options: Array.from(Array(20), (_v, k) => {
            return { value: k.toString(), label: k.toString()}
        }),
        placeholder: 'Please select items from the list',
        hasError: true,
    }
}