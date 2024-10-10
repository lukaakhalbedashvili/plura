import { getPhoneNumbers } from "@/services/getPhoneNumbers";
import { LookupResponseI } from "@/app.interface";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface HomeI {
  searchParams: { page: string };
}

const Home = async ({ searchParams }: HomeI) => {
  const page = Number(searchParams.page) || 1;

  const startTime = Date.now();

  const phonesData = await getPhoneNumbers(Number(page));

  const endTime = Date.now();
  const duration = endTime - startTime;

  return (
    <main className="flex items-center justify-center flex-col px-5 pt-10">
      <p className="mb-5 text-center"> {duration} ms</p>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3 text-center">Phone Number</TableHead>
            <TableHead className="w-1/3 text-center">Status</TableHead>
            <TableHead className="w-1/3 text-center">Message</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {phonesData?.map((item: LookupResponseI) => {
            return (
              <TableRow key={item.phone}>
                <TableCell className="w-1/3 text-center font-medium">
                  {item.phone}
                </TableCell>
                <TableCell className="w-1/3 text-center">
                  {item.status}
                </TableCell>
                <TableCell className="w-1/3 text-center">
                  {item.message}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Pagination className="my-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`/?page=${Number(page) - 1}`} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink className="w-fit">{`${page} of ${Math.ceil(
              // hardcoded cuz its test task
              1200 / 100
            )}`}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href={`/?page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
};

export default Home;
