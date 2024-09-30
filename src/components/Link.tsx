import { meta } from "@data/meta";
import React from "react";

const isExternalLink = (href: string): Boolean => {
    const domain = new URL(meta.openGraph?.url as string);
    try {
        const url = new URL(href, domain); // href를 절대 URL로 변환
        return url.hostname !== domain.hostname; // 현재 도메인과 다른 도메인인지 확인
    } catch (e) {
        // 유효하지 않은 URL이면 false 반환
        return false;
    }
}

const Link: React.FC<{
    href: string;
    className?: string;
    children: React.ReactNode;
}> = ({ href, children, className }) => (
    isExternalLink(href) ?
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>:
        <a href={href} className={className}>{children}</a>
)


export default Link;