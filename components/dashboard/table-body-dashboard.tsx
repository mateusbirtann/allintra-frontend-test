import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { CryptoCurrencyColumnData } from '@/interfaces/types';
import { ColumnDef, flexRender, Table } from '@tanstack/react-table';

interface TableBodyDashboardProps {
  table: Table<CryptoCurrencyColumnData>;
  columns: ColumnDef<CryptoCurrencyColumnData>[];
}

export function TableBodyDashboard({ table, columns }: TableBodyDashboardProps) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className="[&:has([role=checkbox])]:pl-3">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
