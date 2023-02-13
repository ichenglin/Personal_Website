import { MouseEventHandler } from "react";

export default function silent_scroll(event: any, url: string, selector: string): MouseEventHandler<HTMLAnchorElement> | undefined {
    event.preventDefault();
    // switch page
    if (window.location.pathname !== url) return; // fail
    // scroll to element
    const target_element = document.querySelector(selector);
    if (target_element === null) return;
    target_element.scrollIntoView({block: "start", behavior: "smooth"});
}