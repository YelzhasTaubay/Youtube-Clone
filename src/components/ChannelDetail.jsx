import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {Videos, ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const[channelDetail, setChannelDetail] = useState(null)

  const {id} = useParams()

  console.log(channelDetail)

  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
  }, [id])

  return (
    <div>{id}</div>
  )
}

export default ChannelDetail