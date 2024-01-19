import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import {
  increment,
  incrementAsync,
  selectCount,
  selectStatus,
} from "./counterSlice"

export default function Counter (){
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const status = useSelector(selectStatus)
  return (
    <div>
      <div >
        </div>
    </div>
  )
}
