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

export default function HolidayTable() {


    const [holidayData,setHolidayData] = useState([])
    const dateChange = async (value) => {
      const year = (value.getFullYear()).toString().padStart(4, '0')
      const month = (value.getMonth() + 1).toString().padStart(2, '0')
      const day = (value.getDate()).toString().padStart(2, '0')
      const url = `https://jinshidata-api.onrender.com/holiday/${year}/${month}/${day}`
      const { data } = await axios(url,{headers:{Accept:'application/json'}})
      setHolidayData(data)
    }

  return (
    <>
      
      <div className="mt-4 mb-10">
        <DatePicker className="max-w-sm mx-auto"  onValueChange={(value) => dateChange(value)}/>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>name</TableHeaderCell>
            <TableHeaderCell className="text-right">exchange_name</TableHeaderCell>
            <TableHeaderCell className="text-right">date</TableHeaderCell>
            <TableHeaderCell className="text-right">rest_note</TableHeaderCell>
            <TableHeaderCell className="text-right">id</TableHeaderCell>
            <TableHeaderCell className="text-right">country</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {holidayData
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.exchange_name}</TableCell>
                <TableCell className="text-right">{item.date}</TableCell>
                <TableCell className="text-right">{item.rest_note}</TableCell>
                <TableCell className="text-right">{item.id}</TableCell>
                <TableCell className="text-right">{item.country}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}