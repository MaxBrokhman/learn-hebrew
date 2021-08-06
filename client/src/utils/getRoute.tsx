import { baseRoute } from '../config'

export const getRoute = (route?: string) => route ? `${baseRoute}${route}` : baseRoute
