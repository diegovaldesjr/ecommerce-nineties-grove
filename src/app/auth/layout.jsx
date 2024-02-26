export default function AuthLayout({ children }) {
    return (
        <main className="flex justify-center">
            <div className="w-full sm:w-[350px] px-10">
                { children }
            </div>
        </main>
    );
}