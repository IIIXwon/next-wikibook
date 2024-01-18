import ProductForm from './index'
export default {
    title: 'Organisms/ProductForm',
    component: ProductForm,
    argTypes: {
        onProductSave: {
            description: '등록 버튼을 클릭했을 때의 이벤트 핸들러',
            table: {
                type: { summary: 'function' },
            },
        },
    },
}

export const Form = {

}