import { MouseEventHandler } from "react";

export default function silent_scroll(event: any, selector: string): MouseEventHandler<HTMLAnchorElement> | undefined {
    event.preventDefault();
    const target_element = document.querySelector(selector);
    if (target_element === null) return;
    target_element.scrollIntoView({block: "start", behavior: "smooth"});
}