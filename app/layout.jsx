
import './styles/globals.css'
import LayoutHeader from './components/layout/LayoutHeader'
import LayoutSidebar from './components/layout/LayoutSidebar'

export const metadata = {
    title: 'شرکت برندینگ ماورانت',
    description: 'اولین شرکت برندسازی پزشکی در خاورمیانه',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                {children}
                <div className="cursor cursor-follower"></div>
                <div className="cursor cursor-dot"></div>
                <LayoutHeader/>
                <LayoutSidebar/>
            </body>
        </html>
    )
}
