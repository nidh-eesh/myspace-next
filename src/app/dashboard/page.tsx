import { auth, signIn } from "@/utils/auth";
import { prisma } from "@/utils/prisma";
import { ProfileForm } from "./ProfileForm";

export default async function Dashboard() {
    const session = await auth();

    if (!session) {
        await signIn();
    }

    const userEmail = session?.user?.email ?? undefined;
    
    const user = await prisma.user.findUnique({
        where: {
            email: userEmail,
        }
    })    

    return(
        <>
        <h1>Dashboard</h1>
        <ProfileForm user={user} />
        </>
    )
}