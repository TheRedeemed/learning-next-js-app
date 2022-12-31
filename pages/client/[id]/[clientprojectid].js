import { useRouter } from "next/router"

export default function SelectedClientProjectPage() {
    const router = useRouter();
    console.log(router.query);
    
    return (
        <div>
            <h1>Project page for project {router.query.id} of a client {router.query.clientprojectid}</h1>
        </div>
    )
}