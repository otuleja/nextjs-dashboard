"use client"
import { useEffect } from 'react'
export default () => {
  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div>
      Client side component
    </div>
  )
}