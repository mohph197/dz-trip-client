import { FunctionComponent } from "react";

type PageSectionProps = {
    name: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
}

const POSITIONS = ['relative', 'absolute', 'fixed', 'sticky'];
 
const PageSection: FunctionComponent<PageSectionProps> = ({ name, children, className, title }) => {
    return (
        <section id={name.toLowerCase()} className={`w-full pt-20 md:pt-24 flex flex-col ${className && POSITIONS.some((position) => className.includes(position)) ? '' : 'relative'} ${className ? className : ''}`}>
            {title && (
                <h2 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-text-blackGray text-center">{title}</h2>
            )}
            {children}
        </section>
    );
}
 
export default PageSection;