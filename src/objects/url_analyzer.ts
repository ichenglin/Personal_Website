export class URLAnalyzer {

    private window_location: Location;
    private url_parameters: Map<string, string>;

    constructor(window_location: Location) {
        this.window_location = window_location;
        this.url_parameters = this.capture_url_parameters(window_location);
    }

    private capture_url_parameters(window_location: Location): Map<string, string> {
        const new_url_parameters = new Map<string, string>();
        window_location.search.substring(1).split("&").forEach(parameter_raw => {
            const seperator = parameter_raw.indexOf("=");
            const parameter_name = parameter_raw.substring(0, seperator);
            const parameter_value = parameter_raw.substring(seperator + 1);
            new_url_parameters.set(parameter_name, parameter_value);
        });
        return new_url_parameters;
    }

    public get_url_full(): string {
        return this.window_location.href;
    }

    public get_url_relative(): string {
        return this.window_location.pathname;
    }

    public get_parameters(): Map<string, string> {
        return this.url_parameters;
    }

    public get_parameter(name: string, fallback: string): string {
        return this.url_parameters.get(name) || fallback;
    }

}