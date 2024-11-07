import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTableStructureWithFunction } from "@/lib/networks/tableQueries";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface Column {
  column_name: string;
  data_type: string;
  is_nullable: string;
}

export default function TableDashboard({ tableName }: { tableName: string }) {
  const { data, error, isLoading } = useQuery<Column[], Error>({
    queryKey: [tableName], // Unique query key
    queryFn: () =>
      new Promise<Column[]>((resolve, reject) => {
        getTableStructureWithFunction(tableName)
          .then((res) => {
            console.log(res);
            if (res) {
              resolve(res);
            } else {
              reject("No data found");
            }
          })
          .catch((err) => {
            reject(err);
          });
      }),
    enabled: !!tableName, // Only run if tableName is provided
  });

  console.log(data);

  //   useEffect(() => {
  //     getTableStructureWithFunction("proker").then((res) => console.log(res));
  //   });

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {/* <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">update</TableCell> */}
        </TableRow>
      </TableBody>
    </Table>
  );
}
