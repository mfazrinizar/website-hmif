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
import {
  useMemberData,
  ColumnMember,
  deleteMemberData,
} from "@/lib/networks/profileQueries";
import { useEffect, useState } from "react";
import {
  ColumnAcademic,
  ColumnScholarship,
  ColumnCompetition,
  ColumnSeminar,
  useAcademicData,
} from "@/lib/networks/academicQueries";
import { Button } from "../ui/button";

interface Column {
  column_name: string;
  data_type: string;
  is_nullable: string;
}

const memberProps: (keyof ColumnMember)[] = [
  "name",
  "instagram",
  "email",
  "position_id",
  "division_id",
];

const academicProps: (keyof ColumnAcademic)[] = [
  "title",
  "category",
  "date",
  "description",
  "img",
  "type",
  "details_id",
];

const scholarshipProps: (keyof ColumnScholarship)[] = [
  "img_details",
  "open_register",
  "category",
  "available_to",
  "presented_by",
  "description_details",
];

const competitionProps: (keyof ColumnCompetition)[] = [
  "img_details",
  "open_register",
  "submission",
  "announcement",
  "presented_by",
  "description_details",
];

const seminarProps: (keyof ColumnSeminar)[] = [
  "img_details",
  "date",
  "time",
  "media",
  "presented_by",
  "description_details",
  "open_to",
];

export default function TableDashboard({ tableName }: { tableName: string }) {
  const [fetchedData, setFetchedData] = useState<any[]>();
  const [fieldTable, setFieldTable] = useState<any[]>();

  const { data } = useQuery<Column[], Error>({
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

  function switchField() {
    switch (tableName) {
      case "member":
        return memberProps;
      case "academic_scholarship":
        return academicProps;
      case "academic_competition":
        return academicProps;
      case "academic_seminar":
        return academicProps;
      case "academic_scholarship_details":
        return scholarshipProps;
      case "academic_competition_details":
        return competitionProps;
      case "academic_seminar_details":
        return seminarProps;
      default:
        return null;
    }
  }

  function switchTable() {
    switch (tableName) {
      case "member":
        return useMemberData();
      case "academic_competition":
        return useAcademicData("academic_competition");
      case "academic_competition_details":
        return useAcademicData("academic_competition_details");
      case "academic_scholarship":
        return useAcademicData("academic_scholarship");
      case "academic_scholarship_details":
        return useAcademicData("academic_scholarship_details");
      case "academic_seminar":
        return useAcademicData("academic_seminar");
      case "academic_seminar_details":
        return useAcademicData("academic_seminar_details");
      default:
        return null;
    }
  }

  const tempData = switchTable();
  const tempField = switchField();

  useEffect(() => {
    if (tempData) setFetchedData(tempData);
    if (tempField) setFieldTable(tempField);
  }, [tempData, tempField]);

  if (!data) {
    return <div>Loading...</div>;
  }

  async function onDelete(title: any, name: any) {
    const res = await deleteMemberData(title, name);

    console.log(res);
  }

  return (
    <Table>
      <TableCaption>A list of your recent tables.</TableCaption>
      <TableHeader>
        <TableRow>
          {/* {Array.isArray(data) && data.length > 0 ? (
            data?.slice(2, data.length).map((column) => (
              <TableHead className="font-medium" key={column.column_name}>
                {column.column_name}
              </TableHead>
            ))
          ) : (
            <TableCell colSpan={3}>No data available</TableCell>
          )} */}
          <TableCell className="font-medium">Update</TableCell>
          <TableCell className="font-medium">Delete</TableCell>
          {fieldTable?.map((item, key) => (
            <TableCell className="font-medium" key={item + key}>
              {item}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {fetchedData
          ? fetchedData?.map((item, key) => (
              <TableRow key={item.id + key}>
                <TableCell>
                  <Button>Update</Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant={"destructive"}
                    onClick={() =>
                      onDelete(fieldTable![0], item[fieldTable![0]])
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
                {fieldTable?.map((list, key) => (
                  <TableCell className="font-medium" key={item[list] + key}>
                    {item[list]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          : ""}
      </TableBody>
    </Table>
  );
}
