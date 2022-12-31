import Link from "next/link"
import { useRouter } from "next/router"

export default function ClientPage() {
    const router = useRouter();
    const clients = [
        {id: 'max', name: 'Maximilian'},
        {id: 'manu', name: 'Manuel'}
    ]

    const seeDetailsHandler = (clientId, clientProjectId) => {
        router.push({
            pathname: "/client/[id]/[clientprojectid]",
            query: {
                id: clientId,
                clientprojectid: clientProjectId
            }
        })
    }

    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {
                    clients.map(client => 
                            <li key={client.id}>
                                <Link href={{
                                    pathname: "/client/[id]",
                                    query: {id: client.id, name: client.name},
                                }}>{client.name}</Link>
                                <button onClick={() => seeDetailsHandler(client.id, client.name)}>See Details</button>
                            </li>
                        )
                }
            </ul>
        </div>
    )
}