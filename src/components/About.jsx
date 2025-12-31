import { Header } from "./Header";

function About() {
    return (
        <div className="min-h-svh flex flex-col">
            <Header />
            <div className="flex flex-col mt-24 bg-blue-950 flex-1">
                <div className="@container flex flex-col gap-4 max-w-400 m-3 px-4 sm:px-6 lg:px-32">
                    <h1 className="text-[8cqw] font-anton">ABOUT</h1>
                    <p className="text-muted-foreground">
                        Coming soon...
                    </p>
                </div>
            </div>
        </div>
    );
}

export { About };

