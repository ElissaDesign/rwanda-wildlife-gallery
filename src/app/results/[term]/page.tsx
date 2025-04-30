// import Gallery from "@/components/Gallery"

type Props = {
    params: {
        term: string
    }
}

export function generateMetadata({ params: { term } }: any) {
    return {
        title: `Results for ${term}`
    }
}

export default async function SearchResults({ params: { term } }: any) {
    return null
}