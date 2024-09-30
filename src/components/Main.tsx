const MainContent: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => (
    <main className="w-full pt-12 m-auto max-w-screen-xl">
        {children}
    </main>
)

export default MainContent;