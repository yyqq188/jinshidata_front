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

export default function EconomyTable() {


    const [economyData,setEconomyData] = useState([])
    const dateChange = async (value) => {
      const year = (value.getFullYear()).toString().padStart(4, '0')
      const month = (value.getMonth() + 1).toString().padStart(2, '0')
      const day = (value.getDate()).toString().padStart(2, '0')
      const url = `https://jinshidata-api.onrender.com/economics/${year}/${month}/${day}`
      const { data } = await axios(url,{headers:{Accept:'application/json'}})
      setEconomyData(data)
    }

  return (
    <>
      
      <div className="mt-4 mb-10">
        <DatePicker className="max-w-sm mx-auto"  onValueChange={(value) => dateChange(value)}/>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>actual</TableHeaderCell>
            <TableHeaderCell className="text-right">affect</TableHeaderCell>
            <TableHeaderCell className="text-right">consensus</TableHeaderCell>
            <TableHeaderCell className="text-right">country</TableHeaderCell>
            <TableHeaderCell className="text-right">id</TableHeaderCell>
            <TableHeaderCell className="text-right">indicator_id</TableHeaderCell>
            <TableHeaderCell className="text-right">name</TableHeaderCell>
            <TableHeaderCell className="text-right">previous</TableHeaderCell>
            <TableHeaderCell className="text-right">pub_time</TableHeaderCell>
            <TableHeaderCell className="text-right">pub_time_unix</TableHeaderCell>
            <TableHeaderCell className="text-right">revised</TableHeaderCell>
            <TableHeaderCell className="text-right">show_affect</TableHeaderCell>
            <TableHeaderCell className="text-right">star</TableHeaderCell>
            <TableHeaderCell className="text-right">time_period</TableHeaderCell>
            <TableHeaderCell className="text-right">time_status</TableHeaderCell>
            <TableHeaderCell className="text-right">unit</TableHeaderCell>
           
          </TableRow>
        </TableHead>

        <TableBody>
          {economyData
            .map((item) => (
              <TableRow key={item.actual}>
                <TableCell>{item.actual}</TableCell>
                <TableCell className="text-right">{item.affect}</TableCell>
                <TableCell className="text-right">{item.consensus}</TableCell>
                <TableCell className="text-right">{item.country}</TableCell>
                <TableCell className="text-right">{item.id}</TableCell>
                <TableCell className="text-right">{item.indicator_id}</TableCell>
                <TableCell className="text-right">{item.name}</TableCell>
                <TableCell className="text-right">{item.previous}</TableCell>
                <TableCell className="text-right">{item.pub_time}</TableCell>
                <TableCell className="text-right">{item.pub_time_unix}</TableCell>
                <TableCell className="text-right">{item.revised}</TableCell>
                <TableCell className="text-right">{item.show_affect}</TableCell>
                <TableCell className="text-right">{item.star}</TableCell>
                <TableCell className="text-right">{item.time_period}</TableCell>
                <TableCell className="text-right">{item.time_status}</TableCell>
                <TableCell className="text-right">{item.unit}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}