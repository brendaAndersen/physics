import { Helmet } from "react-helmet-async";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../../components/ui/table";

export function Users(){
    return (<>
        <Helmet title="Users" />
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tighy">Users</h1>
        </div>
        <div className="space-y-2.5">
            <form className="flex item-center gap-2">
                {/* <span className="text-sm font-semibold flex place-items-center">
                    Filtros:
                </span> */}
                <input 
                className="p-2 h-8 w-[320px] bg-slate-900 rounded-md" 
                placeholder="search username" type="text" />
                
            </form>
            <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Name</TableHead>
                  <TableHead className="w-[180px]">E-mail</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="text-white">
                    <TableCell className="font-medium">#</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>user@email.com</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </div>
        </div>
    </>)
}