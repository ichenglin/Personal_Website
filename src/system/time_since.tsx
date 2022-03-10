const time_units = [
    {name: "year", seconds: 30758400},
    {name: "month", seconds: 2592000},
    {name: "week", seconds: 604800},
    {name: "day", seconds: 86400},
    {name: "hour", seconds: 3600},
    {name: "minute", seconds: 60},
    {name: "second", seconds: 1}
];

export function time_since(date_unix: number): string {
    const now_unix = (Date.now() / 1000);
    const seconds_passed = now_unix - date_unix;
    for (let unit_index = 0; unit_index < time_units.length; unit_index++) {
        const loop_unit = time_units[unit_index];
        if (seconds_passed > loop_unit.seconds) {
            const loop_unit_amount = seconds_passed / loop_unit.seconds;
            const loop_unit_amount_simplified = Math.floor(loop_unit_amount);
            const loop_unit_display = loop_unit_amount_simplified <= 1 ? loop_unit.name : `${loop_unit.name}s`;
            return `${loop_unit_amount_simplified} ${loop_unit_display} ago`;
        }
    }
    return "now";
}