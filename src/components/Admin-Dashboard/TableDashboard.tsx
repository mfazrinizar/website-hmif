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
import { useMemberData, ColumnMember } from "@/lib/networks/profileQueries";
import { useEffect, useState } from "react";

interface Column {
  column_name: string;
  data_type: string;
  is_nullable: string;
}

const memberProps: (keyof ColumnMember)[] = [
  "name",
  "email",
  "instagram",
  "position_id",
  "division_id",
];

export default function TableDashboard({ tableName }: { tableName: string }) {
  const [fetchedData, setFetchedData] = useState<ColumnMember[]>();

  const { data, error, isLoading } = useQuery<Column[], Error>({
    queryKey: [tableName],
    queryFn: () =>
      new Promise<Column[]>((resolve, reject) => {
        getTableStructureWithFunction(tableName)
          .then((res) => {
            // console.log(res);
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
    enabled: !!tableName,
  });

  function switchTable() {
    switch (tableName) {
      case "member":
        return useMemberData();
      default:
        return null;
    }
  }

  let tempData = switchTable();

  useEffect(() => {
    if (tempData) {
      setFetchedData(tempData);
    }
  }, [tempData]);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {Array.isArray(data) && data.length > 0 ? (
            data?.slice(2, data.length).map((column) => (
              <TableHead className="font-medium" key={column.column_name}>
                {column.column_name}
              </TableHead>
            ))
          ) : (
            <TableCell colSpan={3}>No data available</TableCell>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {fetchedData
          ? fetchedData?.map((item) => (
              <TableRow>
                {memberProps?.map((list) => (
                  <TableCell className="font-medium">{item[list]}</TableCell>
                ))}
              </TableRow>
            ))
          : ""}
        {/* <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">update</TableCell> */}
      </TableBody>
    </Table>
  );
}
