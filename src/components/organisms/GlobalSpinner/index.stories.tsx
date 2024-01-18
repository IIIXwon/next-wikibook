import GlobalSpinner from './index'
import Button from 'components/atoms/Button'
import GlobalSpinnerContextProvider, {
    useGlobalSpinnerActionsContext,
} from 'contexts/GlobalSpinnerContext'

export default {
    title: 'organisms/GlobalSpinner',
    component: GlobalSpinner,
}

export const WithContextProvider = () => {
    const ChildComponent = () => {
        const setGlobalSpinner = useGlobalSpinnerActionsContext()
        const handleClick = () => {
            setGlobalSpinner(true)
            setTimeout(() => {
                setGlobalSpinner(false)
            }, 5000)
        }

        return (
            <>
                <GlobalSpinner />
                <Button onClick={handleClick}>스피너 표시</Button>
            </>
        )
    }

    return (
        <GlobalSpinnerContextProvider>
            <ChildComponent />
        </GlobalSpinnerContextProvider>
    )
}