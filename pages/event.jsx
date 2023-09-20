"use client";
import axios from 'axios'
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  DatePicker
} from "@tremor/react";

import { useState } from "react";

export default function EventTable() {


    const [eventData,setEventData] = useState([])
    const dateChange = async (value) => {
      const year = (value.getFullYear()).toString().padStart(4, '0')
      const month = (value.getMonth() + 1).toString().padStart(2, '0')
      const day = (value.getDate()).toString().padStart(2, '0')
      const url = `https://jinshidata-api.onrender.com/event/${year}/${month}/${day}`
      const { data } = await axios(url,{headers:{Accept:'application/json'}})
      setEventData(data)
    }

  return (
    <>
      <div className='flex justify-center'>
        <h1 className=' text-black font-bold text-2xl'>Event Info</h1>
      </div>
      <div className="mt-4 mb-10">
        <DatePicker className="max-w-sm mx-auto"  onValueChange={(value) => dateChange(value)}/>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>country</TableHeaderCell>
            <TableHeaderCell className="text-right">emergencies</TableHeaderCell>
            <TableHeaderCell className="text-right">event_content</TableHeaderCell>
            <TableHeaderCell className="text-right">event_time</TableHeaderCell>
            <TableHeaderCell className="text-right">id</TableHeaderCell>
            <TableHeaderCell className="text-right">note</TableHeaderCell>
            <TableHeaderCell className="text-right">people</TableHeaderCell>
            <TableHeaderCell className="text-right">region</TableHeaderCell>
            <TableHeaderCell className="text-right">star</TableHeaderCell>
           
          </TableRow>
        </TableHead>

        <TableBody>
          {eventData
            .map((item) => (
              <TableRow key={item.country}>
                <TableCell>{item.country}</TableCell>
                <TableCell className="text-right">{item.emergencies}</TableCell>
                <TableCell className="text-right">{item.event_content}</TableCell>
                <TableCell className="text-right">{item.event_time}</TableCell>
                <TableCell className="text-right">{item.id}</TableCell>
                <TableCell className="text-right">{item.note}</TableCell>
                <TableCell className="text-right">{item.people}</TableCell>
                <TableCell className="text-right">{item.region}</TableCell>
                <TableCell className="text-right">{item.star}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}