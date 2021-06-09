export interface ModalConfig {
    modalTitle: string
    dismissButtonLabel?: string
    confirmButtonLabel?: string
    shouldConfirm?(): Promise<boolean> | boolean
    shouldDismiss?(): Promise<boolean> | boolean
    onConfirm?(): Promise<boolean> | boolean
    onDismiss?(): Promise<boolean> | boolean
    disableConfirmButton?(): boolean
    disableDismissButton?(): boolean
    hideConfirmButton?(): boolean
    hideDismissButton?(): boolean
}