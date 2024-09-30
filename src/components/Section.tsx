const Section: React.FC<{
    children: React.ReactNode;
}> = ({children}) => (
    <section className="w-full not-format pt-12 m-auto max-w-screen-xl flex flex-col gap-20">
        {children}
    </section>
)