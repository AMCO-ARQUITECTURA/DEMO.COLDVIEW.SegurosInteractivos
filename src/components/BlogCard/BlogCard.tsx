import './BlogCard.css';

type BlogCardProps = {
    title: string;
    imgPath: string;
    onClick: Function;
    descriptionBadge: string;
    descriptionTitle: string;
    descriptionText: string;
    callToAction?: boolean;
    descriptionCallToAction?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, imgPath, onClick, descriptionBadge, descriptionTitle, descriptionText, callToAction, descriptionCallToAction }) => {
    return (
        <div className="col-12 blog-card" onClick={() => onClick()}>
            <div className='blog-card-header'>
                <div className='blog-card-header-title-container'>
                    <i className='pi pi-file' />
                    <span>{title}</span>
                </div>
                <span className='blog-card-header-additional-text'>Lectura recomendada</span>
            </div>
            <div className='blog-card-content'>
                <img src={imgPath} onClick={() => onClick} className="blog-card-img" />
                <div className='blog-card-description'>
                    <span className='blog-card-description-badge'>{descriptionBadge}</span>
                    <span className='blog-card-description-title'>{descriptionTitle}</span>
                    <span className='blog-card-description-text'>{descriptionText}</span>
                    {callToAction && (<span className='blog-card-call-to-action'>{descriptionCallToAction}</span>)}
                </div>
            </div>

        </div>
    )
}

export default BlogCard;