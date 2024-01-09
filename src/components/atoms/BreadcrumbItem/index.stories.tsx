import BreadcrumbItem from './index'

export default {
    title: 'Atoms/BreadcrumbItem',
    component:BreadcrumbItem,
}

export const Standard = () => (
    <div>
        <BreadcrumbItem>Item 1</BreadcrumbItem>
        <BreadcrumbItem>Item 2</BreadcrumbItem>
        <BreadcrumbItem>Item 3</BreadcrumbItem>
    </div>
)