import { CryptoCurrencyColumnData } from '@/interfaces/types';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import { SkeletonLoader } from '@/components/ui/skeleton-loader';

export const columns: ColumnDef<CryptoCurrencyColumnData>[] = [
  {
    accessorKey: 'rank',
    header: () => {
      return <div className="text-xs sm:text-base">#</div>;
    },
    cell: ({ row }) => <div className="text-xs sm:text-base">{row.getValue('rank')}</div>,
  },
  {
    accessorKey: 'name',
    header: () => {
      return <div className="text-xs sm:text-base">Nome</div>;
    },
    cell: ({ row }) => (
      <div className="text-right text-xs sm:text-base">{row.getValue('name')}</div>
    ),
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right text-xs sm:text-base">Preço</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));

      if (isNaN(amount)) {
        return <SkeletonLoader />;
      }

      const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);

      return (
        <div className="flex flex-col items-end justify-end text-xs font-medium sm:flex-row sm:text-base">
          <span>USD₮ </span>
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: 'percentageChange',
    header: () => <div className="text-right text-xs sm:text-base">Variação %</div>,
    cell: ({ row }) => {
      const percentageChange: number = row.getValue('percentageChange');

      if (isNaN(percentageChange)) {
        return <SkeletonLoader />;
      }

      const absolutPercentageChange = Math.abs(percentageChange);

      const formatted = (absolutPercentageChange / 100).toLocaleString('en-US', {
        style: 'percent',
        minimumFractionDigits: 3,
      });

      const isPositive = percentageChange > 0;

      return (
        <div
          className={`flex flex-col items-center justify-end gap-1 text-xs font-medium sm:flex-row sm:text-base ${isPositive ? 'text-green-500' : 'text-red-500'}`}
        >
          {isPositive ? <ArrowBigUp className="h-6 w-6" /> : <ArrowBigDown className="h-6 w-6" />}
          {formatted}
        </div>
      );
    },
  },
];
