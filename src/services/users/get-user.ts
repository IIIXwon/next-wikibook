import {ApiContext, User} from 'types'
import {fetcher} from 'utils'

export type GetUserParams = {
    id: number
}

const getUser = async (
    context: ApiContext,
    {id} : GetUserParams
): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
        {
            method: `GET`,
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            }
        }
    )
}

export default getUser