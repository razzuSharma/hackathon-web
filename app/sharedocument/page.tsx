'use client'

import React from 'react'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api"


// interface newData {
//     id: number,
//     text: string
// }
const SharedDocuments = () => {
    const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text }) => (
        <div key={_id.toString()}>{text}</div>
      ))}
    </main>
  )
}

export default SharedDocuments