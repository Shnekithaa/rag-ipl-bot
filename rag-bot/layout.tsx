import "./global.css"

export const metadata = {
    title: "IPLBOT",
    description: "The place for all your IPL questions"
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout