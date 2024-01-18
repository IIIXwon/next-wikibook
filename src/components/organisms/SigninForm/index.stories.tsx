import SigninForm from './index'

export default {
    title: 'Organisms/SigninForm',
    component: SigninForm,
    argTypes: {
        onSignin: {
            description: '로그인 버튼을 클릭했을 때의 이벤트 핸들러',
            table: {
                type: {summary: 'function'},
            },
        },
    },
}

export const Form ={

}