import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Table, Input, FlexboxGrid } from 'rsuite'
import axios from 'axios'
import { showSpinner } from 'store/app/actions'

const { Column, HeaderCell, Cell } = Table

const Home = () => {
  const dispatch = useDispatch()
  const [rateData, setRateData] = useState([])

  const [filter, setFilter] = useState('')

  useEffect(() => {
    dispatch(showSpinner(true))

    axios
      .get('https://api.coingecko.com/api/v3/exchange_rates')
      .then((res) => {
        const {
          data: { rates },
        } = res
        const rateData = []
        for (let key in rates) {
          rateData.push(rates[key])
        }

        setRateData(rateData)
      })
      .finally(() => {
        dispatch(showSpinner(false))
      })
  }, [dispatch])

  const filtered = filter
    ? rateData.filter((item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    : rateData

  return (
    <div>
      <FlexboxGrid align='middle'>
        <FlexboxGrid.Item>
          <h2 style={{ marginRight: 20 }}>CoinGecko Exchange Rates</h2>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item>
          <Input
            placeholder='Search...'
            value={filter}
            onChange={(v) => setFilter(v)}
          />
        </FlexboxGrid.Item>
      </FlexboxGrid>

      <Table height={320} data={filtered}>
        <Column width={200} fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey='name' />
        </Column>

        <Column width={200}>
          <HeaderCell>Unit</HeaderCell>
          <Cell dataKey='unit' />
        </Column>

        <Column width={200}>
          <HeaderCell>Value</HeaderCell>
          <Cell dataKey='value' />
        </Column>

        <Column width={200}>
          <HeaderCell>Type</HeaderCell>
          <Cell dataKey='type' />
        </Column>
      </Table>
    </div>
  )
}

export default Home
