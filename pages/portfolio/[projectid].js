import { useRouter } from 'next/router'

export default function PortfolioProjectPage() {
    const router = useRouter();

    console.log('pathname: ', router.pathname)
    console.log('query: ', router.query)

    return (
        <div>
            <h1>The Portfolio project page</h1>
        </div>
    )
}