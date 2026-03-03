export type LayoutType = 'standard' | 'bento';

export interface LayoutOption {
    id: LayoutType;
    label: string;
}

export const layouts: LayoutOption[] = [
    { id: 'standard', label: 'Estándar' },
    { id: 'bento', label: 'Bento Grid' }
];

export function getInitialLayout(): LayoutType {
    if (typeof localStorage !== 'undefined') {
        return (localStorage.getItem('app-layout') as LayoutType) || 'standard';
    }
    return 'standard';
}

export function setLayout(layout: LayoutType) {
    document.body.setAttribute('data-layout', layout);
    localStorage.setItem('app-layout', layout);

    // Update state without full reload
    window.dispatchEvent(new CustomEvent('layout-change', { detail: layout }));
}
