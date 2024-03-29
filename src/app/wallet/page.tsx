import Wallet from '@/components/Wallet';

import { getServerSession } from 'next-auth';

import { authOptions } from '../api/auth/[...nextauth]/route';

import { redirect } from 'next/navigation';

export default async function WalletPage() {

    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/");
    }

    return (
        <main className="min-h-screen">
            <Wallet />
        </main>
    )
}