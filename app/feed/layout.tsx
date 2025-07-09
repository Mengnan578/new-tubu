interface LayoutParams {
    children: React.ReactNode
}

const Layout = ({children}: LayoutParams)=> {
    return (
        <>
            <p>Layout</p>
            <>{children}</>
        </>
    )
}

export default Layout