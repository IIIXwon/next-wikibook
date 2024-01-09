import Separator from './index'

export default {
    title: 'Atoms/Separator',
    component: Separator,
}

export const Standard = () => (
    <>
        <Separator>or</Separator>
        <Separator>and</Separator>
        <Separator/>
    </>
)