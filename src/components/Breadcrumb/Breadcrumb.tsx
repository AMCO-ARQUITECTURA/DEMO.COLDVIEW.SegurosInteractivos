import './breadcrumb.css'

type BreadcrumbProps = {
    title: string;
    toggleSidebar: () => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, toggleSidebar }) => {
    return (
        <div className="breadcrumb">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='breadcrumb-button' onClick={toggleSidebar}>
                {/* <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM8 14H18V2H8V14ZM6 14V2H2V14H6Z" fill="#636363"/> */}
                <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM8 14H18V2H8V14ZM6 14V2H2V14H6Z" fill="currentColor"/>
            </svg>
            <div className="breadcrumb-divider"/>
            <p className="breadcrumb-title">{title}</p>
        </div>
    );
}

export default Breadcrumb;