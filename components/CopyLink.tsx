"use client"
import { useState, useEffect, useRef } from "react"

export default function CopyLink({ username }: { username: string }) {
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(`https://trysailor.dev/${username}`)
            setCopied(true)

            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.log("Failed to copy", error)
        }
    }
    return (
        <div onClick={copyLink} className="px-3 py-2 rounded-full border border-muted/90 w-fit cursor-pointer">
            <p className="text-[0.9rem] max-sm:text-[0.8rem]">{copied ? "Copied" : "Copy page link"}</p>
        </div>
    )
};
