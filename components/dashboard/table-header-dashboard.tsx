import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CryptoCurrencyColumnData } from '@/interfaces/types';
import { flexRender, Table } from '@tanstack/react-table';

interface TableHeaderDashboardProps {
  table: Table<CryptoCurrencyColumnData>;
}

export function TableHeaderDashboard({ table }: TableHeaderDashboardProps) {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup: any) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => {
            return (
              <TableHead key={header.id} className="[&:has([role=checkbox])]:pl-3">
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
}
