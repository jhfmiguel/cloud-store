import { useContext } from 'react'
import ThemeContext from '../context/AppContext'

const useThemeData = () => useContext(ThemeContext)

export default useThemeData