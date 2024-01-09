import {SearchIcon, CloudUploadIcon, PersonOutlineIcon} from './index'
export default {
    title: 'Atoms/IconButton',
    component: SearchIcon,
    argTypes: {
        color: {
            control: {type: 'string'},
            description: '아이콘 색상',
            table: {
                type: {summary: 'ThemeColor'},
            },
        },
        backgroundColor: {
            control: {type: 'string'},
            description: '배경 색상',
            table: {
                type: {summary: 'string'},
            },
        },
        size: {
            control: {type: 'number'},
            defaultValue: 24,
            description: '아이콘 크기',
            table: {
                type: {summary: 'number'},
            },
        },
        onClick: {
            description: 'onClick 이벤트 핸들러',
            table: {
                type: {summary: 'function'},
            },
        },
    },
}

export const Normal = (args) => (
    <>
        <SearchIcon {...args} />
        <CloudUploadIcon {...args} />
        <PersonOutlineIcon {...args} />
    </>
)