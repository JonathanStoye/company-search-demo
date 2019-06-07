import { useEffect, useState } from 'react'
import { getCompanies } from '../services/companyService'

export const useGetCompanies = () => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const { data } = await getCompanies()
        setCompanies(data)
      } catch (error) {}
    }
    fetchCompanies()
  }, [setCompanies])

  return companies
}
