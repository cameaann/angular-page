export interface ISubject {
    title: string;
    items: any[];
    getDisplayName(item): string;
}