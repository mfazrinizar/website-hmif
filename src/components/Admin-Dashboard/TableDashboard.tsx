import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTableStructureWithFunction } from "@/lib/networks/tableQueries";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  useMemberData,
  ColumnMember,
  listBucket,
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
import { useDashboardContext } from "@/lib/context/dashboardContext";
import { deleteData } from "@/lib/networks/adminQueries";
import { toast } from "sonner";
import { ColumnProker, useProkerData } from "@/lib/networks/prokerQueries";
import { deleteImage } from "@/lib/networks/adminQueries";

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
  "assets",
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

const proker: (keyof ColumnProker)[] = [
  "name",
  "date",
  "event_format",
  "description",
  "dinas",
  "benefits",
  "assets",
];

export default function TableDashboard({ tableName }: { tableName: string }) {
  const [fetchedData, setFetchedData] = useState<any[]>();
  const [fieldTable, setFieldTable] = useState<any[]>();
  const { formData, setFormData } = useDashboardContext();

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
      case "proker":
        return proker;
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
      case "proker":
        return useProkerData();
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

  const { mutate: onDelete } = useMutation({
    mutationFn: () => deleteImage(),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  function onUpdate(item: any) {
    setFormData(item);
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Table className="text-wrap">
      <TableHeader>
        <TableRow>
          <TableCell className="font-medium">Update</TableCell>
          <TableCell className="font-medium">Delete</TableCell>
          {fieldTable?.map((item, key) => (
            <TableCell className="max-w-xs" key={item + key}>
              {item}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-wrap">
        {fetchedData
          ? fetchedData?.map((item, key) => (
              <TableRow key={item.id + key}>
                <TableCell>
                  <Button onClick={() => onUpdate(item)}>Update</Button>
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
