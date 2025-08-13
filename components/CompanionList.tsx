import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
interface CompanionComponentProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = ({
  title,
  companions,
  classNames,
}: CompanionComponentProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>
      <table>
        <TableCaption>A List of your recent invoices</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {companions?.map(({id,subject,name,topic,duration}) => (
                <TableRow>
                    <TableCell key={id}>
                        <Link href={'/companions/${companion.id}'}>
                            <div className="flex items-center gap-2">
                                <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor:getSubject(subject)}}>
                                <Image src={'/icons/${subject}.svg'}
                                alt={subject}
                                height={35}
                                width={35}
                                />
                            </div>
                            </div>
                        </Link>
                    </TableCell>
                </TableRow>
            )}
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$100.00</TableCell>
          </TableRow>
        </TableBody>
      </table>
    </article>
  );
};

export default CompanionList;
