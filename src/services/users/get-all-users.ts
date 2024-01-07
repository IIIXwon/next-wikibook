import {ApiContext, User} from 'types'
import {fetcher} from '@/utils'

const getAllUsers = async (
    context: ApiContext,
): Promise<User[]> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/users`,
        {
            method: `GET`,
            headers: {
                Origin: '*',
                Accept: 'application/json',
                'Content-type': 'application/json',
            }
        }
    )
}

export default getAllUsers