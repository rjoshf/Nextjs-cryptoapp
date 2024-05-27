import { getServerSession } from 'next-auth';

import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Login from '@/components/Login';

export default async function LoginPage() {

    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/");
    }

    return (
        <main className="min-h-screen">
            <Login />
        </main>
    );
}