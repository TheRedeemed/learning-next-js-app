import { useRouter } from "next/router"

export default function ClientProjectsPage() {
    const router = useRouter();
    return (
        <div>
            <h1>Projects of a given Client</h1>
            <h3>Project ID: {router.query.id} </h3>
        </div>
    )
}