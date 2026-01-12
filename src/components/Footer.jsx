import { ModeToggle } from "./mode-toggle";

function Footer() {
    return (
        <footer className="w-full py-8 mt-auto">
            <div className="@container max-w-400 mx-4 sm:px-6 lg:px-32">
                <div className="flex items-center justify-between py-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Nahin Bin Kaysar
                    </div>

                    <div className="flex items-center gap-4">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
