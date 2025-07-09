

const Page = async ({ params }: { params: { videoId: string } })=> {
    const { videoId } = params
    return (
        <>
            <p>feed: {videoId}</p>
        </>
    )
}

export default Page