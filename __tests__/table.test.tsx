import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProviders } from '@/lib/utils-for-tests'
import { createCryptoCurrencyTableData } from '@/services/create-crypto-currency-table-data'
import { Table } from '@/components/ui/table'
import { columns } from '@/components/dashboard/columns'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TableHeaderDashboard } from '@/components/dashboard/table-header-dashboard'
import { TableBodyDashboard } from '@/components/dashboard/table-body-dashboard'
import { CardContent } from '@/components/ui/card'

describe('CryptoCurrencyTableData component', () => {
  it('renders table column correctly', () => {

    const TestCryptoCurrencyTableData = () => {
      const data = createCryptoCurrencyTableData(
        {
          currentValues: { ethusdt: '3906.21000000' },
          percentageChange: { ethusdt: 0.00007164350193442575 },
        },
        ['ethusdt']
      );

      const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      });

      return (
        <div className="rounded-md border">
          <CardContent>
            <Table>
              <TableHeaderDashboard table={table} />
              <TableBodyDashboard table={table} columns={columns} />
            </Table>
          </CardContent>
        </div>
      )
    };

    renderWithProviders(<TestCryptoCurrencyTableData />);

    // Test headers table
    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('Preço')).toBeInTheDocument();
    expect(screen.getByText('Variação %')).toBeInTheDocument();

    // Test body table
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
    expect(screen.getByText('0.01%')).toBeInTheDocument();
    expect(screen.getByText('3,906.21')).toBeInTheDocument();
  });
})