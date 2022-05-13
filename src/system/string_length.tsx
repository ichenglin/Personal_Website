export function string_length(string: string, maximum_length: number, append: string): string {
    return string.length <= maximum_length ? string : string.slice(0, maximum_length) + append;
}