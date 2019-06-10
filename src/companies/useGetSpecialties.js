import { useEffect, useState } from 'react'
import { getCompanies } from '../services/companyService'

export const useGetSpecialties = () => {
  const [specialties, setSpecialties] = useState([])

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const { data } = await getCompanies()

        const specialties = new Set()
        data.forEach(({ specialty }) => specialties.add(specialty))
        setSpecialties(Array.from(specialties))
      } catch (error) {}
    }
    fetchSpecialties()
  }, [])

  return specialties
}
