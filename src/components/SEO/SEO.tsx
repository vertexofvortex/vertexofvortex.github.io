import { Helmet } from "react-helmet";

interface Props {
    title: string,
    description: string,
    imageUrl?: string,
}

export function SEO({ title, description, imageUrl }: Props) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {imageUrl && <meta property="og:image" content={imageUrl} />}
        </Helmet>
    )
}

export default SEO;