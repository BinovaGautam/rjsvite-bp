export interface IDdownActionItem {
    title : string,
    icon ?: ReactNode,
    onClick ?: () => void
}

export interface IDdownAction{
    items : IDdownActionItem[]
}

export interface IBaseLoader {
    loading ?: boolean,
    loadingText ?: string,
    children ?: ReactNode,
    className ?: string
}

export interface IStatusCapsule {
    status: IAppointmentStatus,
    className ?: string
}

export interface IRTLwrapper {
    isOpen ?: boolean,
    onClose ?: () => void,
    children ?: ReactNode,
    reverse ?: boolean,
    className ?: string,
    title ?: string,
}

export interface Header {
    key: string;
    value: string;
  }
  
  export interface Data {
    key: string;
    value: string;
  }
  

interface IErrorComp {
    message?: string
    code: 404 | 500 | 403 | 401 | 400
    redirect?: string
}