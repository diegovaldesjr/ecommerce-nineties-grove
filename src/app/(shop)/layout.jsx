import { TopMenu } from "@/components";

export default function ShopLayout({ children }) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            { children }
        </main>
    );
}