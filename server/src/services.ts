import { WordModel } from './models'

export const getWords = async ({
  search,
  skip,
  limit,
  userId,
  searchPropertyName,
}: {
    limit?: number
    skip?: number
    search?: string
    userId: string
    searchPropertyName?: string
}) => {
  const baseQuery = { user: userId }
  const query = search
    ? { ...baseQuery, [searchPropertyName]: { $regex: search.trim().toLowerCase(), $options: 'i' } }
    : baseQuery
  const words = await WordModel.find(query, undefined, { skip, limit })
  return words
}
