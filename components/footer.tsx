import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
    return (
        <footer className="container mx-auto md:px-8 lg:px-24">
            <div className="flex flex-col items-center justify-center gap-4 pb-16 border-b border-gray-light">
                <h1 className="text-3xl font-bold">
                    Stay in Touch
                </h1>
                <span className="text-base text-gray-bold text-center">
                    Sign up for our global brief on all things sustainable.
                </span>
                <div className="flex gap-4">
                    <Input type="email" className="border border-gray-light md:w-96 bg-[#F8F8F8] focus-visible:ring-offset-0" placeholder="Email Address" />
                    <Button className="bg-white hover:bg-primary text-primary hover:text-white border border-primary">
                        Subscribe
                    </Button>
                </div>
            </div>
            <div></div>
            <div></div>
        </footer>
    )
}
