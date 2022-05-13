export interface URLParameter {

}

export class URLAnalyzer {

    private url_raw: string;
    private url_relative: string;
    private url_parameters: Map<string, string>;

    constructor(url_raw: string) {
        // designed for window.location.href
        this.url_raw = url_raw;
        this.url_relative = this.capture_url_relative(url_raw);
        this.url_parameters = this.capture_url_parameters(url_raw);
    }

    private capture_url_relative(url_raw: string): string {
		/* backdoor of useParams from react-router and react-router-dom */
		const url_parameter_matcher = url_raw.match(/^https?:\/\/[^\/]+(.+)$/);
		return url_parameter_matcher !== null ? url_parameter_matcher[1] : "/";
	}

    private capture_url_parameters(url_raw: string): Map<string, string> {
        const new_url_parameters = new Map<string, string>();
        // TODO: capture url parameters here
        return new_url_parameters;
    }

    public get_raw(): string {
        return this.url_raw;
    }

    public get_relative(): string {
        return this.url_relative;
    }

    public get_parameters(): Map<string, string> {
        return this.url_parameters;
    }

    public get_parameter(name: string, fallback: string): string {
        return this.url_parameters.get(name) || fallback;
    }

}