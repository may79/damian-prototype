import { useSelector } from 'react-redux'
import { getSpinner } from 'store/app/reducer'
import Spinner from 'components/Spinner'

const SpinnerContainer = () => {
  const isSpinner = useSelector((state) => getSpinner(state))

  if (isSpinner) {
    return <Spinner />
  }

  return <div />
}

export default SpinnerContainer
