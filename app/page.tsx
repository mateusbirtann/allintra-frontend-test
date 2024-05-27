import Dashboard from '@/components/dashboard/dashboard';

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="mx-auto w-80 max-w-4xl p-2 sm:w-full">
        <Dashboard />
      </div>
    </main>
  );
}
