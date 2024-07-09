export interface IPlaceBetProps {
    bgColor?: string;
    handleClose?: () => void;
    bets: Array<any>;
    goalPrice?: string;

}

export interface ILayout {
    children: ReactNode;
}

export interface IBetPanelProps extends IPlaceBetProps {
    isOpen?: boolean;
}

export interface IInputWrapper<T> extends React.InputHTMLAttributes<T> {
    label?: string;
    extra?: string;
    CustomComp?: ReactNode;
    LeftComp?: ReactNode;
    RightComp?: ReactNode;
    error?: string;
    children: ReactNode;
    state?: string;
}

export interface IInputWrapperExtended<T> extends Omit<IInputWrapper<T>, "children"> { }

export interface ISelectOption {
    label: string;
    value: string;
}

export interface IBaseWrapper extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;

}


export interface IBaseEmptyComponent {
    text?: string,
    children?: ReactNode,
    className?: string

}


export interface IInpageWrapper extends IBaseWrapper {
    hideGoBack?: boolean;
    title?: string;
    showBreadCrumb?: boolean;
}

export type ICrudFilterTypes = 'search' | 'date' | 'select' | 'checkbox' | 'switch' | 'radio' | 'custom';

export type IFileType = File | string;

export interface ICrudWrapper extends IBaseWrapper {
    create?: {
        title: string,
        action: () => void
    },
    title?: string;
    availableFilters?: Array<ICrudFilterTypes>;
    filterAction?: (type: ICrudFilterType, data?: any) => void;
}

export interface ICmsAction {
    action: () => void;
    label?: string;
    icon?: ReactNode;
    loader?: boolean;
}

export interface IActionConfig {
    onSave?: () => void;
    onPreview?: () => void;
    onDismiss?: () => void;
}

export interface ICmsWrapper {
    children: ReactNode,
    actionsConfig?: IActionConfig,
    className?: string,
    wrapperClassName?: string
    title?: string
    loading?: 'save' | 'preview' | 'dismiss' | null,
    ExtraComp?: ReactNode
}

export interface IDefaultMedia {
    src: string;
    type: string;
    duration?: number;
}

export interface IAddMediaComp {
    onChange: (e: any) => void;
    acceptFileType: string;
    defaultMedia?: IDefaultMedia;
    getDuration?: (duration: number) => void;
}