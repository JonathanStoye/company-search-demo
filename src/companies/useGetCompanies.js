import { useEffect, useState } from 'react'
import { getCompanies } from '../services/companyService'

export const useGetCompanies = ({ searchTerm, categories }) => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const { data } = await getCompanies()
        // Bypass the algorithm if no search present
        if (!searchTerm && categories.size === 0) {
          setCompanies(data)
          return undefined
        }
        // Weighted algorithm which adds 1 for each hit of the search term
        // As well as category matches. Shows only dates with matches > 0
        // and the data is sorted by matches descending
        const searchTermRegex = new RegExp(searchTerm, 'gi')
        const ratedData = data.map(date => {
          let rating = 0
          if (categories.size > 0 && categories.has(date.specialty)) {
            rating += 1
          }
          // Prevent =1 rating if searchTerm is empty
          if (searchTerm && searchTermRegex.test(date.companyName)) {
            rating += 1
          }
          return {
            ...date,
            rating,
          }
        })
        const filteredData = ratedData.filter(({ rating }) => rating > 0)
        const sortedData = filteredData.sort((a, b) => b.rating - a.rating)
        setCompanies(sortedData)
      } catch (error) {}
    }
    fetchCompanies()
  }, [categories, searchTerm, setCompanies])

  return companies
}
