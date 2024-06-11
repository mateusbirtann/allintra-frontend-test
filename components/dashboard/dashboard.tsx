'use client';

import * as React from 'react';

import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table } from '@/components/ui/table';
import { columns } from './columns';
import { TableHeaderDashboard } from './table-header-dashboard';
import { TableBodyDashboard } from './table-body-dashboard';
import { useCryptoCurrencyData } from '@/hooks/use-crypto-currency-data';
import { createCryptoCurrencyTableData } from '@/services/create-crypto-currency-table-data';

export default function Home() {
  const cryptoCurrencyPairs = ['btcusdt', 'ethusdt', 'solusdt', 'dogeusdt'];
  const cryptoCurrencyData = useCryptoCurrencyData(cryptoCurrencyPairs);
  const data = createCryptoCurrencyTableData(cryptoCurrencyData, cryptoCurrencyPairs);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeaderDashboard table={table} />
            <TableBodyDashboard table={table} columns={columns} />
          </Table>
        </div>
      </CardContent>
      <p className="text-xs text-zinc-500 my-4">Variação % representa a diferença de valor em percentual desde a abertura do dashborad</p>
    </Card>
  );
}
